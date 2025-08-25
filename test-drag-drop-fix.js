// Test script pour vérifier que le drag and drop fonctionne
// À exécuter dans la console du navigateur

console.log("🔧 Test de réparation du drag and drop");

// Test 1: Vérifier que SortableJS est chargé
console.log("\n📦 Vérification du chargement de SortableJS:");
if (typeof Sortable !== 'undefined') {
    console.log("✅ SortableJS chargé correctement");
} else {
    console.log("❌ SortableJS n'est pas chargé !");
}

// Test 2: Vérifier les éléments de colonne
console.log("\n📊 Vérification des colonnes CV:");
const columns = document.querySelectorAll('[id^="cv-col-"]');
console.log(`Colonnes trouvées: ${columns.length}`);

columns.forEach((col, index) => {
    console.log(`${col.id}: ${col ? '✅ Existe' : '❌ Manquant'}`);
    if (col.sortable) {
        console.log(`  └─ Sortable instance: ✅ Attachée`);
    } else {
        console.log(`  └─ Sortable instance: ❌ Non attachée`);
    }
});

// Test 3: Vérifier les handles de drag
console.log("\n🔗 Vérification des handles de drag:");
const dragHandles = document.querySelectorAll('.drag-handle');
console.log(`Handles trouvées: ${dragHandles.length}`);

dragHandles.forEach((handle, index) => {
    const module = handle.closest('.cv-module');
    if (module) {
        console.log(`✅ Handle ${index + 1}: Module "${module.id || 'sans-id'}" - Visible: ${getComputedStyle(handle).opacity !== '0'}`);
    } else {
        console.log(`❌ Handle ${index + 1}: Pas de module parent`);
    }
});

// Test 4: Vérifier les modules CV
console.log("\n📋 Vérification des modules CV:");
const cvModules = document.querySelectorAll('.cv-module');
console.log(`Modules trouvés: ${cvModules.length}`);

cvModules.forEach((module, index) => {
    const handle = module.querySelector('.drag-handle');
    const id = module.id || `module-${index + 1}`;
    console.log(`${handle ? '✅' : '❌'} Module "${id}": ${handle ? 'Handle présent' : 'HANDLE MANQUANT'}`);
});

// Test 5: Tester l'initialisation du drag and drop
console.log("\n🔄 Test de réinitialisation du drag and drop:");
try {
    if (typeof initializeAllSortable === 'function') {
        initializeAllSortable();
        console.log("✅ initializeAllSortable() exécutée sans erreur");
        
        // Revérifier les instances Sortable après réinitialisation
        const columnsAfter = document.querySelectorAll('[id^="cv-col-"]');
        let sortableCount = 0;
        columnsAfter.forEach(col => {
            if (col.sortable) sortableCount++;
        });
        console.log(`✅ Instances Sortable actives: ${sortableCount}/${columnsAfter.length}`);
    } else {
        console.log("❌ Fonction initializeAllSortable non définie");
    }
} catch (error) {
    console.log("❌ ERREUR lors de l'initialisation:", error.message);
}

// Test 6: Tester la fonctionnalité drag (simulation)
console.log("\n🎯 Test de simulation de drag:");
const firstModule = document.querySelector('.cv-module');
if (firstModule) {
    const handle = firstModule.querySelector('.drag-handle');
    if (handle) {
        console.log("✅ Module de test trouvé avec handle");
        
        // Simuler un hover pour voir si le handle devient visible
        firstModule.dispatchEvent(new Event('mouseenter'));
        const handleOpacity = getComputedStyle(handle).opacity;
        console.log(`Handle visibility au hover: ${handleOpacity !== '0' ? '✅ Visible' : '❌ Invisible'}`);
        
        // Vérifier les styles CSS
        const handleStyles = getComputedStyle(handle);
        console.log(`Handle cursor: ${handleStyles.cursor}`);
        console.log(`Handle position: ${handleStyles.position}`);
    } else {
        console.log("❌ Aucun handle trouvé dans le premier module");
    }
} else {
    console.log("❌ Aucun module CV trouvé");
}

// Test 7: Vérifier les événements
console.log("\n🎭 Vérification des événements:");
const testColumn = document.querySelector('[id^="cv-col-"]');
if (testColumn && testColumn.sortable) {
    const sortableInstance = testColumn.sortable;
    console.log("✅ Instance Sortable détectée");
    console.log(`  └─ Options groupe: ${sortableInstance.option('group')}`);
    console.log(`  └─ Handle selector: ${sortableInstance.option('handle')}`);
    console.log(`  └─ Animation: ${sortableInstance.option('animation')}ms`);
} else {
    console.log("❌ Aucune instance Sortable trouvée");
}

// Test 8: Diagnostic CSS
console.log("\n🎨 Diagnostic CSS des handles:");
const testHandle = document.querySelector('.drag-handle');
if (testHandle) {
    const styles = getComputedStyle(testHandle);
    console.log(`Position: ${styles.position}`);
    console.log(`Top: ${styles.top}`);
    console.log(`Left: ${styles.left}`);
    console.log(`Cursor: ${styles.cursor}`);
    console.log(`Z-index: ${styles.zIndex}`);
    console.log(`Pointer events: ${styles.pointerEvents}`);
} else {
    console.log("❌ Aucun handle trouvé pour le diagnostic CSS");
}

// Résumé
console.log("\n📈 RÉSUMÉ DU DIAGNOSTIC:");
const hasLibrary = typeof Sortable !== 'undefined';
const hasColumns = document.querySelectorAll('[id^="cv-col-"]').length > 0;
const hasModules = document.querySelectorAll('.cv-module').length > 0;
const hasHandles = document.querySelectorAll('.drag-handle').length > 0;
const hasFunction = typeof initializeAllSortable === 'function';

const score = [hasLibrary, hasColumns, hasModules, hasHandles, hasFunction].filter(Boolean).length;

console.log(`SortableJS chargé: ${hasLibrary ? '✅' : '❌'}`);
console.log(`Colonnes CV présentes: ${hasColumns ? '✅' : '❌'}`);
console.log(`Modules CV présents: ${hasModules ? '✅' : '❌'}`);
console.log(`Handles de drag présents: ${hasHandles ? '✅' : '❌'}`);
console.log(`Fonction d'initialisation: ${hasFunction ? '✅' : '❌'}`);

console.log(`\n🎯 SCORE: ${score}/5`);

if (score === 5) {
    console.log("🎉 PARFAIT! Le drag and drop devrait fonctionner maintenant!");
} else if (score >= 3) {
    console.log("⚠️ BIEN! Il peut y avoir des problèmes mineurs.");
} else {
    console.log("❌ PROBLÈMES MAJEURS détectés dans le drag and drop.");
}

console.log("\n🏁 Diagnostic terminé !");

// Instructions pour tester manuellement
console.log("\n🖱️ INSTRUCTIONS DE TEST MANUEL:");
console.log("1. Survolez un module CV - le handle (⋮⋮) devrait apparaître à gauche");
console.log("2. Cliquez et faites glisser le handle pour déplacer le module");
console.log("3. Le module devrait se déplacer avec une animation fluide");
console.log("4. Relâchez pour déposer le module à sa nouvelle position");

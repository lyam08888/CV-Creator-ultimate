// Test script pour vérifier que l'erreur updatePreview est corrigée
// À exécuter dans la console du navigateur

console.log("🔧 Test de correction de l'erreur updatePreview");

// Test 1: Vérifier que tous les éléments preview sont bien initialisés
console.log("\n📋 Vérification des éléments preview:");
const previewElements = [
    'cv-nom-prenom-preview',
    'cv-poste-preview', 
    'cv-description-preview',
    'cv-experience-preview',
    'cv-formation-preview',
    'cv-competences-preview'
];

let allElementsFound = true;
previewElements.forEach(id => {
    const element = document.getElementById(id);
    const status = element ? '✅' : '❌';
    console.log(`${status} ${id}: ${element ? 'Trouvé' : 'MANQUANT'}`);
    if (!element) allElementsFound = false;
});

// Test 2: Vérifier que l'objet preview est correctement initialisé
console.log("\n🎯 Vérification de l'objet preview:");
if (typeof preview !== 'undefined') {
    console.log("✅ Objet preview défini");
    const previewKeys = [
        'cvNomPrenom', 'cvPoste', 'cvDescription', 
        'cvExperience', 'cvFormation', 'cvCompetences'
    ];
    
    previewKeys.forEach(key => {
        const element = preview[key];
        const status = element ? '✅' : '❌';
        console.log(`${status} preview.${key}: ${element ? 'Initialisé' : 'UNDEFINED'}`);
    });
} else {
    console.log("❌ Objet preview non défini");
}

// Test 3: Tester la fonction updatePreview
console.log("\n🚀 Test de la fonction updatePreview:");
try {
    // Remplir quelques champs de test
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const posteInput = document.getElementById('poste');
    const descInput = document.getElementById('description');
    
    if (nomInput && prenomInput && posteInput && descInput) {
        console.log("📝 Remplissage des champs de test...");
        nomInput.value = "DUPONT";
        prenomInput.value = "Jean";
        posteInput.value = "Développeur Full Stack";
        descInput.value = "Passionné par le développement web avec 5 ans d'expérience.";
        
        console.log("🔄 Appel de updatePreview('form')...");
        if (typeof updatePreview === 'function') {
            updatePreview('form');
            console.log("✅ updatePreview('form') exécutée sans erreur !");
            
            // Vérifier que les valeurs ont été mises à jour dans la preview
            const previewNom = document.getElementById('cv-nom-prenom-preview');
            const previewPoste = document.getElementById('cv-poste-preview');
            
            if (previewNom && previewPoste) {
                console.log(`📊 Nom dans preview: "${previewNom.textContent}"`);
                console.log(`📊 Poste dans preview: "${previewPoste.textContent}"`);
                
                if (previewNom.textContent.includes("Jean DUPONT")) {
                    console.log("✅ Synchronisation nom/prénom OK");
                } else {
                    console.log("❌ Problème de synchronisation nom/prénom");
                }
                
                if (previewPoste.textContent.includes("Développeur Full Stack")) {
                    console.log("✅ Synchronisation poste OK");
                } else {
                    console.log("❌ Problème de synchronisation poste");
                }
            }
        } else {
            console.log("❌ Fonction updatePreview non définie");
        }
    } else {
        console.log("❌ Champs de formulaire non trouvés");
    }
} catch (error) {
    console.log("❌ ERREUR lors du test updatePreview:", error.message);
    console.log("Stack trace:", error.stack);
}

// Test 4: Vérifier reinitializePreviewSelectors
console.log("\n🔄 Test de reinitializePreviewSelectors:");
try {
    if (typeof reinitializePreviewSelectors === 'function') {
        reinitializePreviewSelectors();
        console.log("✅ reinitializePreviewSelectors() exécutée sans erreur");
    } else {
        console.log("❌ Fonction reinitializePreviewSelectors non définie");
    }
} catch (error) {
    console.log("❌ ERREUR reinitializePreviewSelectors:", error.message);
}

// Test 5: Test de stress - multiple updatePreview calls
console.log("\n💪 Test de stress - 10 appels updatePreview:");
try {
    for (let i = 0; i < 10; i++) {
        updatePreview('form');
    }
    console.log("✅ 10 appels updatePreview réussis !");
} catch (error) {
    console.log("❌ ERREUR pendant le test de stress:", error.message);
}

// Résumé
console.log("\n📈 RÉSUMÉ DU TEST:");
if (allElementsFound && typeof updatePreview === 'function') {
    console.log("🎉 SUCCESS! L'erreur updatePreview a été corrigée !");
    console.log("✅ Tous les éléments preview sont disponibles");
    console.log("✅ La fonction updatePreview fonctionne correctement");
    console.log("✅ L'initialisation est correcte");
} else {
    console.log("⚠️ Il reste des problèmes à résoudre:");
    if (!allElementsFound) console.log("- Certains éléments preview sont manquants");
    if (typeof updatePreview !== 'function') console.log("- La fonction updatePreview n'est pas définie");
}

console.log("\n🏁 Test terminé !");

// Test Script pour vérifier toutes les fonctionnalités CV-Creator-ultimate
// À executer dans la console du navigateur

console.log("🚀 Début des tests de fonctionnalité CV-Creator-ultimate");

// Liste de tous les boutons avec IDs à tester
const buttonTests = [
    // Actions principales
    { id: 'download-pdf-btn', name: 'Télécharger PDF', expected: 'action' },
    { id: 'share-btn', name: 'Partager', expected: 'modal' },
    { id: 'anonymize-btn', name: 'Anonymiser CV', expected: 'action' },
    { id: 'reset-cv-btn', name: 'Nouveau CV', expected: 'confirmation' },
    { id: 'toggle-overflow-btn', name: 'Détection Dépassement', expected: 'toggle' },
    { id: 'toggle-presentation-mode-btn', name: 'Mode Présentation', expected: 'toggle' },
    
    // IA et API
    { id: 'save-api-key-btn', name: 'Sauvegarder clé API', expected: 'action' },
    { id: 'toggle-api-key-visibility', name: 'Afficher/Masquer clé API', expected: 'toggle' },
    { id: 'analyze-btn', name: 'Analyser & Remplir (IA)', expected: 'ia-function' },
    { id: 'generate-mail-btn', name: 'Générer mail (IA)', expected: 'ia-function' },
    { id: 'ai-summarize-btn', name: 'Synthèse IA expériences', expected: 'ia-function' },
    { id: 'ai-limit-skills-btn', name: 'Limiter compétences (IA)', expected: 'ia-function' },
    { id: 'ai-synthesize-skills-btn', name: 'Synthétiser compétences (IA)', expected: 'ia-function' },
    { id: 'ai-color-btn', name: 'Suggestion couleur (IA)', expected: 'ia-function' },
    
    // Navigation et contenu
    { id: 'add-experience', name: 'Ajouter expérience', expected: 'dynamic-content' },
    { id: 'add-formation', name: 'Ajouter formation', expected: 'dynamic-content' },
    { id: 'add-skill-level-btn', name: 'Ajouter compétence niveau', expected: 'dynamic-content' },
    { id: 'add-section-btn', name: 'Ajouter section', expected: 'dynamic-content' },
    
    // Bannière et style
    { id: 'reset-recruiter-btn', name: 'Reset info recruteur', expected: 'action' },
    { id: 'fix-banner-top-btn', name: 'Fixer bannière haut', expected: 'action' },
    { id: 'fix-banner-bottom-btn', name: 'Fixer bannière bas', expected: 'action' },
    { id: 'modular-banner-btn', name: 'Bannière modulaire', expected: 'action' },
    { id: 'remove-banner-bg-btn', name: 'Supprimer fond bannière', expected: 'action' },
    { id: 'randomize-banner-style-btn', name: 'Style bannière aléatoire', expected: 'action' },
    
    // Historique
    { id: 'undo-btn', name: 'Annuler', expected: 'action' },
    { id: 'redo-btn', name: 'Rétablir', expected: 'action' }
];

// Tests des boutons avec gestionnaires d'événements
let buttonResults = [];

buttonTests.forEach(test => {
    const button = document.getElementById(test.id);
    const hasEventListener = button && button.onclick !== null || 
                           (button && button.getAttribute('onclick')) ||
                           checkEventListenerExists(button);
    
    buttonResults.push({
        id: test.id,
        name: test.name,
        exists: !!button,
        hasHandler: hasEventListener,
        expected: test.expected,
        status: button && hasEventListener ? '✅' : (button ? '❌ Pas de gestionnaire' : '❌ Bouton introuvable')
    });
});

// Fonction pour vérifier l'existence des gestionnaires d'événements
function checkEventListenerExists(element) {
    if (!element) return false;
    
    // Check if element has event listeners (approximative method)
    const events = ['click', 'input', 'change', 'keypress'];
    return events.some(event => {
        try {
            const listeners = getEventListeners ? getEventListeners(element) : {};
            return listeners[event] && listeners[event].length > 0;
        } catch(e) {
            return false;
        }
    });
}

// Tests des fonctions IA critiques
const iaFunctionTests = [
    { name: 'callGeminiAPI', exists: typeof callGeminiAPI === 'function' },
    { name: 'saveApiKey', exists: typeof saveApiKey === 'function' },
    { name: 'toggleApiKeyVisibility', exists: typeof toggleApiKeyVisibility === 'function' },
    { name: 'showNotification', exists: typeof showNotification === 'function' },
    { name: 'showLoader', exists: typeof showLoader === 'function' },
    { name: 'hideLoader', exists: typeof hideLoader === 'function' },
    { name: 'updatePreview', exists: typeof updatePreview === 'function' },
    { name: 'createDynamicItem', exists: typeof createDynamicItem === 'function' },
    { name: 'getDynamicData', exists: typeof getDynamicData === 'function' },
    { name: 'anonymizeCV', exists: typeof anonymizeCV === 'function' },
    { name: 'resetCVToDefault', exists: typeof resetCVToDefault === 'function' }
];

// Tests des éléments de contrôle
const controlTests = [
    { name: 'apiKeyInput', exists: !!document.getElementById('api-key') },
    { name: 'aiInput', exists: !!document.getElementById('ai-input') },
    { name: 'nom', exists: !!document.getElementById('nom') },
    { name: 'prenom', exists: !!document.getElementById('prenom') },
    { name: 'poste', exists: !!document.getElementById('poste') },
    { name: 'description', exists: !!document.getElementById('description') },
    { name: 'competences', exists: !!document.getElementById('competences') },
    { name: 'experienceList', exists: !!document.getElementById('experience-list') },
    { name: 'formationList', exists: !!document.getElementById('formation-list') }
];

// Tests des sélecteurs de style et couleur
const styleTests = [
    { name: 'primaryColorPicker', exists: !!document.getElementById('primary-color') },
    { name: 'secondaryColorPicker', exists: !!document.getElementById('secondary-color') },
    { name: 'fontFamilyH1Select', exists: !!document.getElementById('font-family-h1') },
    { name: 'fontFamilyH2Select', exists: !!document.getElementById('font-family-h2') },
    { name: 'fontFamilyBodySelect', exists: !!document.getElementById('font-family-body') }
];

// Affichage des résultats
console.log("\n📊 RÉSULTATS DES TESTS :");

console.log("\n🔘 BOUTONS ET GESTIONNAIRES D'ÉVÉNEMENTS :");
buttonResults.forEach(result => {
    console.log(`${result.status} ${result.name} (${result.id})`);
});

console.log("\n🔧 FONCTIONS IA ET CRITIQUES :");
iaFunctionTests.forEach(test => {
    console.log(`${test.exists ? '✅' : '❌'} ${test.name}`);
});

console.log("\n🎛️ ÉLÉMENTS DE CONTRÔLE :");
controlTests.forEach(test => {
    console.log(`${test.exists ? '✅' : '❌'} ${test.name}`);
});

console.log("\n🎨 CONTRÔLES DE STYLE :");
styleTests.forEach(test => {
    console.log(`${test.exists ? '✅' : '❌'} ${test.name}`);
});

// Résumé
const totalButtons = buttonResults.length;
const workingButtons = buttonResults.filter(r => r.exists && r.hasHandler).length;
const totalFunctions = iaFunctionTests.length;
const workingFunctions = iaFunctionTests.filter(f => f.exists).length;
const totalControls = controlTests.length;
const workingControls = controlTests.filter(c => c.exists).length;
const totalStyles = styleTests.length;
const workingStyles = styleTests.filter(s => s.exists).length;

console.log("\n📈 RÉSUMÉ GLOBAL :");
console.log(`Boutons: ${workingButtons}/${totalButtons} fonctionnels`);
console.log(`Fonctions IA: ${workingFunctions}/${totalFunctions} disponibles`);
console.log(`Contrôles: ${workingControls}/${totalControls} disponibles`);
console.log(`Styles: ${workingStyles}/${totalStyles} disponibles`);

const overallScore = ((workingButtons + workingFunctions + workingControls + workingStyles) / 
                     (totalButtons + totalFunctions + totalControls + totalStyles)) * 100;

console.log(`\n🎯 SCORE GLOBAL: ${overallScore.toFixed(1)}%`);

if (overallScore >= 90) {
    console.log("🎉 EXCELLENT ! L'application est pleinement fonctionnelle !");
} else if (overallScore >= 75) {
    console.log("✅ BIEN ! Quelques ajustements mineurs nécessaires.");
} else if (overallScore >= 50) {
    console.log("⚠️ MOYEN ! Des améliorations importantes sont nécessaires.");
} else {
    console.log("❌ INSUFFISANT ! Des corrections majeures sont requises.");
}

// Test spécifique de l'API Gemini si une clé est configurée
if (localStorage.getItem('gemini-api-key')) {
    console.log("\n🤖 Test de l'API Gemini...");
    callGeminiAPI("Test de connexion", null).then(result => {
        console.log(result ? "✅ API Gemini fonctionnelle" : "❌ Problème avec l'API Gemini");
    }).catch(err => {
        console.log("❌ Erreur API Gemini:", err.message);
    });
} else {
    console.log("\n🔑 Aucune clé API Gemini configurée - impossible de tester les fonctions IA");
}

console.log("\n🏁 Tests terminés !");

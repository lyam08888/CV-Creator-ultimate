# Guide de Configuration API Gemini

## Fonctionnalité Ajoutée

Une nouvelle section "Configuration API Gemini" a été ajoutée dans l'onglet IA du créateur de CV. Cette section permet aux utilisateurs de configurer et sauvegarder leur clé API Gemini pour utiliser toutes les fonctionnalités d'intelligence artificielle.

## Fonctionnalités Implémentées

### 1. Interface Utilisateur
- **Section dédiée** dans l'onglet IA avec un design professionnel
- **Champ de saisie sécurisé** (type password) pour la clé API
- **Bouton de visibilité** pour afficher/masquer la clé API
- **Bouton de sauvegarde** avec icône et feedback visuel
- **Indicateur de statut** avec codes couleur :
  - ❌ Rouge : Clé API manquante
  - ⚠️ Jaune : Clé API prête à être sauvegardée
  - ✅ Vert : Clé API enregistrée

### 2. Fonctionnalités JavaScript
- **Sauvegarde automatique** dans le localStorage du navigateur
- **Chargement automatique** au démarrage de l'application
- **Validation en temps réel** pendant la saisie
- **Sauvegarde par touche Entrée** pour une utilisation rapide
- **Basculement de visibilité** de la clé API

### 3. Sécurité et UX
- **Stockage local sécurisé** (pas d'envoi vers des serveurs externes)
- **Champ masqué par défaut** pour protéger la confidentialité
- **Feedback utilisateur** avec notifications de succès
- **Instructions claires** avec lien direct vers Google AI Studio

## Comment Utiliser

1. **Obtenir une clé API** :
   - Aller sur [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Créer une nouvelle clé API
   - Copier la clé générée

2. **Configurer dans l'application** :
   - Ouvrir l'onglet "IA"
   - Développer la section "Configuration API Gemini"
   - Coller la clé API dans le champ prévu
   - Cliquer sur "Sauver" ou appuyer sur Entrée

3. **Utiliser les fonctionnalités IA** :
   - Toutes les fonctions IA utilisent automatiquement la clé sauvegardée
   - Synthèse d'expériences
   - Amélioration du profil
   - Organisation des compétences
   - Génération de mails de présentation

## Fonctions IA Disponibles

Avec la clé API configurée, les utilisateurs peuvent utiliser :

- **Analyse et remplissage automatique** à partir d'une description de poste
- **Synthèse des expériences** (bouton flottant et actions par section)
- **Amélioration du profil** professionnel
- **Organisation des compétences** par catégories
- **Limitation intelligente** des compétences (top 10)
- **Génération de mails** de présentation recruteur

## Aspects Techniques

### Stockage
- Clé stockée dans `localStorage` avec la clé `gemini_api_key`
- Chargement automatique au démarrage de l'application
- Suppression automatique si le champ est vidé

### API Utilisée
- **Modèle** : `gemini-2.5-flash-preview-05-20`
- **Endpoint** : Google Generative Language API
- **Format** : JSON avec support des schémas structurés

### Gestion d'Erreurs
- Vérification de la présence de la clé avant chaque appel
- Messages d'erreur explicites en cas de problème
- Feedback visuel en temps réel

## Sécurité

- ✅ Stockage local uniquement (pas de transmission vers des serveurs tiers)
- ✅ Champ masqué par défaut
- ✅ Possibilité de supprimer la clé à tout moment
- ✅ Validation côté client avant utilisation

La clé API reste privée et n'est utilisée que pour les appels directs vers l'API Google Gemini depuis le navigateur de l'utilisateur.
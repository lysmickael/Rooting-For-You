# 📊 Emplacements Publicitaires - Questionnaire

## ✅ Publicités ajoutées dans questionnaire.html

Le questionnaire étant la page la plus consultée, **3 emplacements publicitaires** ont été stratégiquement intégrés :

---

## 📍 **Emplacement 1 : Bannière horizontale en haut**
**Position :** Au-dessus de la carte de question  
**Format :** Horizontal / Responsive  
**Visibilité :** Toutes les plateformes (mobile + desktop)  
**Data-ad-slot :** `1234567890` (à remplacer par votre vrai slot)

```html
<!-- En haut du quiz, avant la question -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="horizontal"
     data-full-width-responsive="true"></ins>
```

**Avantages :**
- ✅ Visible immédiatement sans scroll
- ✅ Non-intrusif (au-dessus du contenu)
- ✅ S'adapte à toutes les tailles d'écran

---

## 📍 **Emplacement 2 : Sidebar verticale (Desktop uniquement)**
**Position :** Côté droit de l'écran, fixe  
**Format :** Skyscraper vertical (160x600)  
**Visibilité :** Desktop uniquement (écrans > 1200px)  
**Data-ad-slot :** `1111111111` (à remplacer)

```html
<!-- Sidebar fixe, visible seulement desktop -->
<ins class="adsbygoogle"
     style="display:inline-block;width:160px;height:600px"></ins>
```

**Avantages :**
- ✅ Toujours visible (position: fixed)
- ✅ N'interfère pas avec le questionnaire mobile
- ✅ Rentabilité élevée (grande taille)

**CSS associé :**
```css
.ad-sidebar {
    position: fixed;
    right: 20px;
    top: 100px;
    width: 160px;
    display: none; /* Caché sur mobile */
}

@media (min-width: 1200px) {
    .ad-sidebar {
        display: block; /* Visible uniquement desktop */
    }
}
```

---

## 📍 **Emplacement 3 : Dans la modale de résultats**
**Position :** Après les résultats du top 3, avant les boutons d'action  
**Format :** Auto / Responsive  
**Visibilité :** Quand l'utilisateur clique sur "Activités correspondantes"  
**Data-ad-slot :** `9876543210` (à remplacer)

```html
<!-- Dans la modale de résultats -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
```

**Avantages :**
- ✅ Moment d'engagement fort (utilisateur consulte ses résultats)
- ✅ Temps de vue élevé (utilisateur lit les résultats)
- ✅ Contexte positif (découverte de métiers)

---

## 🎯 **Stratégie d'emplacement**

### ✅ **Ce qui est fait**
- 3 emplacements maximum (conformité AdSense)
- Pubs visibles uniquement après interaction utilisateur
- Pas de pub pendant les choix de réponses
- Labels "Publicité" clairs et discrets
- Responsive sur toutes tailles d'écran

### ❌ **Ce qui n'est PAS fait (volontairement)**
- Pas de pub entre les choix de réponses
- Pas de pub qui bloque le contenu
- Pas de pop-up intrusif
- Pas de pub dans le bouton flottant

---

## 📈 **Optimisation des revenus**

### **Mobile (80% du trafic attendu)**
- ✅ Bannière horizontale en haut (impression garantie)
- ✅ Pub dans les résultats (engagement fort)

### **Desktop (20% du trafic)**
- ✅ Sidebar fixe 160x600 (haute valeur CPM)
- ✅ Bannière + pub résultats (même que mobile)

---

## 🔧 **Configuration requise après déploiement**

Une fois le site déployé, allez dans votre compte AdSense :

### 1. **Créer les emplacements publicitaires**
Dans AdSense → Annonces → Par unité d'annonce :

**Créer 3 annonces :**
1. **"Questionnaire - Top"**
   - Type : Display responsive
   - Format : Horizontal
   - Copier le `data-ad-slot` et remplacer `1234567890`

2. **"Questionnaire - Sidebar"**
   - Type : Display
   - Taille : 160x600
   - Copier le `data-ad-slot` et remplacer `1111111111`

3. **"Questionnaire - Résultats"**
   - Type : Display responsive
   - Format : Auto
   - Copier le `data-ad-slot` et remplacer `9876543210`

### 2. **Remplacer les data-ad-slot**
Dans `questionnaire.html`, rechercher et remplacer :
- `data-ad-slot="1234567890"` → Votre slot réel #1
- `data-ad-slot="1111111111"` → Votre slot réel #2
- `data-ad-slot="9876543210"` → Votre slot réel #3

---

## ⚠️ **Important - Règles AdSense**

### ✅ **Conformité**
- Maximum 3 pubs display par page : ✅
- Labels "Publicité" présents : ✅
- Pas de pub above the fold uniquement : ✅
- Contenu de qualité suffisant : ✅

### 🚫 **À éviter**
- Ne jamais cliquer sur vos propres pubs
- Ne pas demander aux utilisateurs de cliquer
- Ne pas modifier le code AdSense généré
- Ne pas cacher les pubs avec CSS

---

## 📊 **Estimation des revenus**

**Hypothèses :**
- 1000 visiteurs/jour sur le questionnaire
- 80% mobile, 20% desktop
- CTR moyen : 1-2%
- CPC moyen : 0,20€ - 0,50€

**Revenus estimés :**
- **Bas :** 2-4€/jour (60-120€/mois)
- **Moyen :** 5-10€/jour (150-300€/mois)
- **Haut :** 15-20€/jour (450-600€/mois)

*Ces chiffres sont indicatifs et dépendent de nombreux facteurs : niche, géolocalisation, saison, etc.*

---

## 🎨 **Design UX maintenu**

Les publicités sont intégrées de manière à :
- Ne pas distraire pendant les choix
- Apparaître dans des moments naturels
- Respecter l'expérience utilisateur
- Être clairement identifiées comme pubs

**Le questionnaire reste fluide et agréable à utiliser !** 🌱✨

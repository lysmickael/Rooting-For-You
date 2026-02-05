# Guide d'intégration des plateformes de dons

## 1. Configuration des plateformes

### 🟡 Tipeee (Recommandé pour dons mensuels)

**Avantages :**
- Très populaire en France
- Dons mensuels récurrents
- Interface simple
- Commission raisonnable (8%)

**Configuration :**
1. Créer un compte sur https://fr.tipeee.com
2. Compléter votre profil (photo, description, objectifs)
3. Activer la page publique
4. Remplacer dans le code : `https://fr.tipeee.com/VOTRE_PAGE`

**Widget intégrable :**
```html
<!-- Bouton Tipeee officiel -->
<a href="https://fr.tipeee.com/VOTRE_PAGE" target="_blank">
  <img src="https://cdn.tipeee.com/img/tipeee_tip_btn.svg" alt="Faire un don">
</a>
```

---

### 💙 PayPal (Universel)

**Avantages :**
- Accepté mondialement
- Dons ponctuels rapides
- Possibilité de paiement par carte sans compte PayPal
- Commission : 2,9% + 0,35€

**Configuration :**

**Option 1 : PayPal.me (le plus simple)**
1. Créer un compte PayPal Business
2. Activer PayPal.me : https://www.paypal.com/paypalme/
3. Remplacer : `https://paypal.me/VOTRE_LIEN`

**Option 2 : Bouton de don officiel**
```html
<!-- Bouton PayPal généré sur paypal.com -->
<form action="https://www.paypal.com/donate" method="post" target="_blank">
  <input type="hidden" name="business" value="VOTRE_EMAIL_PAYPAL" />
  <input type="hidden" name="item_name" value="Soutien Rooting For You" />
  <input type="hidden" name="currency_code" value="EUR" />
  <input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donate_LG.gif" 
         name="submit" title="PayPal - The safer, easier way to pay online!" alt="Faire un don" />
</form>
```

**Option 3 : Bouton personnalisé avec montants**
1. Aller sur https://www.paypal.com/donate/buttons
2. Créer un bouton de don
3. Choisir "Donation" comme type
4. Définir montants suggérés (3€, 5€, 10€, 20€, 50€)
5. Copier le code généré

---

### ☕ Buy Me a Coffee (Simple et sympathique)

**Avantages :**
- Interface très simple
- Dons rapides (3€ par "café")
- Pas de frais d'abonnement
- Commission : 5%

**Configuration :**
1. Créer un compte : https://www.buymeacoffee.com
2. Personnaliser votre page
3. Remplacer : `https://www.buymeacoffee.com/VOTRE_PAGE`

**Widget intégrable :**
```html
<!-- Widget Buy Me a Coffee -->
<script 
  data-name="BMC-Widget" 
  data-cfasync="false" 
  src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" 
  data-id="VOTRE_USERNAME" 
  data-description="Soutenez Rooting For You !" 
  data-message="" 
  data-color="#5F7FFF" 
  data-position="Right" 
  data-x_margin="18" 
  data-y_margin="18">
</script>
```

---

### 🎁 Ko-fi (Alternative à Buy Me a Coffee)

**Avantages :**
- 0% de commission (sauf PayPal)
- Dons mensuels possibles
- Très populaire chez les créateurs

**Configuration :**
1. Créer un compte : https://ko-fi.com
2. Personnaliser votre page
3. Remplacer : `https://ko-fi.com/VOTRE_PAGE`

**Widget flottant :**
```html
<!-- Ko-fi floating button -->
<script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
<script>
  kofiWidgetOverlay.draw('VOTRE_USERNAME', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Nous soutenir',
    'floating-chat.donateButton.background-color': '#2d5f3f',
    'floating-chat.donateButton.text-color': '#fff'
  });
</script>
```

---

### 🏦 Virement bancaire (Pour gros dons)

**Configuration :**
1. Ouvrir un compte bancaire dédié au projet
2. Préparer un email type avec :
   - IBAN
   - BIC
   - Titulaire du compte
   - Mention "Don Rooting For You"
3. Envoyer ces infos uniquement sur demande par email

**Email type :**
```
Bonjour,

Merci pour votre générosité !

Voici nos coordonnées bancaires pour effectuer un virement :

Titulaire : [NOM/SOCIÉTÉ]
IBAN : FR76 XXXX XXXX XXXX XXXX XXXX XXX
BIC : XXXXXXXX

Libellé suggéré : Don Rooting For You

N'hésitez pas si vous avez des questions.

Cordialement,
L'équipe Rooting For You
```

---

## 2. Intégration dans le code

### HTML pur (pour pages statiques)

```html
<!-- Bouton simple -->
<a href="/nous-soutenir.html" class="support-btn">
  💚 Nous soutenir
</a>

<style>
.support-btn {
  position: fixed;
  bottom: 100px;
  right: 20px;
  background: linear-gradient(135deg, #d4a574, #c49563);
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 6px 25px rgba(212, 165, 116, 0.4);
  z-index: 999;
  transition: all 0.3s ease;
}

.support-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(212, 165, 116, 0.5);
}
</style>
```

### React/Next.js

```jsx
// pages/index.jsx
import SupportButton from '../components/SupportButton';
import DonationWidget from '../components/DonationWidget';

export default function Home() {
  return (
    <>
      {/* Bouton flottant visible sur toutes les pages */}
      <SupportButton variant="floating" />
      
      {/* Contenu de la page... */}
    </>
  );
}
```

### Footer avec lien de soutien

```jsx
// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Autres colonnes... */}
          
          <div>
            <h3 className="font-bold mb-4">Soutenir le projet</h3>
            <p className="text-sm text-gray-400 mb-4">
              Aidez-nous à garder ce service 100% gratuit
            </p>
            <a 
              href="/nous-soutenir" 
              className="inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
            >
              💚 Faire un don
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## 3. Suivre les dons (Analytics)

### Google Analytics 4 Events

```javascript
// utils/trackDonation.js
export function trackDonationClick(platform) {
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', 'donation_click', {
      platform: platform, // 'tipeee', 'paypal', etc.
      event_category: 'engagement',
      event_label: 'Support Button'
    });
  }

  // Facebook Pixel (optionnel)
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: `Donation - ${platform}`,
      currency: 'EUR'
    });
  }
}

// Utilisation
<a 
  href="https://fr.tipeee.com/VOTRE_PAGE"
  onClick={() => trackDonationClick('tipeee')}
>
  Donner sur Tipeee
</a>
```

### Webhooks (pour dons confirmés)

**Tipeee Webhook :**
```javascript
// api/webhooks/tipeee.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { event, data } = req.body;

  if (event === 'tip.created') {
    // Nouveau don reçu
    const { amount, currency, user } = data;
    
    // Logger dans votre DB
    await logDonation({
      platform: 'tipeee',
      amount,
      currency,
      userId: user.id,
      date: new Date()
    });

    // Envoyer email de remerciement
    await sendThankYouEmail(user.email);
  }

  res.status(200).json({ received: true });
}
```

---

## 4. Email de remerciement automatique

```javascript
// utils/sendThankYou.js
import nodemailer from 'nodemailer';

export async function sendThankYouEmail(donorEmail, amount, platform) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: 'Rooting For You <noreply@rootingforyou.fr>',
    to: donorEmail,
    subject: '🙏 Merci pour votre soutien !',
    html: `
      <h1 style="color: #2d5f3f;">Merci infiniment !</h1>
      <p>Votre don de <strong>${amount}€</strong> via ${platform} nous aide énormément.</p>
      <p>Grâce à vous, nous pouvons maintenir Rooting For You gratuit pour tous.</p>
      <p>Vous faites partie de cette belle aventure. 💚</p>
      <p>L'équipe Rooting For You</p>
      <hr>
      <p style="font-size: 12px; color: #888;">
        Si vous avez des questions : <a href="mailto:contact@rootingforyou.fr">contact@rootingforyou.fr</a>
      </p>
    `
  };

  await transporter.sendMail(mailOptions);
}
```

---

## 5. Afficher un compteur de soutien

```jsx
// components/DonationCounter.jsx
export default function DonationCounter() {
  const [stats, setStats] = useState({
    totalDonors: 0,
    monthlyGoal: 100,
    currentAmount: 0
  });

  useEffect(() => {
    // Fetch depuis votre API
    fetch('/api/donation-stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  const progress = (stats.currentAmount / stats.monthlyGoal) * 100;

  return (
    <div className="bg-green-50 p-6 rounded-lg">
      <h3 className="font-bold text-lg mb-2">💚 Objectif mensuel</h3>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
        <div 
          className="bg-green-600 h-4 rounded-full transition-all"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-sm text-gray-600">
        {stats.currentAmount}€ / {stats.monthlyGoal}€ ({Math.round(progress)}%)
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Soutenus par {stats.totalDonors} généreux donateurs
      </p>
    </div>
  );
}
```

---

## 6. Checklist de lancement

- [ ] **Comptes créés** :
  - [ ] Tipeee configuré et page publique
  - [ ] PayPal.me activé ou bouton créé
  - [ ] Buy Me a Coffee / Ko-fi configuré
  
- [ ] **Liens remplacés** dans le code :
  - [ ] Page HTML `/nous-soutenir.html`
  - [ ] Composant React `SupportButton.jsx`
  - [ ] Widget `DonationWidget.jsx`
  
- [ ] **Navigation** :
  - [ ] Lien "Nous soutenir" dans le footer
  - [ ] Bouton flottant activé
  - [ ] Lien dans le menu principal (optionnel)

- [ ] **Tracking** :
  - [ ] Google Analytics event configuré
  - [ ] Webhooks configurés (optionnel)
  - [ ] Email de remerciement prêt

- [ ] **Communication** :
  - [ ] Annoncer aux utilisateurs existants
  - [ ] Post sur réseaux sociaux
  - [ ] Expliquer l'utilisation des fonds

---

## 7. Bonnes pratiques

### ✅ À FAIRE

- Être transparent sur l'utilisation des fonds
- Remercier publiquement les donateurs (avec leur accord)
- Montrer l'impact concret des dons
- Proposer plusieurs plateformes (choix = plus de dons)
- Mettre à jour régulièrement sur les progrès

### ❌ À ÉVITER

- Forcer ou harceler pour des dons
- Promettre des fonctionnalités contre dons (dark pattern)
- Cacher les vrais coûts
- Spam d'emails de demande de dons
- Donner un avantage dans le questionnaire aux donateurs

---

## 8. Fiscalité (France)

**Important :** Les dons reçus par une personne physique ou une société commerciale sont imposables.

**Solutions :**
1. **Créer une association loi 1901** :
   - Dons défiscalisables pour les donateurs
   - Exonération d'impôts sur les dons reçus
   - Nécessite statuts, déclaration en préfecture

2. **Rester en micro-entreprise** :
   - Dons = revenus imposables
   - Déclarer comme "autres revenus"
   - Prélèvement social + impôt sur le revenu

**Recommandation :** Consulter un comptable dès que les dons deviennent significatifs (>1000€/mois).

---

✅ Toutes les URLs dans les fichiers sont marquées `VOTRE_PAGE` ou `VOTRE_LIEN` - pensez à les remplacer avant la mise en ligne !

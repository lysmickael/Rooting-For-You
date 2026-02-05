// src/components/DonationWidget.jsx
import { useState } from 'react';

/**
 * Widget de dons avec sélection de plateforme
 * Affiche un modal avec toutes les options de soutien
 */
export default function DonationWidget({ isOpen, onClose }) {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  // Configuration des plateformes de don
  const platforms = [
    {
      id: 'tipeee',
      name: 'Tipeee',
      icon: '☕',
      description: 'Soutien mensuel ou ponctuel',
      url: 'https://fr.tipeee.com/VOTRE_PAGE', // À REMPLACER
      color: '#FF6B6B',
      recommended: true
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '💳',
      description: 'Don sécurisé par carte',
      url: 'https://paypal.me/VOTRE_LIEN', // À REMPLACER
      color: '#0070BA'
    },
    {
      id: 'buymeacoffee',
      name: 'Buy Me a Coffee',
      icon: '☕',
      description: 'Offrez-nous un café',
      url: 'https://www.buymeacoffee.com/VOTRE_PAGE', // À REMPLACER
      color: '#FFDD00'
    },
    {
      id: 'kofi',
      name: 'Ko-fi',
      icon: '🎁',
      description: 'Don simple et rapide',
      url: 'https://ko-fi.com/VOTRE_PAGE', // À REMPLACER
      color: '#FF5E5B'
    },
    {
      id: 'bank',
      name: 'Virement bancaire',
      icon: '🏦',
      description: 'Pour dons importants',
      url: 'mailto:contact@rootingforyou.fr?subject=Don%20par%20virement',
      color: '#2d5f3f'
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '1rem',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div 
        style={{
          background: 'white',
          borderRadius: '24px',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: 'slideUp 0.4s ease-out',
          padding: '2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              color: '#707070',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#f0f0f0'}
            onMouseOut={(e) => e.target.style.background = 'none'}
          >
            ×
          </button>
          
          <h2 style={{ 
            fontFamily: 'Playfair Display, serif',
            fontSize: '2rem',
            color: '#2d5f3f',
            marginBottom: '0.5rem'
          }}>
            💚 Soutenez Rooting For You
          </h2>
          <p style={{ color: '#707070' }}>
            Choisissez votre plateforme de don préférée
          </p>
        </div>

        {/* Platforms Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {platforms.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#fafafa',
                border: selectedPlatform === platform.id 
                  ? `3px solid ${platform.color}` 
                  : '3px solid transparent',
                borderRadius: '16px',
                padding: '1.5rem',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                position: 'relative',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = platform.color;
                e.currentTarget.style.boxShadow = `0 8px 20px ${platform.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                if (selectedPlatform !== platform.id) {
                  e.currentTarget.style.borderColor = 'transparent';
                }
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => setSelectedPlatform(platform.id)}
            >
              {platform.recommended && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  background: '#d4a574',
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: 'bold'
                }}>
                  ⭐ Recommandé
                </div>
              )}
              
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                {platform.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.1rem',
                color: '#2d5f3f',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                {platform.name}
              </h3>
              <p style={{ 
                fontSize: '0.85rem',
                color: '#707070',
                margin: 0
              }}>
                {platform.description}
              </p>
            </a>
          ))}
        </div>

        {/* Why Support Section */}
        <div style={{
          background: '#f8f5f0',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '1rem'
        }}>
          <h3 style={{ 
            color: '#2d5f3f',
            fontSize: '1.2rem',
            marginBottom: '1rem'
          }}>
            Pourquoi nous soutenir ?
          </h3>
          <ul style={{ 
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {[
              'Garder le service 100% gratuit',
              'Moins de dépendance à la publicité',
              'Ajouter de nouveaux métiers',
              'Améliorer l\'expérience utilisateur',
              'Créer du contenu éducatif gratuit'
            ].map((item, i) => (
              <li key={i} style={{ 
                padding: '0.5rem 0',
                paddingLeft: '1.8rem',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#2d5f3f',
                  fontWeight: 'bold'
                }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Suggested Amounts */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ 
            fontSize: '0.9rem',
            color: '#707070',
            marginBottom: '1rem'
          }}>
            💰 Montants suggérés
          </p>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {['3€', '5€', '10€', '20€', '50€'].map((amount) => (
              <span key={amount} style={{
                background: 'white',
                border: '2px solid #2d5f3f',
                color: '#2d5f3f',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                {amount}
              </span>
            ))}
          </div>
          <p style={{ 
            fontSize: '0.8rem',
            color: '#707070',
            marginTop: '1rem'
          }}>
            Tout montant est le bienvenu !
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * EXEMPLE D'UTILISATION :
 * 
 * import { useState } from 'react';
 * import DonationWidget from './DonationWidget';
 * 
 * function MyComponent() {
 *   const [showDonation, setShowDonation] = useState(false);
 * 
 *   return (
 *     <>
 *       <button onClick={() => setShowDonation(true)}>
 *         💚 Nous soutenir
 *       </button>
 * 
 *       <DonationWidget 
 *         isOpen={showDonation} 
 *         onClose={() => setShowDonation(false)} 
 *       />
 *     </>
 *   );
 * }
 */
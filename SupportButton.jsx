// src/components/SupportButton.jsx
import { useState } from 'react';

/**
 * Bouton "Nous soutenir" réutilisable
 * Peut être affiché en sticky, dans le footer, ou inline
 */
export default function SupportButton({ 
  variant = 'floating', // 'floating', 'inline', 'footer'
  size = 'medium', // 'small', 'medium', 'large'
  showIcon = true,
  customText = null
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Styles selon le variant
  const variants = {
    floating: {
      position: 'fixed',
      bottom: '100px',
      right: '20px',
      zIndex: 999,
      boxShadow: '0 6px 25px rgba(212, 165, 116, 0.4)',
      animation: 'pulse 2s infinite'
    },
    inline: {
      display: 'inline-block'
    },
    footer: {
      display: 'block',
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto'
    }
  };

  // Tailles
  const sizes = {
    small: {
      padding: '0.6rem 1.2rem',
      fontSize: '0.9rem'
    },
    medium: {
      padding: '1rem 2rem',
      fontSize: '1rem'
    },
    large: {
      padding: '1.2rem 2.5rem',
      fontSize: '1.1rem'
    }
  };

  const buttonStyle = {
    ...variants[variant],
    ...sizes[size],
    background: 'linear-gradient(135deg, #d4a574, #c49563)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transform: isHovered ? 'translateY(-3px) scale(1.05)' : 'translateY(0)',
    boxShadow: isHovered 
      ? '0 8px 30px rgba(212, 165, 116, 0.5)' 
      : variants[variant].boxShadow || 'none'
  };

  const text = customText || '💚 Nous soutenir';

  return (
    <>
      {/* Keyframes pour l'animation pulse */}
      {variant === 'floating' && (
        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}</style>
      )}

      <a
        href="/nous-soutenir.html"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showIcon && <span>❤️</span>}
        <span>{text}</span>
      </a>
    </>
  );
}

/**
 * EXEMPLES D'UTILISATION :
 * 
 * // Bouton flottant (sticky en bas à droite)
 * <SupportButton variant="floating" />
 * 
 * // Bouton dans le footer
 * <SupportButton variant="footer" size="large" />
 * 
 * // Bouton inline dans le contenu
 * <SupportButton variant="inline" size="small" customText="Faire un don" />
 * 
 * // Sans icône
 * <SupportButton variant="inline" showIcon={false} />
 */
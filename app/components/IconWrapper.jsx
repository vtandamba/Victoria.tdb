// src/components/IconWrapper.js
import React from 'react';

// Composant wrapper pour les icônes
const IconWrapper = ({ Icon, size = 32, alt }) => {
  if (!Icon) return null; // Si aucune icône n'est fournie, ne rien afficher

  // Vérifier si Icon est une fonction (comme une icône de Lucide)
  const isLucideIcon = typeof Icon === 'function';

  return (
    <div className="icon-wrapper">
      {isLucideIcon ? (
        // Si c'est une icône Lucide, on l'affiche
        <Icon size={size} />
      ) : (
        // Sinon, on traite comme une image (SVG)
        <img src={Icon} alt={alt} width={size} height={size} />
      )}
    </div>
  );
};

export default IconWrapper;

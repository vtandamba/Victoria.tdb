"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

// Propriétés du Cloud (nuage d'icônes)
export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Fonction pour rendre une icône personnalisée en fonction du thème
export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

// Composant principal
export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);  // Stockage des données d'icônes
  const { theme } = useTheme();  // Récupération du thème (clair ou sombre)

  // Utilise un effet pour récupérer les icônes
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs })
      .then((result) => {
        console.log("Simple icons data:", result);  // Vérifier ce que fetchSimpleIcons retourne
        setData(result);  // Mettre à jour l'état avec les icônes récupérées
      })
      .catch((error) => {
        console.error("Error fetching icons:", error);  // Gestion d'erreurs
      });
  }, [iconSlugs]);

  // Utilisation de useMemo pour rendre les icônes
  const renderedIcons = useMemo(() => {
    if (!data || !data.simpleIcons) return null;  // Vérification des données

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}  {/* Rendu des icônes dans le composant Cloud */}
    </Cloud>
  );

}

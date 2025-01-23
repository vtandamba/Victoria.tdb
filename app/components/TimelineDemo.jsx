import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Parcours from "./Parcours";
import sorefa from "./../assets/images/sorefa.png";
import tours from "./../assets/images/toursUniv-removebg.png";
import rochelle from "./../assets/images/La_Rochelle_Université.png";
import neper from "./../assets/images/Neper.png";
import laFutaie from "./../assets/images/campus_laFutaie.png";

export function TimelineDemo() {
  const data = [
    {
      title: "2024-2025",
      content: (
        <div className="flex flex-col gap-5"> 
        <Parcours
          label="LICENCE 3"
          description="Consolidation de mes compétences en développement et élargissement de mes connaissances afin d’atteindre mes objectifs professionnels. Cette licence me permettra également de faire de meilleurs choix pour la suite de mon parcours et d'orienter mon avenir de manière éclairée."
          img_src={tours}
          width={150}
          alt={"Université de Tours à Blois"}
        />

<Parcours
          label="CDD CHEZ NEPER"
          description="Edge SEO : Développement d'un outils d'optimisation SEO en Cloudflare et ses services."
          img_src={neper}
          width={150}
          alt={"Université de Tours à Blois"}
        />
        </div>
      ),
    },
    {
      title: "2023-2024",
      content: (
        <div className="flex flex-col gap-5">
          <Parcours
            label="LICENCE PROFESSIONNELLE FULLSTACK"
            description="Cette formation m’a permis de me spécialiser dans le développement web fullstack et d'approfondir des domaines comme le Edge SEO à travers mon stage chez Neper à La Rochelle."
            img_src={rochelle}
            alt={"Université de La Rochelle"}
            width={150}
          />
          <Parcours
            label="STAGE CHEZ NEPER"
            description="Durant mon stage, j’ai conçu un système d'automatisation du maillage interne basé sur un CDN avec Cloudflare. J'ai développé un back-office d'administration avec ReactJS et Supabase, accompagné d'un déploiement continu sur Cloudflare."
            img_src={neper}
            width={150}
          />
        </div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <div className="flex flex-col gap-5">
          <Parcours
            label="BTS SIO"
            description="Cette formation m’a permis d'acquérir des bases solides en développement web et d'apprendre les langages de programmation comme PHP et Java."
            img_src={laFutaie}
            width={150}
          />
          <Parcours
            label="STAGE CHEZ SOREFA SARL"
            description="Lors de mon stage chez Sorefa SARL, j’ai conçu une application de gestion de devis en utilisant JavaFX et SceneBuilder, offrant une solution adaptée aux besoins de l'entreprise."
            img_src={sorefa}
            width={150}
          />
        </div>
      ),
    },
  ];
  

  return (
    <>
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 id='parcours' className="text-lg md:text-4xl mb-4 text-primary dark:text-primary-foreground max-w-4xl">
          Mon parcours et mes expériences professionnelles
        </h2>
        <p className=" mb-4  text-muted-foreground text-xl max-w-md ">
          Découvrez mon parcours, mes formations et les expériences professionnelles acquises dans des environnements dynamiques.
        </p>
      </div>

      <div className="w-full">
        <Timeline data={data} />
      </div>
    </>
  );
}

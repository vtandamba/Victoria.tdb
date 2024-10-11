import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Parcours from "./Parcours";
import sorefa from "./../assets/images/sorefa.png"
import tours from "./../assets/images/toursUniv-removebg.png"
import rochelle from "./../assets/images/La_Rochelle_Université.png"
import neper from "./../assets/images/Neper.png"
import laFutaie from "./../assets/images/campus_laFutaie.png"

export function TimelineDemo() {
  const data = [
    {
      title: "2024-2025",
      content: (


        <Parcours
          label="LICENCE 3"
          description="Renforcement des compétences en développement et élargissement du champs pour réaliaser mon projet professionnel."
          img_src={tours}
          width={150}
          alt={"université de tours à blois"} />
      ),
    },
    {
      title: "2023-2024",
      content: (

        <div className="flex flex-col gap-5">

          <Parcours
            label="LICENCE PROFESSIONNELLE FULLSTACK"
            description="Cette formation m’a spécialisée en developpement web et m’a fait découvir le edge seo à l’issue de mon stage réalisé à Neper la Rochelle."
            img_src={rochelle}
            alt={"université de la rochelle"} />
          <Parcours
            label="Stage à Neper"
            description="Cette formation m’a spécialisée en developpement web et m’a fait découvir le edge seo à l’issue de mon stage réalisé à Neper la Rochelle."
            img_src={neper} />

        </div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <div className="flex flex-col gap-5">
          <Parcours
            label="BTS SIO"
            description="Cette formation m’a spécialisée en developpement web et m’a fait découvir le edge seo à l’issue de mon stage réalisé à Neper la Rochelle."
            img_src={laFutaie} />

          <Parcours
            label="Stage à Sorefa SARL"
            description="Cette formation m’a spécialisée en developpement web et m’a fait découvir le edge seo à l’issue de mon stage réalisé à Neper la Rochelle."
            img_src={sorefa} />

        </div>
      ),
    },
  ];
  return (
    <>
    
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
         Mon parcours et mes expériences professionnelles
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          {/* I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey. */}
          Dans cette section je vous présenterai mon parcours et les experiences professionnelles dans des environnemennent dynamiques
        </p>
      </div>

      
    <div className="w-full">
      <Timeline data={data} />
    </div>
 </> );
}

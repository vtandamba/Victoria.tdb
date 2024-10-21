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
        <Parcours
          label="LICENCE 3"
          description="Renforcement des compétences en développement et élargissement du champ pour réaliser mon projet professionnel."
          img_src={tours}
          width={150}
          alt={"université de tours à blois"}
        />
      ),
    },
    {
      title: "2023-2024",
      content: (
        <div className="flex flex-col gap-5">
          <Parcours
            label="LICENCE PROFESSIONNELLE FULLSTACK"
            description="Cette formation m’a spécialisée en développement web et m’a fait découvrir le edge SEO à l’issue de mon stage réalisé à Neper la Rochelle."
            img_src={rochelle}
            alt={"université de la rochelle"}
          />
          <Parcours
            label="Stage à Neper"
            description="Cette formation m’a spécialisée en développement web et m’a fait découvrir le edge SEO à l’issue de mon stage réalisé à Neper la Rochelle."
            img_src={neper}
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
            description="Cette formation m’a spécialisée en développement web et m’a fait découvrir le edge SEO à l’issue de mon stage réalisé à Neper la Rochelle."
            img_src={laFutaie}
          />
          <Parcours
            label="Stage à Sorefa SARL"
            description="Cette formation m’a spécialisée en développement web et m’a fait découvrir le edge SEO à l’issue de mon stage réalisé à Neper la Rochelle."
            img_src={sorefa}
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

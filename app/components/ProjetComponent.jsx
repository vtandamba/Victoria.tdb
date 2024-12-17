import React from 'react';
import Projects from './Projects';
import lettre_project from './../assets/images/bg_image.png';
import react_icon from './../assets/images/react-icon.svg';
import sass from './../assets/images/sass-icon.svg';
import git from './../assets/images/mdi_github.svg';
import sf from './../assets/images/sf-icon.svg';
import external_link from './../assets/images/mage_external-link.svg';
import artfullcode from './../assets/images/ARTFULLCODE(1).svg';
import lettreLumiere from './../assets/images/lettres_lumiere(1).svg';
import portfolio from './../assets/images/header_main.svg';
import { GraduationCap, Briefcase } from "lucide-react";


const ProjetComponent = () => {
    return (
        <>
            <div id="projets" className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10 backdrop-blur-sm" >
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-primary dark:text-primary-foreground">
                    Mes projets récents
                </h2>
                <p className="mb-4 text-muted-foreground text-xl max-w-md">
                    Dans cette section je présente un échantillon de mes récents projets réalisés.
                </p>
            </div>

            <section className='max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10'>
                <div className='flex py-6 flex-col lg:flex-row gap-3'>
                    <Projects
                        srcImg={artfullcode}
                        title={'ArtFull Code'}
                        description={"Un site web d'agence réalisée en cours de formation  "}
                        logoDev={[sass, react_icon]}
                        logoAcces={[git, external_link]}
                        linkAcces={['https://github.com/tandambav', 'https://agence-artfull-code.lpmiaw.univ-lr.fr']}
                    />

                    <Projects
                        title={'Lettres en Lumière'}
                        srcImg={lettreLumiere}
                        description={"Une application d'aide à l'apprentissage de la langue française pour adulte"}
                        logoDev={[sass, react_icon, sf]}
                        logoAcces={[git, external_link]}
                        linkAcces={['https://github.com/vtandamba/lettre-lumiere', 'https://github.com/vtandamba/lettre-lumiere']}
                    />

                    <Projects
                        title={'Portfolio'}
                        srcImg={portfolio}
                        description={"Mon portfolio qui décrit mon parcours mes compétences et mes expériences professionnelles."}
                        logoDev={[sass, react_icon]}
                        logoAcces={[git, external_link]}
                        linkAcces={['https://github.com/vtandamba/Victoria.tdb', 'https://victoria-tdb.vercel.app']}
                    />
                </div>
            </section>
        </>
    );
};

export default ProjetComponent;

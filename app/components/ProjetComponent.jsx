import React from 'react'
import Projects from './Projects'
import lettre_project from './../assets/images/bg_image.png'
import react_icon from './../assets/images/react-icon.svg'
import sass from './../assets/images/sass-icon.svg'
import git from './../assets/images/mdi_github.svg'
import sf from './../assets/images/sf-icon.svg'
import external_link from './../assets/images/mage_external-link.svg'
import artfullcode from './../assets/images/ARTFULLCODE.svg'
import lettreLumiere from './../assets/images/lettres_lumiere(1).svg'
import portfolio from './../assets/images/header_main.svg'

const ProjetComponent = () => {
    return (
        <>
            <section >


                <div className=' flex p-6 flex-col  lg:flex-row gap-3 '>

                    <Projects
                        srcImg={artfullcode}
                        title={'ArtFull Code'}
                        description={"Un site web d'agence réalisée en cours de formation  "}

                        /* Tu passes ici les logos en tant que tableaux */
                        logoDev={[sass, react_icon]}
                        logoAcces={[git, external_link]}
                    />


                    <Projects
                        title={'Lettres en Lumière'}
                        srcImg={lettreLumiere}
                        description={" Une application d'aide à l'apprentissage de la langue française pour adulte"}

                        /* Tu passes ici les logos en tant que tableaux */
                        logoDev={[sass, react_icon, sf]}
                        logoAcces={[git, external_link]}
                    />

                    <Projects
                        title={'portfolio'}
                        srcImg={portfolio}
                        description={"Une application d'aide à l'apprentissage de la langue française pour adulte"}

                        /* Tu passes ici les logos en tant que tableaux */
                        logoDev={[sass, react_icon, sf]}
                        logoAcces={[git, external_link]}
                    />
                </div>
            </section></>
    )
}

export default ProjetComponent

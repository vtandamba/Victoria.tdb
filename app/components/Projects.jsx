import Image from 'next/image'
import React from 'react'
import lettre_project from './../assets/images/bg_image.png'
import arfullcode_project from './../assets/images/bg_image.png'
import gestion_project from './../assets/images/bg_image.png'
import react_icon from './../assets/images/react-icon.svg'
import sass from './../assets/images/sass-icon.svg'
import sf from './../assets/images/sf-icon.svg'
import git from './../assets/images/mdi_github.svg'
import external_link from './../assets/images/mage_external-link.svg'
const Projects = () => {
    return (
        <>

            <section className='flex flex-col p-6 gap-3 rounded-sm'>
                <aside>
                    <figure className=' bg_text rounded-sm min-h-full w-full   flex flex-col justify-evenly items-center gap-2 '>

                        <Image className='object-cover max-h-60  w-full p-2 rounded-xl' src={lettre_project} width={100} height={100} />

                        <figcaption className=' p-2'>
                            <div>
                                {/* titres */}
                                <h3 className='capitalize text-2xl '> Lettres en Lumière </h3>
                                <p className='text-xl'> Une application d'aide à l'apprentissage de la langue française pour adulte</p>
                            </div>
                            <div className='flex gap-8 mt-4 justify-between'>
                                {/* logo */}
                                <div className='flex gap-3 mt-4'>


                                    <Image src={sass} />
                                    <Image src={react_icon} />
                                   
                                   
                                </div>

                                <div className='flex gap-3 mt-4'>

                                    <Image src={git} />
                                    <Image src={external_link} />
                                </div>
                              
                            </div>
                        </figcaption>
                    </figure>
                </aside>
                <aside>
                    <figure className='rounded-sm min-h-full w-full bg-slate-600  flex flex-col justify-evenly items-center gap-2 '>

                        <Image className='object-cover max-h-60  w-full p-2 rounded-xl' src={lettre_project} width={100} height={100} />

                        <figcaption className=' p-2'>
                            <div>
                                {/* titres */}
                                <h3 className='capitalize text-2xl '> Lettres en Lumière </h3>
                                <p className='text-xl'> Une application d'aide à l'apprentissage de la langue française pour adulte</p>
                            </div>
                            <div>
                                {/* logo */}
                                <div>
                                    {/* languages */}
                                </div>
                                <div>
                                    {/* voir le projet */}
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </aside>
            </section>
        </>
    )
}

export default Projects
import Image from 'next/image';
import React from 'react';

const Projects = ({ title, srcImg, description, logoDev = [], logoAcces = [] }) => {
    return (
        <aside className='flex flex-col rounded-sm lg:w-1/3 bordure p-4 transition-transform duration-300  hover:shadow-lg dark:hover:shadow-md'>
            <figure className='rounded-sm min-h-full w-full flex flex-col justify-evenly items-center gap-2'>
                {/* Image principale du projet avec effet hover */}
                <Image
                    className='object-cover max-h-60 w-full p-2 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105'
                    src={srcImg}
                    width={400}  // Taille ajustée pour desktop
                    height={300} // Taille ajustée pour desktop
                    alt={title}
                />

                <figcaption className='p-2'>
                    <div>
                        {/* Titres */}
                        <h3 className='capitalize text-2xl text-primary dark:text-primary-foreground'>
                            {title}
                        </h3>
                        <p className='text-xl text-secondary dark:text-secondary-foreground'>
                            {description}
                        </p>
                    </div>

                    {/* Logos Dev et Access */}
                    <div className='flex gap-8 mt-4 justify-between'>
                        {/* Logos Dev */}
                        <div className='flex gap-3 mt-4'>
                            {logoDev.map((logo, index) => (
                                <Image
                                    key={index}
                                    className='transition-transform duration-300 hover:scale-110'
                                    src={logo}
                                    width={32}   // Taille plus petite pour mobile
                                    height={32}  // Taille plus petite pour mobile
                                    alt={`logoDev-${index}`}
                                />
                            ))}
                        </div>

                        {/* Logos Access */}
                        <div className='flex gap-3 mt-4'>
                            {logoAcces.map((logo, index) => (
                                <Image
                                    key={index}
                                    className='transition-transform duration-300 hover:scale-110'
                                    src={logo}
                                    width={32}   // Taille plus petite pour mobile
                                    height={32}  // Taille plus petite pour mobile
                                    alt={`logoAcces-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                </figcaption>
            </figure>
        </aside>
    );
}

export default Projects;

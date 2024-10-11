import Image from 'next/image'
import React from 'react'

const Projects = ({ title, srcImg, description, logoDev = [], logoAcces = [] }) => {
    return (

        <aside className='flex flex-col  rounded-sm lg:w-1/3 '>
            <figure className='bg_text rounded-sm min-h-full w-full flex flex-col justify-evenly items-center gap-2'>

                {/* Image principale du projet */}
                <Image className='object-cover max-h-60 w-full p-2 rounded-xl bordure backdrop-blur-sm' src={srcImg} width={100} height={100} alt={title} />

                <figcaption className=' p-2 '>
                    <div>
                        {/* Titres */}
                        <h3 className=' capitalize text-2xl'>{title}</h3>
                        <p className='text-xl'>{description}</p>
                    </div>

                    {/* Logos Dev et Access */}
                    <div className='flex gap-8 mt-4 justify-between'>

                        {/* Logos Dev */}
                        <div className='flex gap-3 mt-4'>
                            {logoDev.map((logo, index) => (
                                <Image key={index} src={logo} width={40} height={40} alt={`logoDev-${index}`} />
                            ))}
                        </div>

                        {/* Logos Access */}
                        <div className='flex gap-3 mt-4'>
                            {logoAcces.map((logo, index) => (
                                <Image key={index} src={logo} width={40} height={40} alt={`logoAcces-${index}`} />
                            ))}
                        </div>
                    </div>
                </figcaption>
            </figure>
        </aside>

    )
}

export default Projects

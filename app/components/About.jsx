import Image from 'next/image';
import React from 'react';
import profile from './../assets/images/profile.png';
import git from './../assets/icons/mdi_github(1).svg';
import linkedin from './../assets/icons/line-md_linkedin.svg';
import mail from './../assets/icons/mdi-mail.svg';

const About = () => {
    return (
        <div id="about" className='flex flex-col p-6 gap-6'> {/* Ajout de l'id "about" */}
            <h2 className='titres2 uppercase text-4xl text-center'>
                À propos
            </h2>

            <figure className='bg-img flex items-center flex-col justify-evenly gap-12 py-6'>
                <Image className='rounded-sm mx-auto' src={profile} width={100} height={100} alt='Profile image' />
                <div className='social flex rounded-md bg-card   border border-dashed border-accent'>
                    <Image className='rounded-full m-3' src={git} width={30} height={30} alt='Git image' />
                    <Image className='rounded-full m-3' src={linkedin} width={30} height={30} alt='LinkedIn image' />
                    <Image className='rounded-full m-3' src={mail} width={30} height={30} alt='Mail image' />
                </div>
                <figcaption className='m-6 rounded-sm bg_text'>
                    <p className='text-xl text-center leading-loose'>
                        Moi c’est Victoria, jeune diplômée développeuse Full Stack, passionnée par le développement et les nouvelles technologies.
                    </p>
                </figcaption>
            </figure>
        </div>
    )
}

export default About;

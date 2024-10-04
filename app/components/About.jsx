import Image from 'next/image';

import React from 'react';

import profile from './../assets/images/profile.png';

import git from './../assets/icons/mdi_github(1).svg';

import linkedin from './../assets/icons/line-md_linkedin.svg';

import mail from './../assets/icons/mdi-mail.svg';

const About = () => {
    return (
        <> <div className='flex flex-col p-6 gap-6'>
            <h2 className=' titres2 uppercase text-4xl text-center' >
                a propos
            </h2>

            <figure className=' bg-img   flex items-center flex-col justify-evenly gap-12 py-6	 '>
                <Image className='rounded-sm mx-auto' src={profile} width={100} height={100} alt='profile image' />
                <div className='social flex rounded-md  bg-fuchsia-100  bordure "'>
                    <Image className='rounded-full  m-3' src={git} width={30} height={30} alt=' git image'/>
                    <Image className='rounded-full  m-3' src={linkedin} width={30} height={30} alt='linkedin image'/>
                    <Image className='rounded-full  m-3' src={mail} width={30} height={30} alt='mail image'/>
                </div>
                <figcaption className=' m-6 rounded-sm   bg_text '>
                    <p className=' text-xl text-center  leading-loose '> Moi c’est Victoria,
                        Jeune diplomée développeuse Full Stack, passionnée par le developpement et les nouvelles technologies.</p>
                </figcaption>
            </figure>
        </div>
        </>)
}

export default About
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import profile from './../assets/images/profile_l.svg';
import git from './../assets/icons/mdi_github(1).svg';
import linkedin from './../assets/icons/line-md_linkedin.svg';
import mail from './../assets/icons/mdi-mail.svg';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center items-center lg:flex-row flex-col'>
                <section className='hero mt-32 leading-relaxed lg:w-1/2'>
                    <div className='text-4xl mb-12 leading-relaxed'>
                        Bonjour 👋, je suis <span><h1 className='text-purple-900 font-bold leading-relaxed'> Tandamba Victoria </h1></span>
                    </div>
                    <h2 className='text-2xl leading-loose lg:w-9/12'> Une développeuse Full Stack passionnée qui repousse les frontières de la technologie en alliant créativité et expertise technique.</h2>

                    <aside className='hero__navigations flex justify-between lg:justify-start gap-6 my-12'>
                        {/* Liens Me découvrir et Mon CV */}
                        <div className='flex gap-6'>
                            <p className='text-lg'>
                                <Link href="#about" scroll={true}>
                                    <span className='hero__navigation bg-fuchsia-100 bordure uppercase w-full min-h-1 p-3'>
                                        Me découvrir
                                    </span>
                                </Link>
                            </p>
                            <p className='text-lg'>
                                <span className='hero__navigation bg-fuchsia-100 bordure uppercase w-full min-h-1 p-3'>
                                    Mon CV
                                </span>
                            </p>
                        </div>

                        {/* Icônes Sociales */}
                        <div className='hidden lg:flex social justify-end gap-4'>
                            <Image className='rounded-full' src={git} width={30} height={30} alt='Git image' />
                            <Image className='rounded-full' src={linkedin} width={30} height={30} alt='LinkedIn image' />
                            <Image className='rounded-full' src={mail} width={30} height={30} alt='Mail image' />
                        </div>
                    </aside>
                </section>

                {/* Section image + icônes pour mobile */}
                <section className='relative flex flex-col items-center  p-6 gap-6'>
                    {/* Image de profil */}
                    <Image className='rounded-sm backdrop-blur-sm bg-fuchsia-100 bordure' src={profile} width={300} height={300} alt="Profile image" />

                  

                    {/* Icônes sociales (affichage sur mobile) */}
                    <div className='flex justify-center gap-6 lg:hidden'>
                        <Image className='' src={git} width={30} height={30} alt='Git image' />
                        <Image className='' src={linkedin} width={30} height={30} alt='LinkedIn image' />
                        <Image className='' src={mail} width={30} height={30} alt='Mail image' />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Header;

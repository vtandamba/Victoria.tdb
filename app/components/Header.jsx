import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import profile from './../assets/images/profile_l.svg';
import git from './../assets/icons/mdi_github(1).svg';
import linkedin from './../assets/icons/line-md_linkedin.svg';
import mail from './../assets/icons/mdi-mail.svg';
import Link from 'next/link';
import { Github, Mail, Linkedin } from 'lucide-react';

const Header = () => {
    return (
        <>

            <Navbar  />
            <div id='accueil' className='flex justify-center items-center lg:flex-row flex-col'>
                <section  className='hero mt-32 leading-relaxed lg:w-1/2'>
                    <div className='text-4xl mb-12 leading-relaxed text-primary dark:text-primary-foreground'>
                        Bonjour 👋, je suis <span><h1 className='font-bold leading-relaxed'>Tandamba Victoria</h1></span>
                    </div>
                    <h2 className='text-2xl leading-loose lg:w-9/12 text-muted-foreground dark:text-muted-foreground'>
                        Une développeuse Full Stack passionnée qui repousse les frontières de la technologie en alliant créativité et expertise technique.
                    </h2>

                    <aside className=' flex  lg:justify-start   my-12 items-center gap-x-32 w-max  '>
                        {/* Liens Me découvrir et Mon CV */}
                        <div className='flex gap-6'>
                            <p className='text-lg'>
                                <Link href="#parcours" scroll={true}>
                                    <span className="uppercase border-accent text-lg border-solid border-2  px-4 py-2 text-black backdrop-blur-sm  border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2]  transition duration-200">
                                        Me découvrir
                                    </span>
                                </Link>
                            </p>
                            <p className='text-lg'>
                                <a
                                    href="/pdf/A4-CV-tandambaVictoria.pdf"
                                    download="CV-TandambaVictoria.pdf"
                                    className='uppercase border-solid border-2 px-4 py-2 text-black backdrop-blur-sm border-accent border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-lg transition duration-200'
                                >
                                    Mon CV
                                </a>
                            </p>


                        </div>

                        {/* Icônes Sociales */}
                        <div className='hidden lg:flex social justify-end gap-4 border-double border-accent rounded-md px-2 py-2 border-2'>
                            <a
                                href="https://github.com/vtandamba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-75 transition-opacity duration-300"
                            >
                                <Github />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/victoria-tandamba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-75 transition-opacity duration-300"
                            >
                                <Linkedin />
                            </a>
                            <a
                                href="mailto:victoriatandam@gmail.com"
                                className="hover:opacity-75 transition-opacity duration-300"
                            >
                                <Mail />
                            </a>
                        </div>

                    </aside>
                </section>

                {/* Section image + icônes pour mobile */}
                <section className='relative flex flex-col items-center p-6 gap-6'>
                    {/* Image de profil */}
                    <Image className='rounded-sm backdrop-blur-sm bg-accent   border border-dashed border-accent' src={profile} width={300} height={300} alt="Profile image" />

                    {/* Icônes sociales (affichage sur mobile) */}
                    <div className='flex justify-center gap-6 lg:hidden border-solid border-accent rounded-md px-4 py-2 border-2'>
                        <a
                            href="https://github.com/vtandamba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-75 transition-opacity duration-300"
                        >
                            <Github />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/victoria-tandamba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-75 transition-opacity duration-300"
                        >
                            <Linkedin />
                        </a>
                        <a
                            href="mailto:victoriatandam@gmail.com"
                            className="hover:opacity-75 transition-opacity duration-300"
                        >
                            <Mail />
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Header;

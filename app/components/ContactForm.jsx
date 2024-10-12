import React, { useState } from 'react';
import Image from 'next/image';
import git from './../assets/icons/mdi_github(1).svg';
import linkedin from './../assets/icons/line-md_linkedin.svg';
import mailIcon from './../assets/icons/mdi-mail.svg';

const ContactForm = () => {
    // État pour les champs du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Fonction pour gérer les changements dans le formulaire
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fonction pour soumettre le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour envoyer le formulaire (par exemple, API, emailjs, etc.)
        console.log('Formulaire soumis', formData);
    };

    return (
        <div className='max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10'>
            {/* Section des réseaux sociaux et e-mail */}
            <h2 className='text-3xl mb-6 font-bold text-primary dark:text-primary-foreground'>Me Contacter</h2>
            <div className='flex flex-col lg:flex-row justify-between gap-6'>
                <section className='w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-4'>
                    <div className='flex flex-col items-center gap-4 justify-center w-2/3 bg-accent py-5 rounded-sm'>
                        <Image src={mailIcon} width={24} height={24} alt='Mail icon' />
                        <span className="text-muted-foreground">victoriatandam@gmail.com</span>
                    </div>
                    <div className='flex flex-col items-center gap-4 justify-center w-2/3 bg-accent py-5 rounded-sm'>
                        <a href='https://github.com' target="_blank" rel="noopener noreferrer">
                            <Image className='rounded-full' src={git} width={30} height={30} alt='GitHub' />
                        </a>
                    </div>
                    <div className='flex flex-col items-center gap-4 justify-center w-2/3 bg-accent py-5 rounded-sm'>
                        <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
                            <Image className='rounded-full' src={linkedin} width={30} height={30} alt='LinkedIn' />
                        </a>
                    </div>
                </section>
                {/* Formulaire de contact */}
                <section className='w-full lg:w-1/2'>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                            className='p-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre e-mail"
                            required
                            className='p-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Votre message"
                            required
                            rows="5"
                            className='p-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                        />
                        <button
                            type="submit"
                            className='bg-primary text-white p-3 rounded-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary'
                        >
                            Envoyer
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ContactForm;

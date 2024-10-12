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
        <div className='flex flex-col lg:flex-row justify-between p-6 gap-6'>
            {/* Formulaire de contact */}
            <section className='w-full lg:w-1/2'>
                <h2 className='text-3xl mb-6 font-bold'>Me Contacter</h2>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className='p-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre e-mail"
                        required
                        className='p-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        required
                        rows="5"
                        className='p-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'
                    />
                    <button
                        type="submit"
                        className='bg-purple-700 text-white p-3 rounded-sm hover:bg-purple-800'>
                        Envoyer
                    </button>
                </form>
            </section>

            {/* Section des réseaux sociaux et e-mail */}
            <section className='w-full lg:w-1/2 flex flex-col items-start lg:items-end'>
                <h2 className='text-3xl mb-6 font-bold'>Mes Réseaux</h2>
                <div className='flex flex-col items-start lg:items-end gap-4'>
                    <p className='flex items-center gap-2 text-lg'>
                        <Image src={mailIcon} width={24} height={24} alt='Mail icon' />
                        <span>victoria@example.com</span>
                    </p>
                    <div className='flex gap-4'>
                        <a href='https://github.com' target="_blank" rel="noopener noreferrer">
                            <Image className='rounded-full' src={git} width={30} height={30} alt='GitHub' />
                        </a>
                        <a href='https://linkedin.com' target="_blank" rel="noopener noreferrer">
                            <Image className='rounded-full' src={linkedin} width={30} height={30} alt='LinkedIn' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;

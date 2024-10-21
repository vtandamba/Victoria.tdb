import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(''); // Pour afficher le statut de l'envoi

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message envoyé avec succès !');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Erreur lors de l\'envoi du message.');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setStatus('Erreur lors de l\'envoi du message.');
        }
    };
    const handleEmailClick = () => {
        window.location.href = 'mailto:victoriatandam@gmail.com';
    };
    return (
        <div className='max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10'>
            <h2 id='contacts' className='text-3xl mb-6 font-bold text-primary dark:text-primary-foreground'>Me Contacter</h2>
            <p className=" mb-4  text-muted-foreground text-xl max-w-md ">
                Merci de m'avoir lu! <br />
                Actuellement je suis en<span className='text-primary'> recherche de stage</span>, mais je suis à ouverte à toute autre proposition.
            </p>

            <div className='flex flex-col lg:flex-row justify-between gap-6'>
                <section className='w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-4'>
                    <div onClick={handleEmailClick} className='flex flex-col items-center gap-4 justify-center w-2/3 bg-accent py-5 rounded-sm'>
                        <Mail size={32} className='cursor-pointer stroke-primary fill-secondary' />
                        <span className="text-muted-foreground">victoriatandam@gmail.com</span>
                    </div>
                    <a href='https://github.com/vtandamba' target="_blank" rel="noopener noreferrer" className='flex flex-col items-center gap-4 justify-center w-2/3 bg-accent py-5 rounded-sm'>
                        <Github size={32} className='cursor-pointer stroke-primary fill-secondary' />
                        <span className="text-muted-foreground">Github</span>
                    </a>
                    <a href='https://www.linkedin.com/in/victoria-tandamba/' target="_blank" rel="noopener noreferrer" className='flex flex-col items-center gap-4 justify-center w-2/3 bg-accent py-5 rounded-sm'>
                        <Linkedin size={32} className='cursor-pointer stroke-primary fill-secondary' />
                        <span className="text-muted-foreground">Linkedin</span>
                    </a>
                </section>
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
                        {status && <p className='mt-4'>{status}</p>} {/* Afficher le statut */}
                    </form>
                </section>
            </div>
        </div>)
};

export default ContactForm;

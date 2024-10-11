import Image from 'next/image'
import React from 'react'
import api from './../assets/icons/api-icon.svg'
import cloudflare from './../assets/icons/cloudflare-icon.svg'
import code from './../assets/icons/code-icon.svg'
import data from './../assets/icons/data-icon.svg'
import devops from './../assets/icons/devops-icon.svg'
import django from './../assets/icons/django-icon.svg'
import docker from './../assets/icons/docker-icon.svg'
import edgeSeo from './../assets/icons/edge-seo-icon.svg'
import git from './../assets/icons/git-icon.svg'
import java from './../assets/icons/java-icon.svg'
import mysql from './../assets/icons/mysql-icon(1).svg'
import notion from './../assets/icons/notion-icon.svg'
import php from './../assets/icons/php-icon.svg'
import postgres from './../assets/icons/postgres-icon.svg'
import py from './../assets/icons/py-icon.svg'
import server from './../assets/icons/server-icon.svg'
import sf from './../assets/icons/sf-icon(3).svg'
import supabase from './../assets/icons/supabase-icon(2).svg'
import trello from './../assets/icons/trello-icon.svg'
import vuejs from './../assets/icons/vuejs-icon.svg'
const Skills = () => {
    return (

        <section className='flex flex-col p-6 gap-3 rounded-sm '>
            <aside>
                <div className='flex flex-col gap-5  p-2 bg-fuchsia-100  bordure'>
                    <Image src={data} />
                    <div>
                        {/* description compétences */}
                        <p> Gestion de données</p>
                        <p> Utilisation de plusieurs types de base de  donées relationnelles, en temps réel</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        {/* icones */}
                        <Image src={supabase} />
                        <Image src={mysql} />
                        <Image src={postgres} />
                    </div></div>
            </aside>
        </section>
    )
}

export default Skills
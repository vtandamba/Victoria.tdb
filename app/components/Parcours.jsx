import React from 'react'
import Image from 'next/image' // Utiliser le composant Image de Next.js

const Parcours = ({ width = 100, label = "Default Label", description = "Default Description", img_src = "/default-image.jpg" }) => {

    return (
        <section className='flex flex-col  gap-3 rounded-sm text-xl'>
            <aside className='flex flex-col gap-5 p-2 rounded-[6px] border border-dashed border-accent'>
                <div className="flex flex-col gap-5 p-2">
                    <p className='text-xl'>{label}</p>
                    <p className="text-lg ">{description}</p>
                </div>
                <div className="flex justify-end">
                    {/* Utilisation du composant Image de Next.js pour une optimisation */}
                    <Image
                        src={img_src}
                        width={width}
                        height={100}
                        className="rounded-sm"
                        alt={label || 'Image'}
                    />
                </div>

            </aside>
        </section>
    )
}

export default Parcours

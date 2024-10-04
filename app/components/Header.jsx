import React from 'react'
import Navbar from './Navbar'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
const Header = () => {
    return (
        <>
            <Navbar />
            <section className='hero  mt-32 leading-relaxed'>
                <div className='text-4xl mb-12 leading-relaxed'>
                    Bonjour 👋, je suis <span> <h1 className='content-clip font-bold  leading-relaxed '> Tandamba Victoria </h1></span>
                </div>
                <h2 className='text-2xl leading-loose'> Une developpeuse Full Stack passionnée qui repousse les frontières de la technologies alliant créativité et expertise technique.</h2>
                <aside className='hero__navigations flex gap-6 my-12'>
                    <p className='text-lg'> <span className='hero__navigation  bg-fuchsia-100  bordure uppercase w-full min-h-1 p-3'> me decouvir</span></p>
                    <p className='text-lg'> <span className='hero__navigation  bg-fuchsia-100  bordure uppercase w-full min-h-1 p-3'>  mon cv</span></p>
                </aside>
                {/* <FontAwesomeIcon icon="fa-solid fa-angles-down" />: */}
               
                {/* <Image className='content-clip' src={scroll} alt="scroll" width={100} height={100} /> */}
            </section>
        </>
    )
}

export default Header
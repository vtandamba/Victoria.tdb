import React from 'react'
import About from './About'
import DynamicIconCloud from './DynamicIconCloud'
import Marquee from '@/components/ui/marquee'
import IconCloud from '@/components/ui/icon-cloud'
import { MarqueeDemo } from './MarqueeDemo'
import { IconCloudDemo } from './IconCloudDemo'
import Projects from './Projects'
import Skills from './Skills'
const Body = () => {
    return (
        <div>

            <section className=''>
                {/* a propos */}
                <About />
            </section>

            <section>
                {/* parcours professionnel */}


            </section>

            <section>
                {/* projets */}
                <Projects />
            </section>

            <section>
                {/* compétences carousel */}
                <Skills />
            </section>
            <section>
                {/* globe */}

                <IconCloudDemo />
            </section>

            <section>
                {/* qualité */}
                <MarqueeDemo />
            </section>

            <section>
                {/* contact form  */}

            </section>
        </div>
    )
}

export default Body
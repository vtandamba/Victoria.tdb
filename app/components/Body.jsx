import React from 'react'
import About from './About'
import DynamicIconCloud from './DynamicIconCloud'
import Marquee from '@/components/ui/marquee'
import IconCloud from '@/components/ui/icon-cloud'
import { MarqueeDemo } from './MarqueeDemo'
import { IconCloudDemo } from './IconCloudDemo'
import ProjetComponent from './ProjetComponent'
import Services from './Services'
import ContactForm from './ContactForm'

import { TimelineDemo } from './TimelineDemo'
const Body = () => {
    return (
        <div className=' "max-w-6xl  py-10 px-4 md:px-8 lg:px-10'>


            <section>

                <TimelineDemo />
                {/* parcours professionnel */}


            </section>

            <section>

                {/* projets */}
                <ProjetComponent />
            </section>

            <section>
                {/* compétences carousel */}
                <Services />
            </section>
            <section>
                {/* globe */}

                {/* <IconCloudDemo /> */}
            </section>

            <section>
                {/* qualité */}
                <MarqueeDemo />
            </section>

            <section>
                {/* contact form  */}
<ContactForm/>
            </section>
        </div>
    )
}

export default Body
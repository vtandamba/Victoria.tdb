import { VelocityScroll } from "./../../components/ui/scroll-based-velocity";

export function Actu() {
    return (
        <VelocityScroll
        
            text="en recherche de stage"
            default_velocity={1}
            className="uppercase font-display text-center text-4xl font-bold tracking-[-0.02em] text-primary drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
    );
}

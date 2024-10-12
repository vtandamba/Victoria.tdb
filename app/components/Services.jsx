import { PersonStanding, Timer, Zap, ZoomIn } from 'lucide-react';

const Services = () => {
    return (
        <div className='flex flex-col justify-center'>
            <section className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
                <div className="container">
                    <p className="mb-4 text-xs text-muted-foreground">Mes compétences techniques</p>
                    <h2 className="text-3xl font-medium lg:text-4xl">
                        Conception d'appli & site web et de bureau
                    </h2>
                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                        {/* Bloc 1 */}
                        <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border md:p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-md">
                            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12 transition-transform duration-300 hover:scale-110">
                                <Timer className="size-5 md:size-6" />
                            </span>
                            <div>
                                <h3 className="font-medium md:mb-2 md:text-xl">
                                    Performance
                                    <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                                </h3>
                                <p className="text-sm text-muted-foreground md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 2 */}
                        <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border md:p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-md">
                            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12 transition-transform duration-300 hover:scale-110">
                                <Zap className="size-5 md:size-6" />
                            </span>
                            <div>
                                <h3 className="font-medium md:mb-2 md:text-xl">
                                    Innovation
                                    <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                                </h3>
                                <p className="text-sm text-muted-foreground md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 3 */}
                        <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border md:p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-md">
                            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12 transition-transform duration-300 hover:scale-110">
                                <ZoomIn className="size-5 md:size-6" />
                            </span>
                            <div>
                                <h3 className="font-medium md:mb-2 md:text-xl">
                                    Quality
                                    <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                                </h3>
                                <p className="text-sm text-muted-foreground md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 4 */}
                        <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border md:p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-md">
                            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12 transition-transform duration-300 hover:scale-110">
                                <PersonStanding className="size-5 md:size-6" />
                            </span>
                            <div>
                                <h3 className="font-medium md:mb-2 md:text-xl">
                                    Accessibility
                                    <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                                </h3>
                                <p className="text-sm text-muted-foreground md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

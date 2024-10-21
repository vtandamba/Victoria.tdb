import { PersonStanding, Timer, Zap, ZoomIn, SquareCode, Database, Container, UsersRound } from 'lucide-react';

const ServiceBlock = ({ Icon, title, items }) => {
    return (
        <div className=" relative flex gap-3 rounded-lg border-dashed md:block md:border border-secondary md:p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-md">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12 transition-transform duration-300 hover:scale-110">
                <Icon className="size-5 md:size-6" />
            </span>
            <div>
                <h3 className="font-medium md:mb-2 md:text-xl text-primary dark:text-primary-foreground">
                    {title}
                </h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index} className=" py-1 text-sm text-muted-foreground md:text-base">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <div className='flex flex-col justify-center'>
            <section className="max-w-7xl mx-auto pt-10 pb-2 px-4 md:px-8 lg:px-10">
                <div className="container">
                    <h2 id="competences" className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                        Conception d'appli & site web et de bureau
                    </h2>
                    <p className="mb-4  text-muted-foreground text-xl max-w-md">Mes compétences techniques</p>
                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                        {/* Bloc 1 */}
                        <ServiceBlock
                            Icon={SquareCode}
                            title="Développement"
                            items={[
                                "Conception de sites web responsives statiques et dynamiques",
                                "Conception d’applications de bureau et d’administration de données"
                            ]}
                        />
                        {/* Bloc 2 */}
                        <ServiceBlock
                            Icon={Database}
                            title="Gestion de données"
                            items={[
                                "Utilisation de plusieurs types de bases de données relationnelles, en temps réel"
                            ]}
                        />
                        {/* Bloc 3 */}
                        <ServiceBlock
                            Icon={Container}
                            title="DevOps"
                            items={[
                                "Edge SEO",
                                "Hébergements et gestion de cron jobs"
                            ]}
                        />
                        {/* Bloc 4 */}
                        <ServiceBlock
                            Icon={UsersRound}
                            title="Travail en mode projet"
                            items={[
                                "Méthode Scrum ou Agile",
                                "Organisation des tâches avec Trello ou Tuleap Campus",
                                "Développement en équipe avec GitHub ou GitLab"
                            ]}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

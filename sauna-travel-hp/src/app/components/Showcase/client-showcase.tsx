import { ClientCard } from "../Card/client-card"

interface CardPropaty {
    image: string;
    companyName: string;
    items: string[];
    link?: string;
}

interface CardPropatyProps {
    cards: CardPropaty[];
}


export default function ClientShowcase({ cards }: CardPropatyProps) {
    return (
        <div className="px-4 lg:px-40 mx-auto pb-8 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-6 md:flex-nowrap md:gap-8">
                {cards.map((client, index) => (
                    <ClientCard
                        key={index}
                        image={client.image}
                        companyName={client.companyName}
                        items={client.items}
                        link={client.link}
                        className="w-full md:max-w-[400px]" // スマホでは100%の幅, PCでは400pxを維持
                    />
                ))}
            </div>
        </div>
    );
}


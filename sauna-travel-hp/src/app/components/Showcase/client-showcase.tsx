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
        <div className="mx-auto px-4 pb-8 max-w-screen-lg">
            <div
                className={`grid gap-6 ${cards.length === 2 ? "grid-cols-1 md:grid-cols-2 " : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    }`}
            >
                {cards.map((client, index) => (
                    <ClientCard
                        key={index}
                        image={client.image}
                        companyName={client.companyName}
                        items={client.items}
                        link={client.link}
                    />
                ))}
            </div>
        </div>
    );
}


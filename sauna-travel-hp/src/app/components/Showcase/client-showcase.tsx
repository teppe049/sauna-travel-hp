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
        <div className="px-4 lg:px-40 mx-auto pb-8 max-w-[1200px] mt-[3rem]"> {/* PC で余白が大きくならないように */}
            <div className="flex flex-wrap justify-center gap-6 md:flex-nowrap md:gap-8 w-full">
                {cards.map((client, index) => (
                    <ClientCard
                        key={index}
                        image={client.image}
                        companyName={client.companyName}
                        items={client.items}
                        link={client.link}
                        className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]" // PC の時は最大 600px まで拡大
                    />
                ))}
            </div>
        </div>
    );
}


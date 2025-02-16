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
        <div className="px-4 lg:px-40 mx-auto pb-8 max-w-4xl overflow-hidden"> {/* ✅ ここに overflow-hidden を追加 */}
            <div className="flex flex-wrap justify-center gap-6 md:flex-nowrap md:gap-8 w-full max-w-full"> {/* ✅ w-full max-w-full を追加 */}
                {cards.map((client, index) => (
                    <ClientCard
                        key={index}
                        image={client.image}
                        companyName={client.companyName}
                        items={client.items}
                        link={client.link}
                        className="w-full max-w-[400px]" // ✅ w-full は維持, max-w で最大幅を制限
                    />
                ))}
            </div>
        </div>
    );
}



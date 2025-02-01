import { ClientCard } from "../Card/client-card"

const clients = [
    {
        image: "/sauna1.jpg",
        companyName: "XXXHOTEL",
        items: [""],
    },
    {
        image: "/sauna2.jpg",
        companyName: "YYY湯",
        items: [""],
    },
    {
        image: "/sauna3.jpg",
        companyName: "株式会社ZZZ",
        items: [],
    },
]

export default function ClientShowcase() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clients.map((client, index) => (
                    <ClientCard
                        key={index}
                        image={client.image}
                        companyName={client.companyName}

                        items={client.items}
                    />
                ))}
            </div>
        </div>
    )
}


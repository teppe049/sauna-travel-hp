import Image from "next/image"

interface ClientCardProps {
    image: string
    companyName: string
    categoryLabel: string
    items: string[]
}

export function ClientCard({ image, companyName, categoryLabel, items }: ClientCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={`${companyName} `}
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="text-lg font-medium mb-4">{companyName}</h3>
            <div className="space-y-2">
                <p className="text-sm text-neutral-600">{categoryLabel}</p>
                {items.map((item, index) => (
                    <p key={index} className="text-sm">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}


import Image from "next/image"

interface ClientCardProps {
    image: string
    companyName: string
    items: string[]
}

export function ClientCard({ image, companyName, items }: ClientCardProps) {
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

            </div>
        </div>
    )
}


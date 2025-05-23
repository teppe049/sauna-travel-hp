import Image from "next/image";

interface ClientCardProps {
    image: string;
    companyName: string;
    items: string[];
    link?: string;
    className: string;
}

export function ClientCard({ image, companyName, items, link, className }: ClientCardProps) {
    return (
        <a
            href={link || "https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className={`block ${className}`}
        >
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center 
                            text-center w-full max-w-[500px] lg:max-w-[600px] transition-transform 
                            duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={`${companyName}`}
                        fill
                        className="object-contain"
                    />
                </div>
                <h3 className="text-lg font-medium font-serif mb-4">{companyName}</h3>
                <div className="space-y-2"></div>
            </div>
        </a>
    );
}
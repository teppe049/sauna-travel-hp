import Image from "next/image";

interface ClientCardProps {
    image: string;
    companyName: string;
    items: string[];
    link?: string;
}

export function ClientCard({ image, companyName, items, link }: ClientCardProps) {
    return (
        <a
            href={link || "https://www.google.com"} // 外部リンク先
            target="_blank" // 新しいタブで開く
            rel="noopener noreferrer" // セキュリティ強化
            className="block"
        >
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center max-w-[400px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={`${companyName}`}
                        fill
                        className="object-contain" // 画像全体を収める
                    />
                </div>
                <h3 className="text-lg font-medium mb-4">{companyName}</h3>
                <div className="space-y-2">
                    {/* その他の情報を表示 */}
                </div>
            </div>
        </a>
    );
}

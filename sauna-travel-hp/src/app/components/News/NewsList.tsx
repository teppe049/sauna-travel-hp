import { News } from "@/app/models/News"
import Image from "next/image"


type Props = {
    news: News[]
}

export default function NewsList({ news }: Props) {
    return (
        <>
            <ul className="px-4 lg:px-14">
                {news.map((article) => (

                    <li key={article.id} className="border-b ml-8" >
                        <div className="flex flex-row gap-10 py-6">
                            <Image
                                className="w-40 h-32 rounded"
                                src={"/introduction.jpg"}
                                alt="No Image"
                                width={480}
                                height={430}
                            />
                            <div className="flex flex-col justify-between">
                                <p className="text-lg font-bold text-start mb-2 line-clamp-4 whitespace-normal">
                                    {article.title}
                                </p>
                                <p className="text-base text-start">{article.pulishedAt}</p>
                            </div>
                        </div>
                    </li>

                ))}
            </ul>
        </>
    )
}
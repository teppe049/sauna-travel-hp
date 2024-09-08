import { News } from "@/app/models/News"
import Image from "next/image"


type Props = {
    news: News[]
}

export default function NewsList({ news }: Props) {
    return (
        <>
            <ul className="px-[100px]">
                {news.map((article) => (

                    <li key={article.id} className="border-b ml-8" >
                        <div className="flex flex-row gap-10 py-6">
                            <Image
                                className="w-24 h-24 rounded"
                                src={"/introduction.jpg"}
                                alt="No Image"
                                width={480}
                                height={430}
                            />
                            <div className="flex flex-col text-justify">
                                <p className="basis-4/5 text-lg font-bold text-start mb-2">{article.title}</p>
                                <p className="basis-1/5 text-bases text-start ">{article.pulishedAt}</p>
                            </div>
                        </div>
                    </li>

                ))}
            </ul>
        </>
    )
}
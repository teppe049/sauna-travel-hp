import { News } from "@/app/models/News"


type Props = {
    news: News[]
}

export default function NewsList({ news }: Props) {
    return (
        <>
            <ul className="px-[100px]">
                {news.map((article) => (

                    <li key={article.id} className=" border-b py-6 ml-8" >
                        <div className="flex flex-row items-center px-2" >
                            <p className="text-zinc-500 text-left ">{article.pulishedAt}</p>
                            <div className="px-5">
                                <p className="border border-zinc-300 text-zinc-500 rounded-3xl text-center px-10 py-1">{article.category.name}</p>
                            </div>
                            <p className="text-left ml-3 flex-wrap">{article.title}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
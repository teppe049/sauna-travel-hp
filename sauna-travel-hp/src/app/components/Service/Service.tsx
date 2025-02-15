import Link from "next/link";
import ClientShowcase from "../Showcase/client-showcase";
import Image from "next/image";
import { link } from "fs";

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

const medias = [
    {
        image: "/saunaWorker.jpg",
        companyName: "ハマ┆サウナリーマン",
        items: [""],
        link: "https://www.instagram.com/hama.kantousauna/"
    },
    {
        image: "/img-logo.png",
        companyName: "Sauna Travel【公式】",
        items: [""],
        link: "https://x.com/SaunaTravel_JP"
    },
]

export default function ServiceSection() {
    return (
        <section className="py-16 space-y-32">
            <div className="space-y-2">
                <h2 className="text-neutral-950 font-bold font-serif text-3xl text-center">SERVICE</h2>
                <p className="text-md text-center text-neutral-600">事業内容</p>
            </div>

            {/* マーケティング支援 Section */}
            {/* <div className="grid ">
                <div className="space-y-6 px-32">
                    <h3 className="text-2xl font-serif text-center">マーケティング支援事業</h3>
                    <p className="text-sm leading-relaxed text-center">
                        「認知拡大・集客増加」をご支援。企画から成果測定までを一気通貫でご提供する
                    </p>

                    <ClientShowcase cards={clients} />
                    <div className="space-y-4">
                    </div>
                </div>
            </div> */}

            {/* トラベル事業 Section */}
            <div className="grid gap-8 items-center">
                <div className="space-y-6 flex flex-col items-center">
                    <h3 className="text-2xl font-serif text-center">トラベル事業</h3>
                    <div className="space-y-4 text-center">
                        <p className="text-sm leading-relaxed">サウナ施設の検索・比較・予約を行える日本初サウナ専門の予約サイト</p>
                        <p className="text-sm leading-relaxed">
                            アウトドアサウナ・サウナ付きホテル・サウナ付きコテージ/ヴィラなどの、日常使いをしない特別なサウナの予約ができます
                        </p>
                    </div>
                    {/* <div className="relative w-3/4 md:w-1/2 aspect-[4/3] bg-[#F5F9FF] rounded-lg p-6 mx-auto"></div>
                     */}
                    <Image className="mx-auto" src="/travelsample.png" alt="" width={250} height={250} />
                    <h3 className="text-2xl text-center font-extralight">2025年7月リリース予定</h3>

                    {/* <a
                        href="https://sauna-travel-20240715.s3.ap-northeast-1.amazonaws.com/01_index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-2 border text-sm hover:bg-neutral-50 transition-colors rounded-md text-center inline-block"
                    >
                        詳しく見る
                    </a> */}
                </div>
            </div>

            {/* メディア事業 Section */}

            <div className="space-y-6">
                <h3 className="text-2xl font-serif text-center">メディア事業</h3>
                <p className="text-sm leading-relaxed text-center">
                    サウナ施設を紹介するメディアの運営
                </p>
                <ClientShowcase cards={medias} />


                <div className="space-y-4">
                </div>
            </div>



        </section>
    )
}


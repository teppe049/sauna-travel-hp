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
        <section className="py-16 space-y-32 px-4 lg:px-40">
            <div className="max-w-screen-xl mx-auto space-y-2">
                <h2 className="text-neutral-950 font-bold font-serif text-4xl text-center">Service</h2>
                <p className="text-lg text-center text-neutral-600">事業内容</p>
            </div>

            {/* トラベル事業 Section */}
            <div className="max-w-screen-xl mx-auto grid gap-12 md:gap-16 items-center">
                <div className="space-y-8 flex flex-col items-center">
                    <h3 className="text-3xl md:text-4xl font-serif text-center">トラベル事業</h3>
                    <div className="space-y-4 text-center">
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                            サウナ施設の検索・比較・予約を行える日本初サウナ専門の予約サイト
                        </p>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                            アウトドアサウナ・サウナ付きホテル・サウナ付きコテージ/ヴィラなどの、
                            日常使いをしない特別なサウナの予約ができます
                        </p>
                    </div>

                    <Image className="mx-auto" src="/travelsample.png" alt="" width={250} height={250} />
                    <div className="text-2xl text-center font-extralight">2025年7月リリース予定</div>
                </div>
            </div>

            {/* メディア事業 Section */}
            <div className="max-w-screen-xl mx-auto space-y-6">
                <h3 className="text-3xl md:text-4xl font-serif text-center">メディア事業</h3>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center">
                    サウナ好きのための情報メディアを運営<br />
                    全国のサウナを紹介し、あなたにぴったりのサウナをお届けします
                </p>
                <ClientShowcase cards={medias} />
            </div>
        </section>
    );
}



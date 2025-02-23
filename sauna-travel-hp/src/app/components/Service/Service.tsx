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
        <section className="px-4 lg:px-40">
            <div className="max-w-screen-xl mx-auto space-y-2">
                <h2 className="text-neutral-950 font-bold font-serif text-3xl md:text-5xl text-center">Service</h2>
                <p className="text-base md:text-lg lg:text-xl text-center  text-neutral-600 font-serif">事業内容</p>
            </div>

            {/* トラベル事業 Section */}
            <div className="max-w-screen-xl mx-auto grid gap-12 md:gap-16 items-center mt-[3rem]">
                <div className="space-y-8 flex flex-col items-center">
                    <h3 className="text-xl md:text-3xl font-serif text-center">トラベル事業</h3>
                    <div className="space-y-4 text-center">
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed font-serif">
                            サウナ付き宿泊施設の検索・比較・予約を行える日本初サウナ専門の予約サイト
                        </p>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed font-serif">
                            アウトドアサウナ・サウナ付きホテル・サウナ付きコテージ/ヴィラなどの、
                            日常使いをしない特別なサウナの予約ができます
                        </p>
                    </div>

                    <Image className="mx-auto" src="/travelsample.png" alt="" width={250} height={250} />
                    <div className="text-2xl text-center">
                        <span className="font-arial">2025</span>年<span className="font-arial">7</span>月リリース予定
                    </div>
                </div>
            </div>

            {/* メディア事業 Section */}
            <div className="max-w-screen-xl mx-auto mt-[3rem]">
                <h3 className="text-xl md:text-3xl text-center font-serif">メディア事業</h3>
                <div className="space-y-4 text-center mt-[3rem]">
                    <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center">
                        サウナ施設紹介メディア「ハマ｜サウナリーマン」を運営しています。（SNSフォロワー数<span className="font-arial">2.3</span>万人 ※<span className="font-arial">2025</span>年<span className="font-arial">2</span>月時点）
                    </p>
                    <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                        他にも、TikTokやXにて、サウナ付き宿泊施設紹介のアカウントも運営しております。（SNS総フォロワー数<span className="font-arial">4.2</span>万人 ※<span className="font-arial">2025</span>年<span className="font-arial">2</span>月時点）
                    </p>
                </div>
                <ClientShowcase cards={medias} />
            </div>
        </section>
    );
}



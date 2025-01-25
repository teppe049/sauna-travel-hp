import Image from "next/image"
import { FeatureCard } from "../components/Card/card"

const features = [
    {
        title: "企画",
        description: "ターゲット層が興味を持つようなインスタ映えする内容の投稿を企画します。",
        icon: "/planning.png",
    },
    {
        title: "アサイン・日程調整",
        description: "インフルエンサーさんのアサイン・日程調整をします。",
        icon: "/asign.png",
    },
    {
        title: "動画制作・修正",
        description:
            "店舗紹介動画の制作・コンプラのチェックを行います。",
        icon: "/edit.png",
    },
    {
        title: "動画投稿・運用",
        description:
            "インフルエンサーさんに動画投稿をしていただきます。",
        icon: "/upload.png",
    },
    {
        title: "成果測定",
        description:
            "成果結果レポートを作成し、お渡しいたします。",
        icon: "/analysis.png",
    },
]

export default function ServiceSection() {
    return (
        <div className="max-w-8xl mx-auto px-4 py-16 flex items-center justify-center">
            <div className="grid lg:grid-cols-1 gap-12">
                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                    ))}
                </div>
            </div>
        </div>
    );
}


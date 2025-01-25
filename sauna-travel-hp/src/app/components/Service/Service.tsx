import Image from "next/image"

export default function ServiceSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 space-y-32">
            <div className="space-y-2">
                <h2 className="text-neutral-950 font-bold font-serif text-3xl text-center">SERVICE</h2>
                <p className="text-md text-center text-neutral-600">事業内容</p>
            </div>

            {/* マーケティング支援 Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] bg-[#F5F9FF] rounded-lg p-8">
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-serif ">マーケティング支援事業</h3>
                    <div className="space-y-4">
                        <p className="text-sm leading-relaxed">サウナ × SNS マーケティング支援サービス</p>
                        <p className="text-sm leading-relaxed">
                            業界最安値で「認知拡大・集客増加」をご支援。企画から成果測定までを一気通貫でご提供する
                        </p>
                    </div>
                    <button className="px-8 py-2 border text-sm hover:bg-neutral-50 transition-colors rounded-md ">
                        詳しく見る
                    </button>
                </div>
            </div>

            {/* SHE WORKS Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-serif ">トラベル事業</h3>
                    <div className="space-y-4">
                        <p className="text-sm leading-relaxed">サウナ施設の検索・比較・予約を行える日本初サウナ専門の予約サイト</p>
                        <p className="text-sm leading-relaxed text-neutral-600">
                            予約機能を持つ、個室サウナ・アウトドアサウナ・サウナ付きホテル・サウナ付きコテージ/ヴィラなどの、日常使いをしない特別なサウナの予約が可能
                        </p>
                    </div>
                    <button className="px-8 py-2 border text-sm hover:bg-neutral-50 transition-colors rounded-md ">
                        詳しく見る
                    </button>
                </div>

                <div className="relative aspect-[4/3] bg-[#F5F9FF] rounded-lg p-8">
                </div>

            </div>
        </section>
    )
}


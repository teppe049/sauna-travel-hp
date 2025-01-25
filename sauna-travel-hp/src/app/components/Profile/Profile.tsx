export default function WhoWeAreSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
            {/* Header */}
            <div className="space-y-2 text-center">
                <h2 className="text-neutral-950 font-bold font-serif text-3xl">Who We Are</h2>
                <p className="text-md text-neutral-600">代表紹介</p>
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        className="border-8 border-cyan-450 rounded-lg max-w-xs lg:max-w-sm"
                        src="/introduction.jpg"
                        alt="代表写真"
                    // width={250}
                    // height={250}
                    />
                </div>

                {/* Text Section */}
                <div className="space-y-4 text-sm leading-relaxed">
                    <p>1998年7月6日生まれ。広島県呉市出身。</p>
                    <p>
                        2021年 東京理科大学 理工学部 応用生物科学科卒業<br />
                        2023年 東京大学大学院 新領域創成科学研究科 メディカル情報生命専攻 修了
                    </p>
                    <p>
                        2023年 外資系コンサルティング会社に、データアナリストとして新卒で入社。大学時代は、
                        体育会の少林寺拳法部に所属し、総勢39名の主将としてチーム運営を行う。全国大会への出場経験あり。
                    </p>
                    <p>
                        また、サウナ施設を紹介するSNSを立ち上げ、複数のサウナ施設のマーケティング支援に携わる。(現フォロワー数4.2万人)
                        入社後は、通信業界をメインに生成AIの新規事業開発や、PythonやSQLを用いての顧客分析案件に携わる。
                    </p>
                    <p className="font-bold">代表 濵中俊哉</p>
                </div>
            </div>
        </section>
    );
}

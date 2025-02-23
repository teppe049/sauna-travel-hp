interface InfoRowProps {
    label: string;
    value: string | string[] | React.ReactNode; // 文字列 or 配列
}


function InfoRow({ label, value }: InfoRowProps) {
    return (
        <div className="grid grid-cols-[130px_1fr] md:grid-cols-[200px_1fr] gap-6 md:gap-8 border-b border-gray-200 py-4 md:py-6 items-center">
            <dt className="text-sm md:text-base lg:text-lg text-gray-600 font-medium pl-2 md:pl-3">{label}</dt>
            <dd className="text-gray-800 text-sm md:text-base lg:text-lg">
                {Array.isArray(value) ? (
                    value.map((line, index) => (
                        <p key={index} className="mb-1">{line}</p>
                    ))
                ) : (
                    value
                )}
            </dd>
        </div>
    );
}

export default function CompanyInfo() {
    return (
        <div className="py-16 px-4 lg:px-40">
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="space-y-2">
                    <h2 className="text-neutral-950 font-bold text-3xl md:text-5xl text-center">About Us</h2>
                    <p className="text-base md:text-lg lg:text-xl text-center text-neutral-600">会社情報</p>
                </div>
                <div>
                    <InfoRow label="会社名" value="株式会社Sauna Travel" />
                    <InfoRow label="創業" value={<><span className="font-arial">2024</span>年<span className="font-arial">7</span>月<span className="font-arial">29</span>日</>} />
                    <InfoRow label="所在地" value="東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F-C" />
                    <InfoRow
                        label="事業内容"
                        value={[
                            "サウナ付き宿泊施設専門の予約サイト運営",
                            "SNSを活用したマーケティング支援"
                        ]}
                    />
                    <InfoRow label="資本金" value={<><span className="font-arial">1,000,000</span>円</>} />
                </div>
            </div>
        </div>
    );
}
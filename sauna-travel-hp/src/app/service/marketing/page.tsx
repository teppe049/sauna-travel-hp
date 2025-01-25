// app/service/marketing/page.tsx
import ServiceSection from "@/app/ServiceSection/service-section";
import React from "react";

export default function MarketingPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold font-serif text-center mt-20">マーケティング支援事業</h1>
            <p className="text-md text-center text-neutral-600 mt-4">
                具体的なサービス内容
            </p>

            <ServiceSection />

            <p className="text-md text-center text-neutral-600 mt-4">
                サービス事例
            </p>



        </div>
    );
}
interface FeatureCardProps {
    title: string
    description: string
    icon: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-8">
                <div className="w-36 h-36 flex-shrink-0">
                    <img src={icon || "/placeholder.svg"} alt="" className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex-1 py-4">
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">{title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                </div>
            </div>
        </div>
    )
}


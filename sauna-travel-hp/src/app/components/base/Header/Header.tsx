import Image from 'next/image';

export default function Header() {
    return (
        <header className="pl-4 py-2 fixed w-full bg-white shadow-sm z-50">
            <a href="/" >
                <Image src="/header.png"
                    alt="SaunaTravel"
                    width={150}
                    height={100}
                    priority
                />
            </a>
        </header>
    )

}

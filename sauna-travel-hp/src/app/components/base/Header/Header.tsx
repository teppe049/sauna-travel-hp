"use client";
import Image from 'next/image';
import Link from 'next/link';

const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

export default function Header() {
    return (
        <header className="pl-4 py-2 fixed w-full bg-white shadow-sm z-50">
            <Link
                href="/" >
                <Image src="/header.png"
                    alt="SaunaTravel"
                    width={150}
                    height={100}
                    priority
                />
            </Link>
        </header>
    )

}

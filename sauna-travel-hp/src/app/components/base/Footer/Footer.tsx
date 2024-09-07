import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <div className="relative flex flex-col items-center justify-center text-white overflow-hidden">
                <Image src="/header.png"
                    alt="SaunaTravel"
                    width={200}
                    height={150}
                    priority
                />
                <br />
                <p className="text-gray-400">© Sauna Travel. All Rights Reserved 2024</p>

            </div>
        </footer>
    );

}

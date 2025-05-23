'use client';
import { useRef } from "react"
import Image from "next/image";
import NewsList from "./components/News/NewsList";
import { News } from "./models/News";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { GET } from "./api/router";
import ServiceSection from "./components/Service/Service";
import ProfileSection from "./components/Profile/Profile";
import CompanyInfo from "./components/info/company-info";

const data: {
  contents: News[]
} = {
  contents: [
    {
      id: "1",
      title: "初めて記事作成",
      category: {
        name: "お知らせ"
      },
      pulishedAt: "2024/05/09"
    },
    {
      id: "2",
      title: "当社のCEOが",
      category: {
        name: "お知らせ"
      },
      pulishedAt: "2024/05/19"
    },
    {
      id: "3",
      title: "テスト記事ですテスト記事ですテスト記事ですテスト記事ですテスト記事ですテスト記事です",
      category: {
        name: "お知らせ"
      },
      pulishedAt: "2024/04/09"
    },
  ]
}

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null)
  const companyRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const fetchUser = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/users/1", {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("メール送信");

    let data = {
      name: nameRef.current?.value,
      company: companyRef.current?.value,
      email: emailRef.current?.value
    }

    console.log(data)

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("メース送信成功");
    });
  }
  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br to-[#345BA2] from-[#345BA2]">
        <div className="text-center space-y-8">
          <Image
            src="/logo-9.png"
            alt="Sauna Travel"
            width={320}
            height={320}
            className="opacity-90 mt-4 w-[220px] sm:w-[280px] md:w-[320px] h-auto"
          />
        </div>
      </section>

      {/* <section>
        <div>
          <h2 className="text-neutral-950 font-bold font-serif text-3xl text-center mb-[1rem]" >News</h2>
          <div className="text-center">
            <NewsList news={data.contents} />
          </div>

        </div>
      </section> */}

      <section className="relative flex items-center justify-center text-white overflow-hidden my-8 md:my-12 lg:my-16">
        <div className="px-4 lg:px-40">
          <div className="max-w-screen-xl mx-auto space-y-2">
            <h2 className="text-neutral-950 font-bold font-serif text-3xl md:text-5xl text-center">Vison</h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-neutral-600">私たちの展望</p>
          </div>

          <p className="text-neutral-900 text-sm md:text-lg lg:text-xl font-serif text-center my-[2rem]">
            人には熱が必要だ。<br />
            それはこの世界に存在する実感。<br />
            意思や行動の原点。<br />
            奇跡みたいな出会いをするための波長。<br />
            何かに夢中な人は、熱い。それがいつも、<br />
            世界をちょっとずつ変えてきた。<br />
            <br />
            そんな熱をもっと、世界中にともせたら。<br />
            日常も非日常も、人生はきっともっと、<br />
            心やからだが熱を帯びる、そんな瞬間にあふれてる。<br />
            <br />
            熱とつながろう。<br />
            サウナトラベルは、サウナを起点に、<br />
            世界中の熱と人をつなげます。<br />
            これまで熱を阻んできた、サウナと人を遠ざける壁も、<br />
            言葉にできなかった小さなモヤモヤも、<br />
            すべて取り払っていく。<br />
            <br />
            さあ、あなたのところまで。<br />
            <br />
            <p className="text-neutral-900 font-bold font-serif text-xl md:text-2xl lg:text-3xl text-center ">熱を解きはなつ。</p>
            <p className="font-bold font-serif text-4xl md:text-6xl lg:text-7xl text-center my-[2rem] text-[#345BA2]">Sauna Driven A to Z</p>
          </p>
        </div>
      </section>


      <section>
        <ServiceSection />
        {/* <ProfileSection /> */}
      </section>

      <section className="my-8 md:my-12 lg:my-16">
        <CompanyInfo />
      </section>



      <section className="py-16 my-8 md:my-12 lg:my-16 bg-[#f5f9ffd9]">
        <div>
          <div className="max-w-screen-xl mx-auto space-y-2 ">
            <h2 className="text-neutral-950 font-bold font-serif text-3xl md:text-5xl text-center">Contuct</h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-neutral-600 font-serif">お問い合わせ</p>
          </div>

          <div className="mt-10 space-y-4 text-center">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed font-serif">
              弊社へのお問い合わせは<br />
              こちらよりお願いいたします。
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed font-serif">
              ２営業日以内にご返信させていただきます。
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="relative flex flex-col items-center justify-center text-white overflow-hidden">
          <Image src="/logo-2.png"
            alt="SaunaTravel"
            width={80}
            height={100}
            priority
          />
          <br />
          <p className="text-gray-400">© Sauna Travel. All Rights Reserved 2024</p>

        </div>
      </footer>
    </>
  );
}



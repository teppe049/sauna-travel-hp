'use client';
import { useRef } from "react"
import Image from "next/image";
import NewsList from "./components/News/NewsList";
import { News } from "./models/News";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { GET } from "./api/router";
import ServiceSection from "./components/Service/Service";
import ProfileSection from "./components/Profile/Profile";

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
      <section className="relative flex items-center justify-center text-white overflow-hidden py-[200px]">
        <div>
          <p className="text-neutral-950 font-bold font-serif text-2xl text-center mb-[1rem]" >世界を熱する回路になるんだ。</p>
          <p className="text-neutral-950 font-bold font-serif text-6xl text-center mb-[2rem]" >Sauna Driven A to Z</p>
          <Image className="mx-auto" src="/img-logo.png" alt="" width={250} height={250} />
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

      <section className="relative flex items-center justify-center text-white overflow-hidden py-[150px]  bg-[#f5f9ffd9] ">
        <div className="px-4 lg:px-40">
          <p className="text-neutral-950 font-bold font-serif text-3xl text-center mb-[2rem]" >Vision</p>
          <p className="text-neutral-950 font-bold font-serif text-2xl text-center mb-[1rem]" >熱を解き放つんだ。</p>
          <p className="text-neutral-950 font-bold font-serif text-6xl text-center mb-[2rem]" >Sauna Driven A to Z</p>
          <p className="text-neutral-600 font-mono text-xl text-center mb-[2rem]">
            人には熱が必要だ。<br />
            それはこの世界に存在する実感<br />
            意思や行動の原点。奇跡みたいな出会いをするための、波長。<br />
            何かに夢中な人は、熱い。それがいつも<br />
            世界をちょっとずつ変えてきた。<br />
            <br />
            そんな熱をもっと、世界中うの人々にともせたら。<br />
            日常も非日常も、人生はきっともっと、<br />
            胸が高鳴る瞬間にあふれている。<br />
            <br />
            熱とつながろう<br />
            サウナトラベルは、サウナを起点に、<br />
            世界中の熱と人をつなげます。<br />
            熱を阻む障壁をなくせば、きっと今日は、もっとアツい。
            <br />
          </p>

        </div>
      </section>

      <section>
        <ServiceSection />
        {/* <ProfileSection /> */}
      </section>



      <section className="my-[100px] py-24 bg-[#f5f9ffd9]">
        <div>
          <h2 className="text-neutral-950 font-bold font-serif text-3xl text-center mb-[1rem]" >Contuct Us</h2>
          <p className="text-center py-4">弊社へのお問い合わせはこちらよりお願いいたします。<br />
            <br />
            ２営業日以内にご返信させていただきます。</p>
          <ContactForm />
        </div>
      </section>

      {/* <button onClick={fetchUser}>取得させてくださいよぉ〜＝
      </button> */}
    </>
  );
}



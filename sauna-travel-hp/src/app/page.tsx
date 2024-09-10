'use client';
import { useRef } from "react"
import Image from "next/image";
import { ContactForm } from "./pages/ContactForm";
import NewsList from "./components/News/NewsList";
import { News } from "./models/News";

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
          <h1 className="text-neutral-950 font-bold font-serif text-3xl text-center mb-[1rem]" >サウナを旅の主役にする</h1>
          <Image className="mx-auto" src="/img-logo.png" alt="" width={250} height={250} />
        </div>
      </section>

      <section>
        <div>
          <h2 className="text-neutral-950 font-bold font-serif text-3xl text-center mb-[1rem]" >News</h2>
          <div className="text-center">
            <NewsList news={data.contents} />
          </div>

        </div>
      </section>

      <section className="relative flex items-center justify-center text-white overflow-hidden py-[150px]">
        <div className="px-4 lg:px-40">
          <p className="text-neutral-950 font-bold font-serif text-3xl text-center mb-[2rem]" >Vision</p>
          <p className="text-neutral-950 font-bold font-serif text-4xl text-center mb-[2rem]" >サウナを旅の主役にする</p>
          <p className="text-neutral-950 font-sans text-base text-left mb-[2rem]">
            日本において、私たちが生まれてから今日に至るまでの期間は「失われた30年」と呼ばれ、希望も可能性も未来もないような暗い雰囲気が漂っています。<br />
            <br />
            しかし、私たちが日本全国を旅する中で、今まで知らなかっただけの、魅力的な土地や人、食事、自然などがたくさんありました。<br />
            <br />
            私たちはこうしたポテンシャルを秘めた「魅力」を「火種」と呼びます。<br />
            <br />
            そうした「火種」を大切に大きくしていく、そしてゆくゆくは「火種」を自らつくり出していく。
            これが、私たちのミッションです。<br />
            <br />
            全国各地で「火種」が生まれ続ければ、人の流動性が高まり、日本全体が明るく、アツくなると思っています。</p>

        </div>
      </section>

      <section className="mb-10">
        <div>
          <h2 className="text-neutral-950 font-bold font-serif text-3xl text-center mb-[150px]" >Who We Are</h2>
          <div className="lg:flex flex-row items-center px-4 lg:px-40px-40 ">
            <Image className="lg:mx-6 mx-auto border-8 border-cyan-450 rounded-lg" src="/introduction.jpg" alt="" width={250} height={250} />
            <p className="mt-4 lg:mt-0">
              1998年7月6日生まれ。広島県呉市出身。<br />
              2021年 東京理科大学 理工学部 応用生物科学科卒業<br />
              2023年 東京大学大学院 新領域創成科学研究科 メディカル情報生命専攻 修了<br />
              2023年 外資系コンサルティング会社に、データアナリストとして新卒で入社。<br />
              <br />
              大学時代は、体育会の少林寺拳法部に所属し、総勢39名の主将としてチーム運営を行う。全国大会への出場経験あり。<br />
              また、サウナ施設を紹介するSNSを立ち上げ、複数のサウナ施設のマーケティング支援に携わる。(現フォロワー数4.2万人)<br />
              入社後は、通信業界をメインに生成AIの新規事業開発や、PythonやSQLを用いての顧客分析案件に携わる。<br />
              <br />
              代表  濵中俊哉
            </p>
          </div>

        </div>
      </section>

      <section>
        <div>
          <div className="text-neutral-950 font-bold font-serif text-3xl text-center py-[200px]">Overview</div>
          <div className="">

          </div>

        </div>
      </section>

      <section className="my-[100px] py-24  bg-slate-100">
        <div>
          <h2 className="text-neutral-950 font-bold font-serif text-3xl text-center mb-[1rem]" >Contuct Us</h2>
          <p className="text-center py-4">弊社へのお問い合わせはこちらよりお願いいたします。<br />
            <br />
            ２営業日以内にご返信させていただきます。</p>
          <form className="px-4 max-w-[600px] mx-auto" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex justify-start items-center w-full gap-[24px]">
              <div className="flex flex-col flex-1 py-2 px-0">
                <label className="text-sm" htmlFor="fullname">
                  お名前
                </label>
                <input className="border-2 border-t-zinc-300 border-solid rounded-md p-2 leading-[1.5] w-full" type="text" id="lastname" name="lastname" required ref={nameRef} />
              </div>
            </div>
            <div className="flex justify-start items-center w-full gap-[24px]">
              <div className="flex flex-col flex-1 py-2 px-0">
                <label htmlFor="companyname">
                  会社名
                </label>
                <input className="border-2 border-t-zinc-300 border-solid rounded-md p-2 leading-[1.5] w-full" type="text" id="companyname" name="companyname" required ref={companyRef} />
              </div>
            </div>
            <div className="flex justify-start items-center w-full gap-[24px]">
              <div className="flex flex-col flex-1 py-2 px-0">
                <label htmlFor="mailaddress">
                  メールアドレス
                </label>
                <input className="border-2 border-t-zinc-300 border-solid rounded-md p-2 leading-[1.5] w-full" type="text" id="mailaddress" name="mailaddress" required ref={emailRef} />
              </div>
            </div>
            <div className="flex justify-start items-center w-full gap-[24px]">
              <div className="flex flex-col flex-1 py-2 px-0">
                <label htmlFor="phonenumber">
                  電話番号
                </label>
                <input className="border-2 border-t-zinc-300 border-solid rounded-md p-2 leading-[1.5] w-full" type="text" id="phonenumber" name="phonenumber" />
              </div>
            </div>
            <div className="flex justify-start items-center w-full gap-[24px]">
              <div className="flex flex-col flex-1 py-2 px-0">
                <label htmlFor="message">
                  お問い合わせ内容
                </label>
                <input className="border-2 border-t-zinc-300 border-solid rounded-md p-2 leading-[1.5] w-full h-72" name="message" id="message" />
              </div>
            </div>
            <div className="text-center mt-10">
              <input className="border-none bg-slate-900 py-4 px-10 text-base rounded text-gray-50 cursor-pointer" type="submit" value="送信する" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}



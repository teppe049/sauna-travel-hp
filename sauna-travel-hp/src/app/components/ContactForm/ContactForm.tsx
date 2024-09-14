'use client';
import { useRef } from "react"



export function ContactForm() {
    const nameRef = useRef<HTMLInputElement>(null)
    const companyRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLInputElement>(null)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("メール送信");

        let data = {
            name: nameRef.current?.value,
            company: companyRef.current?.value,
            email: emailRef.current?.value,
            phone: phoneRef.current?.value,
            content: contentRef.current?.value
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
            <form className="max-w-[600px] mx-auto" onSubmit={(e) => handleSubmit(e)}>
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
                        <input className="border-2 border-t-zinc-300 border-solid rounded-md p-2 leading-[1.5] w-full" type="text" id="phonenumber" name="phonenumber" required ref={phoneRef} />
                    </div>
                </div>
                <div className="flex justify-start w-full gap-[24px]">
                    <div className="flex flex-col flex-1 py-2 px-0">
                        <label htmlFor="message">
                            お問い合わせ内容
                        </label>
                        <textarea
                            className="border-2 border-t-zinc-300 border-solid rounded-md p-2 w-full h-72 resize-none"
                            name="message"
                            id="message"
                            required
                            ref={contentRef}
                        />
                    </div>
                </div>
                <div className="text-center mt-10">
                    <input className="border-none bg-slate-900 py-4 px-10 text-base rounded text-gray-50 cursor-pointer" type="submit" value="送信する" />
                </div>
            </form>
        </>
    )
}
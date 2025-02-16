'use client';
import { createContactData } from "@/app/_actions/contact";
import { useRef, useState } from "react"

export function ContactForm() {
    const [state, setState] = useState<{ status: string; message?: string }>({
        status: 'idle', // 初期状態
    });

    const [errorMessage, setErrorMessage] = useState<string | null>(null); // エラーメッセージを管理する状態

    const nameRef = useRef<HTMLInputElement>(null);
    const companyRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null); // 修正: textarea は input ではなく TextAreaElement

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("メール送信");

        // フォームデータの収集
        let data = {
            name: nameRef.current?.value,
            company: companyRef.current?.value,
            email: emailRef.current?.value,
            phone: phoneRef.current?.value,
            content: contentRef.current?.value,
        };

        // createContactData を使用してバリデーションを実行
        const validationResult = await createContactData({}, new FormData(e.currentTarget));

        if (validationResult.status === "error") {
            setErrorMessage(validationResult.message)
            return;
        }

        // バリデーションに成功したらエラーメッセージをクリア
        setErrorMessage(null);

        // ここに書くのが適切ではないが、画面を即座に切り替えるためにここに記述している
        setState({ status: "success" });

        // バリデーションに成功したらメール送信処理
        await fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                console.log("メール送信成功");
            } else {
                setErrorMessage("メール送信に失敗しました。");
            }
        }).catch(() => {
            setErrorMessage("メール送信に失敗しました。");
        });
    };

    if (state.status === "success") {
        // メール送信成功後に表示するメッセージ
        return (
            <p className="bg-slate-400 text-center p-10 rounded">
                お問い合わせいただき、ありがとうございます。
                <br />
                お返事まで今しばらくお待ちください。
            </p>
        );
    } else {
        return (
            <div className="px-4 lg:px-40">
                <form className="max-w-3xl mx-auto p-4 sm:p-6" onSubmit={(e) => handleSubmit(e)} >
                    <div className="flex flex-col gap-6 md:gap-8">
                        <div className="flex flex-col">
                            <label className="text-sm md:text-base text-gray-700" htmlFor="fullname">
                                お名前
                            </label>
                            <input className="border-2 border-gray-300 rounded-md p-3 text-sm md:text-base leading-[1.5] w-full" type="text" id="name" name="name" ref={nameRef} />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm md:text-base text-gray-700" htmlFor="companyname">
                                会社名
                            </label>
                            <input className="border-2 border-gray-300 rounded-md p-3 text-sm md:text-base leading-[1.5] w-full" type="text" id="companyname" name="companyname" ref={companyRef} />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm md:text-base text-gray-700" htmlFor="mailaddress">
                                メールアドレス
                            </label>
                            <input className="border-2 border-gray-300 rounded-md p-3 text-sm md:text-base leading-[1.5] w-full" type="email" id="mailaddress" name="mailaddress" ref={emailRef} />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm md:text-base text-gray-700" htmlFor="phonenumber">
                                電話番号
                            </label>
                            <input className="border-2 border-gray-300 rounded-md p-3 text-sm md:text-base leading-[1.5] w-full" type="tel" id="phonenumber" name="phonenumber" ref={phoneRef} />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm md:text-base text-gray-700" htmlFor="message">
                                お問い合わせ内容
                            </label>
                            <textarea
                                className="border-2 border-gray-300 rounded-md p-3 text-sm md:text-base w-full h-48 md:h-64 resize-none"
                                name="message"
                                id="message"
                                ref={contentRef}
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 bg-red-100 p-3 rounded text-center">
                                {errorMessage}
                            </p>
                        )}

                        <div className="text-center mt-8">
                            <input className="border-none bg-slate-900 py-3 px-8 md:py-4 md:px-10 text-sm md:text-lg rounded text-white cursor-pointer" type="submit" value="送信する" />
                        </div>
                    </div>
                </form>
            </div>
        );

    }
}

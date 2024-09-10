export function ContactForm() {
    return (
        <>
            <form className="max-w-[600px] mx-auto px-4">
                <div className="flex justify-start items-center w-full gap-[24px]">
                    <div className="flex flex-col flex-1 py-2 px-0">
                        <label className="text-sm" htmlFor="fullname">
                            お名前
                        </label>
                        <input className="border-2 border-t-zinc-300 border-solid rounded-md p-2 leading-[1.5] w-full" type="text" id="lastname" name="lastname" />
                    </div>
                </div>
                <div className="flex justify-start items-center w-full gap-[24px]">
                    <div className="flex flex-col flex-1 py-2 px-0">
                        <label htmlFor="companyname">
                            会社名
                        </label>
                        <input className="border-2 border-t-zinc-300 border-solid rounded-md p-2 leading-[1.5] w-full" type="text" id="companyname" name="companyname" />
                    </div>
                </div>
                <div className="flex justify-start items-center w-full gap-[24px]">
                    <div className="flex flex-col flex-1 py-2 px-0">
                        <label htmlFor="mailaddress">
                            メールアドレス
                        </label>
                        <input className="border-2 border-t-zinc-300 border-solid rounded-md p-2 leading-[1.5] w-full" type="text" id="mailaddress" name="mailaddress" />
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
        </>
    )
}
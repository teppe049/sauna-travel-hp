import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();  // リクエストのボディからJSONデータを取得

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.GMAILUSER,
                pass: process.env.GMAILPASSWORD,
            },
        });

        const toHostMailData = {
            from: body.email,
            to: "konnichihunting@gmail.com", // 送信先
            subject: `【お問合せ】${body.company} ${body.name}様より`, // タイトル
            text: `${body.company} Send from ${body.email}`,
            html: `
            <p>【名前】</p>
            <p>${body.name}様</p>
            <p>【会社名】</p>
            <p>${body.company}</p>
            <p>【メールアドレス】</p>
            <p>${body.email}</p>
            <p>【電話番号】</p>
            <p>${body.phone}</p>
            <p>【お問い合わせ内容】</p>
            <p>${body.content}</p>
            `,
        };

        await transporter.sendMail(toHostMailData);
        return NextResponse.json({ message: "メール送信成功" });
    } catch (error) {
        console.error("メール送信エラー:", error);
        return NextResponse.json({ message: "メール送信失敗" }, { status: 500 });
    }
}

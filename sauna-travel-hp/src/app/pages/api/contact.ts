import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASSWORD,
        },
    });

    const toHostMailData = {
        from: req.body.email,
        to: "konnichihunting@gmail.com", // 送信先
        subject: `【お問合せ】${req.body.name}様より`, // タイトル
        text: `${req.body.company} Send from ${req.body.email}`,
        html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【会社名】</p>
        <p>${req.body.company}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        `,
    };

    transporter.sendMail(toHostMailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
}
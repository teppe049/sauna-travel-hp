"use server";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}


export async function createContactData(_prevState: any, formData: FormData) {
    // formのname属性ごとにformData.get()で値を取り出すことができる
    const rawFormData = {
        name: formData.get("name") as string,
        company: formData.get("companyname") as string,
        email: formData.get("mailaddress") as string,
        message: formData.get("message") as string,
    };

    console.log(rawFormData)

    if (!rawFormData.name) {
        return {
            status: "error",
            message: "名前を入力してください",
        };
    }
    if (!rawFormData.company) {
        return {
            status: "error",
            message: "会社名を入力してください",
        };
    }
    if (!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください",
        };
    }
    if (!validateEmail(rawFormData.email)) {
        return {
            status: "error",
            message: "メールアドレスの形式が誤っています",
        };
    }
    if (!rawFormData.message) {
        return {
            status: "error",
            message: "メッセージを入力してください",
        };
    }

    return { status: "success", message: "OK" };
}
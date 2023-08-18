import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        console.log("==============================================", reqBody);
        const emailResponse = await sendEmail(reqBody);
        console.log("Email sent:", emailResponse.response);

        return NextResponse.json({
            message: "Email sent",
            data: request.body,
        });
    } catch (error: any) {
        console.error("Error sending email:", error.message);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}

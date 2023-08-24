import { NextResponse } from "next/server";

export async function GET() {
    try {
        const token = ""

        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,

        })
        console.log('logout:=>', response.headers)
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

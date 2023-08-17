import { NextResponse } from "next/server";
export async function GET() {
    try {
        // console.log('logging out')
        const response = NextResponse.json({
            message: 'Logout successfully',
            success: true,
        })
        response.cookies.set("token", "", {
            httpOnly: true,

        })
        // console.log(response)
        return response
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}
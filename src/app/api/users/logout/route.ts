import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: 'Logout successfully',
            success: true,
        });

        // Clear the "token" cookie by setting its value to an empty string
        response.cookies.set("token", "", { expires: new Date(Date.now()) });

        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

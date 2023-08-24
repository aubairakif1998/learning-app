import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest,) {

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId }).select("-password");
        if (!user) {
            const response = NextResponse.json({
                message: 'cookies refereshed',
                success: true,
            });

            // Clear the "token" cookie by setting its value to an empty string
            response.cookies.delete("token");

        }
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

}
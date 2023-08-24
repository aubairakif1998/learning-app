import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(request: NextRequest,) {

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId }).select("-password");
        if (user === null) {
            const token = ""
            console.log('USER DATA', user)

            const response = NextResponse.json({
                message: "cookies refereshed",
                success: true,
                data: null
            })
            return response.cookies.delete("token")
            // Clear the "token" cookie by setting its value to an empty string
            //response.cookies.set("token", "", { expires: new Date(Date.now()) });

        }
        else {
            return NextResponse.json({
                mesaage: "User found",
                data: user
            })
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

}
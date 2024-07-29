import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const apikey = process.env.OPENWEATHERMAP_API_KEY;
        const lat = 32.7157;
        const lon = -117.1611;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;

        const res = await axios.get(url);

        return NextResponse.json(res.data);
    } catch (error) {
        console.log("Error fetching forecast data");

        return new Response("Error fetching forecast data", {status: 500});
    }
}
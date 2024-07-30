import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const apikey = process.env.OPENWEATHERMAP_API_KEY;
        const lat = 32.7157;
        const lon = -117.1611;

        const dailyurl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;

        const dailyRes = await fetch(dailyurl, {
            next: {revalidate: 3600},
        });

        const dailyData = await dailyRes.json();

        return NextResponse.json(dailyData);
    } catch (error) {
        console.log("Error in getting daily data");
        return new Response("Error in getting daily data", { status: 500 });
    }
}
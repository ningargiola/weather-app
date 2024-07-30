import { NextResponse } from "next/server";

export async function GET(req: NextResponse) {
    try {
        const lat = 32.7157;
        const lon = -117.1611;
        
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&lojgitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

    } catch (error) {

    }
}

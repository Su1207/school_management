import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";

export async function GET() {
  try {
    const db = await connectDB();
    const [rows] = await db.query(
      "SELECT id, name, address, city, image FROM schools ORDER BY id DESC"
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.error("Error in getSchools API:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

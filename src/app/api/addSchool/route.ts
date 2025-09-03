import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const contact = formData.get("contact") as string;
    const email = formData.get("email") as string;
    const image = formData.get("image") as File;

    if (!name || !address || !city || !state || !contact || !email || !image) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    // Save image
    const buffer = Buffer.from(await image.arrayBuffer());
    const uploadDir = path.join(process.cwd(), "public", "schoolImages");
    await fs.mkdir(uploadDir, { recursive: true });

    const fileName = `${Date.now()}-${image.name.replace(/\s+/g, "_")}`;
    const filePath = path.join(uploadDir, fileName);
    await fs.writeFile(filePath, buffer);

    const imagePath = `/schoolImages/${fileName}`;

    // DB Insert
    const db = await connectDB();
    await db.execute(
      `INSERT INTO schools (name, email, address, city, state, contact, image) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, address, city, state, contact, imagePath]
    );

    return NextResponse.json(
      { message: "School added successfully!" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error in addSchool API:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

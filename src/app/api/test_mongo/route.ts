import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";

export async function GET() {
  try {
    const connection = await dbConnect(); // Returns mongoose.Connection

    if (!connection.db) {
      throw new Error("Database connection is not established yet.");
    }

    const collections = await connection.db.listCollections().toArray(); // Get collections

    return NextResponse.json({ success: true, collections });
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    return NextResponse.json(
      { success: false, error: "Database connection failed" },
      { status: 500 }
    );
  }
}

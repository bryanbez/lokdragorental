import { fetchAll } from "@/app/lib/dbqueries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await fetchAll();

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}

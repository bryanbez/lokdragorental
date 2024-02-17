import { filterFetch } from "@/app/lib/dbqueries";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { params } = context;

  if (!params.isRented) {
    return NextResponse.status(400).json({
      message: "Rent Status is required",
    });
  }
  try {
    const result = await filterFetch(params.isRented);

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(err);
  }
}

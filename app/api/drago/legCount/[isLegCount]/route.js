import { filterByLegCount } from "@/app/lib/dbqueries";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { params } = context;

  if (!params.isLegCount) {
    return NextResponse.status(400).json({
      message: "Rent Status is required",
    });
  }
  try {
    const result = await filterByLegCount(params.isLegCount);

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(err);
  }
}

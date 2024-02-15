import { fetchSingle } from "@/app/lib/dbqueries";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  // need context is in second params to work
  const { params } = context;
  try {
    const result = await fetchSingle(params.dragoId);

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(err);
  }
}

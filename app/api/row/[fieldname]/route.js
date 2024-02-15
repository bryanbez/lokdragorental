import { fetchFieldName } from "@/app/lib/dbqueries";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  // need context is in second params to work
  const { params } = context;
  //return NextResponse.json(params.fieldname);

  const result = await fetchFieldName(params.fieldname);

  if (result.length !== 0) {
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ message: "FieldName not found" });
  }
}

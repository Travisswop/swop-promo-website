import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.CALENDLY_API_TOKEN;
  const user = process.env.CALENDLY_USER_UUID;

  if (!token || !user) {
    return NextResponse.json(
      { error: "Missing CALENDLY_API_TOKEN or CALENDLY_USER_UUID" },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({ user });
  const url = `https://api.calendly.com/scheduled_events?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.title || response.statusText || "Calendly request failed" },
        { status: response.status }
      );
    }

    return NextResponse.json({ collection: data?.collection || [] });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}

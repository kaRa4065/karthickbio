import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please fill in all fields." },
        { status: 400 },
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "I got your message. I’ll contact you soon." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

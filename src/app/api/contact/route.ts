import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = body;

        // Validation
        if (!name || !email || !phone || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields.", missing: Object.keys(body).filter(k => !body[k]) },
                { status: 400 }
            );
        }

        // Server-side email handling configuration check
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.warn("Email variables missing! Request data was:", { name, email, phone, subject, message });

            return NextResponse.json(
                {
                    error: "Email service is not configured on the server.",
                    details: "Missing SMTP credentials in .env file.",
                    adminEmail: "winkeyecare20@gmail.com"
                },
                { status: 500 }
            );
        }

        // E.g. Send to "winkeyecare20@gmail.com" via Nodemailer or Resend...
        // Insert actual mailer dispatch logic here once SMTP config is defined by the user.

        return NextResponse.json(
            { success: true, message: "Thank you for contacting Wink Eye Care. We will follow up with you shortly." },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error", details: (error as Error).message },
            { status: 500 }
        );
    }
}

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import { ContactEmail } from '@/app/components/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { email, name, message, phone } = await req.json();

    const contactEmail = process.env.CONTACT_EMAIL;
    const formEmail = process.env.FROM_EMAIL;

    if (!contactEmail) {
      return NextResponse.json({ error: 'No contact email provided' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: `La cave de Meursault <${formEmail}>`,
      to: [contactEmail],
      subject: 'Nouvelle prise de contact',
      text: '',
      react: ContactEmail({ email, name, message, phone })
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  }
}

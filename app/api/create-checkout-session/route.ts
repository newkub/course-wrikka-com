import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'thb',
            product_data: {
              name: 'แพ็คเกจตลอดชีพ',
              description: 'เรียนได้ตลอดชีพ ไม่มีวันหมดอายุ',
            },
            unit_amount: 480000, // 4,800 THB in smallest currency unit (satang)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/pricing`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
}

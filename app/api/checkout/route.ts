import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { CartItem } from '@/lib/store/cartStore';

export async function POST(req: Request) {
  try {
    const { items } = await req.json() as { items: CartItem[] };

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH', 'LU', 'MC'],
      },
      phone_number_collection: {
        enabled: true,
      },
      line_items: items.map((item) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
            images: item.image ? [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://hantaprotect.fr'}${item.image}`] : [],
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Error in checkout route:', err);
    return NextResponse.json(
      { error: err.message || 'An error occurred during checkout' },
      { status: 500 }
    );
  }
}

# GLP1

GlucoBoost GLP-1 sales funnel with complete checkout flow and Authorize.Net payment processing.

## Structure

- `index.html` - Redirects to main landing page
- `glp-clone.html` - Main landing page with order form
- `public/checkout.html` - Multi-package checkout with order bump
- `public/thank-you.html` - Initial thank you page with upsell offer
- `public/upsell-1.html` - Upsell page with countdown timer
- `public/thank-you-final.html` - Final confirmation page
- `api/charge.js` - Payment processing endpoint
- `api/config.js` - Public configuration endpoint

## Setup

1. Copy `.env.example` to `.env`
2. Add your Authorize.Net credentials
3. Deploy to Vercel

## Environment Variables

- `AUTHNET_API_LOGIN_ID` - Your Authorize.Net API Login ID
- `AUTHNET_TRANSACTION_KEY` - Your Authorize.Net Transaction Key
- `AUTHNET_PUBLIC_CLIENT_KEY` - Your Authorize.Net Public Client Key

## Deploy

```bash
vercel

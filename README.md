# KingzWithWaves(KWW) - E-Commerce Web App

## DESCRIPTION
This is a full-stack web application built with NEXTJS, TailwindCSS and Sanity.<br>
This App has two User Interfaces: <br>
The __merchant__ interface- to manage the products and contents(blog) <br>
The __customer__ interface- to order items and read blogs <br>

__Sanity__ is a powerful tool that provides:
- Database management sytem.
- Query system (GROQ; similar to GraphQL).
- Management UI that is fully customizeable.

__NextJS__ is a technology or framework built on ReactJs that provides:
- Client and Server Side rendering
- Static routing 
- Highly maintainable code structure

__Paystack API__ is a payment gateway for easy payment in Nigeria

## FEATURES
- Product and Content management system for Merchant.
- User-Interface for Customer to order items and read blogs.
- Category List to display items
- Cart system to add items to be ordered.
- Payment gateway with paystripe
- Email system for order notification and contact system.
- Server-side rendering and Image optimizations for quick load time.

## INSTALLATION GUIDE
1. Go ahead and clone this repo to your local machine.
2. Make sure you have node installed.
3. On your command line type and run `npm install` to install all dependencies.
4. This project uses some environment variables so create a __.env__ file
5. When done creating your .env file, you environment variables would contain your Sanity configurations
   Create a new project on Sanity, the instruction for that is out of the scope of this, but the instrucitons sanity gives in the doc is pretty easy.
6. Now in your __.env__ file; ADD the following variables <br>
   __SANITY_TOKEN__ is your sanity token <br>
   __NEXT_PUBLIC_KEY__ is your paystack public key <br>
7. now in the root folder RUN `npm run dev`
8. Navigate to the __kww__ subfolder and RUN `sanity start` to whip up your local server for sanity

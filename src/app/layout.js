import { Inter } from "next/font/google";
import "../assets/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Property Pulse",
  description: "Created by Raul Nascimento using Next.js and Tailwind CSS.",
  keywords: [
    "Real Estate",
    "Property",
    "House",
    "Apartment",
    "Rent",
    "Buy",
    "Sell",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

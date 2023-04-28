import { CartProvider } from "./context/cart";
import { TogglerProvider } from "./context/toggler";
import "./globals.css";
import { Blinker } from "next/font/google";

const blinker = Blinker({
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-blinker",
});

export const metadata = {
  title: "Raouf Store",
  description:
    "eCommerce website that minimalistic and simple design lifestyle enthusiasts can buy from",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TogglerProvider>
      <CartProvider>
        <html lang="en" className="scroll-smooth">
          <body className={`${blinker.className}`}>{children}</body>
        </html>
      </CartProvider>
    </TogglerProvider>
  );
}

import { TogglerProvider } from "./context/toggler";
import "./globals.css";

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
      <html lang="en">
        <body>{children}</body>
      </html>
    </TogglerProvider>
  );
}

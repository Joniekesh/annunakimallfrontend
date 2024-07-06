import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Montserrat,
  Roboto,
  Raleway,
  Lato,
  League_Spartan,
} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import Menu from "@/components/menu/Menu";

const inter = League_Spartan({ subsets: ["latin"] });
// const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annunaki Mall",
  description: "Shop for your affordable and high quality products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
      <Toaster richColors position="top-right" />
    </html>
  );
}

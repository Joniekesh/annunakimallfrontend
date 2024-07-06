import type { Metadata } from "next";
import React from "react";

// import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Multivendor Admin Dashboard",
  description: "Multivendor Admin Dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <Toaster richColors position="top-right" /> */}
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.truckgearauto.co.zw"),
  title: "TGA Truck Gear Autoparts | Shacman Parts Zimbabwe",
  description:
    "Zimbabwe and Southern Africa heavy-duty truck spares supplier for Shacman, Cummins, Weichai, Wabco, Fleetguard and Hande Axle.",
  openGraph: {
    title: "TGA Truck Gear Autoparts",
    description:
      "Reliable Shacman parts and accessories for reliable trucks in Zimbabwe.",
    images: ["/brand/tga-flyer.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

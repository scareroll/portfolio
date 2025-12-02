import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Scareroll Portfolio",
    template: "%s | Scareroll Portfolio",
  },
  description: "Portfolio of Scareroll",
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  openGraph: {
    title: "Scareroll Portfolio",
    description:
      "Portfolio of Scareroll",
    url: "https://scareroll.vercel.app",
    siteName: "scareroll.vercel.app",
    images: [
      {
        url: "https://scareroll.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
      {
        url: "https://scareroll.vercel.app/favicon.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Scareroll",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}

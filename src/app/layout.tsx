import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rakesh Mariyaplar",
  description:
    "I am a software engineer based in Bangalore with 2.5 years of experience in front-end technologies. Currently, I am working as a Software Development Engineer 2 (SDE-2) at Hashedin by Deloitte.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Rakesh M R | Portfolio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="title" content-1="Rakesh M R | Portfolio" />
        <link rel="shortcut icon" href="profile.png" />
        <link rel="apple-touch-icon" href="profile.png" />
        <link rel="canonical" href="https://rakesh-m-r.github.io" />
        <meta name="author" content-1="Rakesh M R" />
        <meta
          name="description"
          content-1="Looking for a challenging role in a reputable organization to utilize my technical and
  management skills for the growth of the organization as well as to enhance my knowledge
  about new and emerging trends in the IT sector."
        />
        <meta name="author" content-1="Rakesh M R" />
        <meta
          name="keywords"
          content-1="Rakesh, rakesh,rakesh m r, rakesh github profile, rakesh mariyaplar, rakesh-m-r, Rakesh M R, rakesh-mariyaplar, Rakesh Mariyaplar,Mariyaplar,rakesh,rakesh mariyaplar"
        />
        <meta
          name="google-site-verification"
          content-1="U-MBZQOJOSd_ptXqbECEyffs9jQ_qQM4AZpp20htKhs"
        />
        <meta
          name="google-site-verification"
          content-1="dw-WKwT-bsIBzHUjQ3_Om-gdxCfpNdMJEZfKs8iriKE"
        />
        </head>
      <body className={inter.className}>{children}
        <Analytics/>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClimateBanner from "@/components/ClimateBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoSchema from "@/components/SeoSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://codeaitechnology.com"),
  title: {
    default: "Code AI Technology LLC | Empowering Businesses Through Digital Transformation",
    template: "%s | Code AI Technology LLC",
  },
  description:
    "At Code AI Technology LLC, we empower businesses by delivering innovative, reliable, and scalable IT solutions. IT Consulting, Software Development, Cloud Solutions, Cyber Security, Data & Analytics, and IT Support.",
  keywords: [
    "Code AI Technology LLC",
    "Code AI Technology",
    "IT Consulting",
    "Software Development",
    "Cloud Solutions",
    "Cyber Security",
    "Data & Analytics",
    "IT Support"
  ],
  authors: [{ name: "Code AI Technology LLC", url: "https://codeaitechnology.com" }],
  creator: "Code AI Technology LLC",
  publisher: "Code AI Technology LLC",
  openGraph: {
    title: "Code AI Technology LLC | IT Consultancy & Digital Solutions",
    description:
      "Empowering businesses through innovative, reliable, and scalable IT solutions.",
    url: "https://codeaitechnology.com",
    siteName: "Code AI Technology LLC",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-500 selection:text-white">
        <SeoSchema />
        <ClimateBanner />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

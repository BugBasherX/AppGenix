import { Domine, Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import LenisScroll from "@/components/lenis";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const domine = Domine({
    variable: "--font-domine",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://appgenix.vercel.app/"),
    title: {
        default: "AppGenix - Build custom apps with AI",
        template: "%s | AppGenix - Build custom apps with AI",
    },

    description:
        "Turn your ideas into production-ready web apps using AI. No code, no design skills needed — just describe what you want and launch instantly.",

    keywords: ["AI app builder", "no code app builder", "build apps with AI", "SaaS landing page", "AI website generator", "AI startup builder",],
    appleWebApp: {
        title: "AppGenix",
    },
    openGraph: {
        title: "Build custom apps with AI",
        description:
            "Create custom web apps by describing your idea in plain English. Launch faster with an AI-powered no-code builder.",
        url: "https://appgenix.vercel.app/",
        siteName: "Build custom apps with AI",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Crisp from "@/components/crisp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annotate - Paint on any Screen or app",
  description: "A simple annotation tool that is powerful to crete annotations on any screen or app.",
  openGraph: {
    title: "Annotate, A screen annotation tool for mac and windows",
    description:
      "Annotate is a Mac and windows app that helps you annotate screen or an app",
    url: "https://annotateapp.com",
    siteName: "Annotate Mac and windows app",
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@achuth_hadnoor",
    creator: "@achuth_hadnoor",
  },
  metadataBase: new URL("https://annotateapp.com"),
};
export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <main className="flex-col mx-auto max-w-5xl px-2 gap-24 mb-24 md:mb-0">

          <header className="mb-8 flex flex-col md:flex-row items-center justify-between py-4 gap-8 md:gap-2 ">
            <span> Annotate </span>
            <div className="flex items-center gap-4 md:p-2 px-4 py-2 bg-neutral-900/80 rounded-full md:bg-transparent text-xs md:text-md">
              <a href="#" className="p-2">Feedback</a>
              <a href="#" className="p-2">Changelog</a>
              <a href="#" className="p-2">Pricing</a>
              <button className="hidden md:inline-block rounded bg-indigo-900 px-4 py-2">Download Now</button>
            </div>
          </header>
          {children}
          <Crisp />
          <a href="https://www.producthunt.com/posts/annotate-6?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-annotate&#0045;6" target="_blank" className="fixed right-24 bottom-5"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=435552&theme=neutral" alt="Annotate - Menubar&#0032;app&#0032;to&#0032;draw&#0032;on&#0032;any&#0032;app&#0032;or&#0032;screen&#0032;on&#0032;macOS | Product Hunt" width="250" height="54" /></a>
        </main>
      </body>
    </html >
  );
}

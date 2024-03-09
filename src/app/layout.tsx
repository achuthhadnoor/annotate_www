import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Crisp from "@/components/crisp";
import Image from "next/image";
import Link from "next/link";

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
            <Link href={'/'}>
              <Image
                src="/favicon-180.png"
                alt="leaf-left"
                height={50}
                width={50}
              /> </Link>
            <div className="flex items-center gap-4 md:p-2 px-4 py-2 bg-neutral-900/80 rounded-full md:bg-transparent text-xs md:text-md">
              <a href="https://achuth.notion.site/Changelog-cf1aea338e454e1888b362d00c5be39f?pvs=4" className="p-2">Changelog</a>
              <Link href="/pricing" className="p-2">Pricing</Link>
              <button className="hidden md:inline-block rounded bg-indigo-900 px-4 py-2">Download Now</button>
            </div>
          </header>
          {children}
          <section
            className=" mx-auto mt-24 flex max-w-6xl  flex-col items-center justify-center gap-10 py-5"
            id="download"
          >
            <div className="flex flex-col items-center p-2">
              <Image
                src={"/favicon-180.png"}
                alt={"Screen recording"}
                width={70}
                height={70}
                blurDataURL="data:..."
              />
              <div className="my-12 mt-2 text-center text-xl font-bold">
                Annotate.app
              </div>
              <span className="text-xs text-neutral-500">macOS 10.15+ Intel, Apple Silicon and Windows</span>
              <div>⭐⭐⭐⭐⭐ 5.0 Based on User Review</div>
              <div className="mt-5 flex flex-col items-center justify-center gap-2 md:flex-row">
                {/* <Timer type="horizontal" /> */}
                <a
                  href={`https://github.com/achuthhadnoor/annotate_www/releases/latest`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 align-middle text-black">
                      <span className="flex">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.4656 13.3437C18.4375 10.4637 20.8134 9.08218 20.9219 9.01331C19.5853 7.05996 17.5036 6.79179 16.7627 6.76048C14.9919 6.58101 13.3078 7.8029 12.4083 7.8029C11.513 7.8029 10.1242 6.78657 8.65709 6.81266C6.72565 6.84292 4.94551 7.93542 3.95109 9.66443C1.9466 13.1433 3.43979 18.2991 5.39419 21.1237C6.34792 22.5042 7.48842 24.0558 8.98266 23.9985C10.4237 23.9421 10.9673 23.0677 12.7078 23.0677C14.4493 23.0677 14.9377 23.9985 16.4622 23.9703C18.0107 23.9432 18.9936 22.5637 19.9411 21.178C21.0388 19.5742 21.4896 18.0236 21.5167 17.9433C21.4812 17.9266 18.4959 16.7829 18.4656 13.3437Z"
                            fill="black"
                          ></path>
                          <path
                            d="M15.7876 3.83263C16.6255 2.8163 17.191 1.40658 17.0376 0C15.8303 0.0490426 14.3674 0.802421 13.5013 1.81666C12.725 2.71613 12.0457 4.15089 12.2273 5.53138C13.5744 5.63573 14.9486 4.84583 15.7876 3.83263Z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">Download for </span>
                        <span className="font-semibold">macOS</span>
                      </div>
                    </div>
                    <div className="mt-2 p-1 text-sm text-gray-500">
                      macOS 10.13 or higher
                    </div>
                  </div>
                </a>
                <a
                  href={`https://github.com/achuthhadnoor/annotate_www/releases/latest`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 align-middle text-black">
                      <span className="flex">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.4656 13.3437C18.4375 10.4637 20.8134 9.08218 20.9219 9.01331C19.5853 7.05996 17.5036 6.79179 16.7627 6.76048C14.9919 6.58101 13.3078 7.8029 12.4083 7.8029C11.513 7.8029 10.1242 6.78657 8.65709 6.81266C6.72565 6.84292 4.94551 7.93542 3.95109 9.66443C1.9466 13.1433 3.43979 18.2991 5.39419 21.1237C6.34792 22.5042 7.48842 24.0558 8.98266 23.9985C10.4237 23.9421 10.9673 23.0677 12.7078 23.0677C14.4493 23.0677 14.9377 23.9985 16.4622 23.9703C18.0107 23.9432 18.9936 22.5637 19.9411 21.178C21.0388 19.5742 21.4896 18.0236 21.5167 17.9433C21.4812 17.9266 18.4959 16.7829 18.4656 13.3437Z"
                            fill="black"
                          ></path>
                          <path
                            d="M15.7876 3.83263C16.6255 2.8163 17.191 1.40658 17.0376 0C15.8303 0.0490426 14.3674 0.802421 13.5013 1.81666C12.725 2.71613 12.0457 4.15089 12.2273 5.53138C13.5744 5.63573 14.9486 4.84583 15.7876 3.83263Z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">Download for </span>
                        <span className="font-semibold">macOS M1</span>
                      </div>
                    </div>
                    <div className="mt-2 p-1 text-sm text-gray-500">
                      macOS 10.13 or higher
                    </div>
                  </div>
                </a>
                {/* <a href="https://github.com/achuthhadnoor/annotate_www/releases/download/1.0.4/Lapse.Setup.1.0.3.exe">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 align-middle text-black">
                      <span className="flex">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 4.13676L9.99656 2.90616V11.5705H1V4.13676ZM11.0802 2.73539L23 1V11.4977H11.0802V2.73539ZM1 12.4872H9.99656V21.1767L1 19.921V12.4872ZM11.0802 12.6027H23V23L11.0802 21.3174"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold">Download for </span>
                        <span className="text-2xl font-semibold">windows</span>
                      </div>
                    </div>
                    <div className="mt-2 p-1 text-center text-sm text-gray-500 ">
                      Windows 10 or 11
                    </div>
                  </div>
                </a> */}
              </div>
              <div className="mt-5  flex gap-2 text-center md:gap-5">
                <Link href="https://twitter.com/achuth_hadnoor" target="_blank">
                  <svg
                    width="24"
                    height="25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#prefix__clip0_1418_676)">
                      <path
                        d="M14.286 10.276L23.222.112h-2.117l-7.763 8.823L7.147.112H0l9.37 13.344L0 24.111h2.117l8.192-9.32 6.544 9.32H24M2.88 1.674h3.253l14.97 20.953H17.85"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="prefix__clip0_1418_676">
                        <path
                          fill="currentColor"
                          transform="translate(0 .112)"
                          d="M0 0h24v24H0z"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
              <div className="mt-5  flex gap-2 text-center text-neutral-400 dark:text-neutral-600 md:gap-5">
                Made by{" "}
                <Image
                  className="rounded-full"
                  src={"/avatars/achuth.webp"}
                  alt={"Screen recording"}
                  width={24}
                  height={24}
                  blurDataURL="data:..."
                />{" "}
                Achuth Hadnoor. All right reserved.
              </div>
              <div className="mt-4">
                <Link
                  href={
                    "https://achuth.notion.site/Refund-Policy-dd800e71934c4b9c85ce12bf504544f4"
                  }
                  className="p-2 text-neutral-400 transition hover:text-neutral-100"
                >
                  Refund
                </Link>
                <Link
                  href={
                    "https://achuth.notion.site/Press-Kit-1a3b994e395d43efbaf6727fed4429f1"
                  }
                  className="p-2 text-neutral-400 transition hover:text-neutral-100"
                >
                  Press kit
                </Link>
                <Link
                  href={
                    "https://achuth.notion.site/Terms-of-Service-cf16898198bd42eeb41f4a780f04ac94"
                  }
                  className="p-2 text-neutral-400 transition hover:text-neutral-100"
                >
                  Terms of service
                </Link>
              </div>
            </div>
          </section>
          <Crisp />
          <a href="https://www.producthunt.com/posts/annotate-6?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-annotate&#0045;6" target="_blank" className="fixed right-24 bottom-5"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=435552&theme=neutral" alt="Annotate - Menubar&#0032;app&#0032;to&#0032;draw&#0032;on&#0032;any&#0032;app&#0032;or&#0032;screen&#0032;on&#0032;macOS | Product Hunt" width="250" height="54" /></a>

        </main>
      </body>
    </html >
  );
}

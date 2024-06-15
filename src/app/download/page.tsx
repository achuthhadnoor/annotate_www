"use client";
import React, { useState } from "react";
import cl from "classnames";
import { currentVersion } from "@/lib/constants";
export default function Home() {
    const [activeFQA, setActiveFQA] = useState(0);
    const faqs = [
        {
            title: "Is there an option to select monitors?",
            des: "Yes you can select one of the external monitors to start recording. However, the support for single app recording is in the roadmap.",
        },
        {
            title: "Is there a Windows app?",
            des: "Yes we support for MacOs and windows.",
        },
        {
            title: "Do you offer a trial?",
            des: "We didn’t implement a trial yet, but no worries—feel free to purchase the app. If you’re not happy send a short message. We’ll refund your order.",
        },
        {
            title: "Something’s wrong. How do I get in touch?",
            des: "Drop us a line, we’ll be happy to help!",
        },
        {
            title: "The menubar app doesn’t work. What can I do?",
            des: "Lapse requires the screen Record permission in “System Preferences › Security & Privacy › Privacy › Screen Recording. For macOS 10.15 (Catalina) the screen recording permission in “System Preferences › Security & Privacy › Privacy › Screen Recording” is required too.",
        },
        {
            title: "How much memory does Lapse use?",
            des: "Lapse uses ~150MB ",
        },
        {
            title: "Will you update Lapse?",
            des: "One year of updates with the licence purchaced.",
        },
    ];
    return (
        <main className="mx-4 md:mx-12 pt-20 text-sm">
            <section className="flex flex-col gap-10  mt-24 max-w-6xl mx-auto items-center justify-center">
                <h2 className="text-6xl font-bold mt-5 mb-10">Download</h2>
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
                    <a href="https://github.com/achuthhadnoor/annotate_www/releases/latest">
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
                    </a>
                </div>
            </section>
            <section className="flex flex-col gap-10  mt-24 max-w-6xl mx-auto items-center justify-center">
                <h2 className="text-6xl font-bold mt-5 mb-10">FAQ</h2>
                <ul className="max-w-3xl max-w-auto w-full bg-neutral-200 dark:bg-neutral-800 rounded-lg">
                    {faqs.map((faq, index) => (
                        <li
                            key={index}
                            className="mb-2 border-b-[1px] border-b-neutral-900"
                            onClick={() => {
                                setActiveFQA(index);
                            }}
                        >
                            <div className=" px-4 py-2 flex justify-between">
                                <h3 className="text-lg">{faq.title}</h3>
                                <span className="p-2 flex items-center">
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 6l-4 4-4-4"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                            <p
                                className={cl(
                                    activeFQA !== index && "hidden",
                                    "transition ease-linear px-4 py-2 dark:text-neutral-400 text-neutral-600"
                                )}
                            >
                                {faq.des}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
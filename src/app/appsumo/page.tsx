'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { currentVersion, versions } from '@/lib/constants'

export default function Home({ searchParams }: any) {
    const [activeFQA, setActiveFQA] = useState(0)
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [os, setOs] = useState('macos')
    const [loading, setLoading] = useState(false)
    const [version, setVersion] = useState(currentVersion)
    const faqs = [
        {
            title: "Is there an option to select monitors?",
            des: "Yes you can select one of the external monitors to start recording. However, the support for single app recording is in the roadmap.",
        },
        {
            title: "Is there a Windows app?",
            des: "No, currently we are only on Mac",
        },
        {
            title: "Do you offer a trial?",
            des: "We didn’t implement a trial yet, but no worries — Feel free to purchase the app. If you’re not happy send a short message. We’ll refund your order.",
        },
        {
            title: "Something’s wrong. How do I get in touch?",
            des: "Drop us a line, we’ll be happy to help!",
        },
        {
            title: "The menubar app doesn’t work. What can I do?",
            des: "Annotate requires the screen Record permission in “System Preferences › Security & Privacy › Privacy › Screen Recording. For macOS 10.15 (Catalina) the screen recording permission in “System Preferences › Security & Privacy › Privacy › Screen Recording” is required too.",
        },
        {
            title: "How much memory does Annotate use?",
            des: "Annotate uses ~150MB ",
        },
        {
            title: "Will you update Annotate?",
            des: "One year of updates with the licence purchaced.",
        },
    ];
    useEffect(() => {
        setCode(searchParams.appsumocode)
    }, [])
    const submitApi = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (code !== 'null' && code.length === 19) {
            setLoading(true)

            axios.post('api/verify', { email: email, phrase: code }).then((res) => {
                if (res.data.status === 503) {
                    alert(res.data.message)
                    return
                } else if (res.data.status === 403) {
                    alert(res.data.message)
                    return
                }
                console.log(res.data)
                if (os === 'macos') {
                    window.open(
                        `https://github.com/achuthhadnoor/annoatate_www/releases/download/${version}/annoatate-${version}-x64.dmg`,
                        '_blank'
                    )
                    setLoading(false)
                    return
                } else if (os === 'macosM1') {
                    window.open(
                        `https://github.com/achuthhadnoor/annoatate_www/releases/download/${version}/annoatate-${version}-arm64.dmg`,
                        '_blank'
                    )
                    setLoading(false)
                    return
                }
                window.open(
                    'https://github.com/achuthhadnoor/annoatate_www/releases/download/1.0.4/annoatate.Setup.1.0.3.exe'
                )
                setLoading(false)
            })
        }
    }
    let selectOs = (os: any) => {
        setOs(os)
    }
    return (
        <main className="text-sm">
            <motion.section className=" mx-auto mt-24 max-w-4xl" initial={{ opacity: 0, scale: 0.98, translateY: 15 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    translateY: 0
                }}>
                <h1 className="flex justify-center items-center align-middle text-3xl">
                    <span>Annotate ❤️</span>{' '}
                    <svg
                        width="150"
                        height="24"
                        viewBox="0 0 150 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_4746_241)">
                            <path
                                d="M94.7 14.2C94.7 18.1 92.9 18.0999 92 18.0999C91.1 18.0999 89.3 18.1 89.3 14.2V3.20001H84.7V14.9C84.7 19.4 87.7 22.5999 92 22.5999C96.3 22.5999 99.3 19.4 99.3 14.9V3.20001H94.7V14.2Z"
                                fill="#F5BF41"
                            />
                            <path
                                d="M139.8 2.59991C134.2 2.59991 129.6 7.10011 129.6 12.8001C129.6 18.4001 134.2 23.0001 139.8 23.0001C145.4 23.0001 150 18.4001 150 12.8001C150 7.20011 145.4 2.59991 139.8 2.59991ZM139.8 18.3001C136.7 18.3001 134.3 15.8 134.3 12.7C134.3 9.70001 136.7 7.19991 139.7 7.09991C142.7 7.09991 145.2 9.50006 145.3 12.5001V12.5999C145.3 15.7999 142.8 18.3001 139.8 18.3001Z"
                                fill="#F5BF41"
                            />
                            <path
                                d="M10.3 6.10352e-05L0 22.4H5.19995L7.19995 18.0999H13.3999L15.3999 22.4H20.6001L10.3 6.10352e-05ZM8.30005 14.3001L10.2 9.59991L12.1001 14.3001H8.30005Z"
                                fill="#F5BF41"
                            />
                            <path
                                d="M32.5 3.30011H25V22.2H29.7V16.8001H32.2C36.8 16.8001 39.7 14.2001 39.7 10.0001V9.89996C39.8 5.79996 37 3.30011 32.5 3.30011ZM35 10.2C35 11.8 33.9001 12.8001 32.1001 12.8001H29.7V7.59991H32.1001C34.0001 7.49991 35 8.50001 35 10.2Z"
                                fill="#F5BF41"
                            />
                            <path
                                d="M51.8999 3.30011H44.3999V22.2H49.1001V16.8001H51.6001C56.2001 16.8001 59.1001 14.2001 59.1001 10.0001V9.89996C59.2001 5.79996 56.3999 3.30011 51.8999 3.30011ZM54.3999 10.2C54.3999 11.8 53.3 12.8001 51.5 12.8001H49.1001V7.59991H51.5C53.4 7.49991 54.3999 8.50001 54.3999 10.2Z"
                                fill="#F5BF41"
                            />
                            <path
                                d="M73.1001 9.30011C69.4001 8.30011 68.6001 7.89991 68.6001 6.59991V6.50006C68.6001 5.50006 69.6 4.80011 71.2 4.80011C73.2 4.90011 75.1 5.59996 76.7 6.89996L76.8 7.00006L79.3999 3.20001L79.3 3.09991C77 1.29991 74.1 0.30011 71.2 0.30011C66.7 0.30011 63.5 2.99996 63.5 6.89996V7.00006C63.5 11.5001 66.6 12.7 70.8 13.7C74.4 14.6 75 15.2001 75 16.3001V16.4C75 17.6 73.9001 18.3001 72.1001 18.3001C69.8001 18.2001 67.5 17.3 65.8 15.7L65.7 15.5999L62.7 19.2L62.8 19.3001C65.3 21.6001 68.6 22.8001 72 22.8001C77 22.8001 80.1001 20.2001 80.1001 16.0001V15.9C80.1001 11.9 77.3001 10.3001 73.1001 9.30011Z"
                                fill="#F5BF41"
                            />
                            <path
                                d="M114.8 23.2L109.1 13.5999L107.4 22.5001H103.3L107.5 2.59991L114.9 15.0999L121.9 2.59991L126.1 22.5001H121.7L120.1 13.7L114.8 23.2Z"
                                fill="#F5BF41"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_4746_241">
                                <rect width="150" height="23.2" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </h1>
                <div className="mx-auto my-5 mt-2">
                    <h2 className="text-lg font-semibold">Hello Sumo-links 👋</h2>
                    <p className="my-5 max-w-xl leading-loose">
                        Please enter your name, email and Appsumo code below to download
                        annotate and enjoy annotating the screen and illustrate your ideas
                        <span className="mx-1 rounded bg-indigo-800 p-1 text-indigo-200">
                            {' '}
                            with life time access
                        </span>
                        .
                    </p>
                    <p className="my-5 max-w-xl leading-loose">
                        After submission, you will receive the
                        <span className="mx-1 rounded bg-indigo-800 p-1 text-indigo-200">
                            {' '}
                            .dmg / .exe
                        </span>
                        file where you will have to enter both email and the code
                    </p>
                    <a className="">
                        Thank you,
                        <br />
                        Achuth
                    </a>
                </div>
                <div className="mx-auto my-5 rounded-md bg-neutral-900 px-4 py-5 shadow-md">
                    <h3 className="mt-2 text-lg">
                        Start annotating your amazing digital work
                    </h3>
                    <form
                        className="flex max-w-md flex-col gap-4 py-4"
                        onSubmit={submitApi}
                    >
                        <input
                            className={cn(
                                loading && 'cursor-not-allowed',
                                'rounded bg-neutral-800 px-2 py-1 text-sm shadow outline-none focus:ring-2 focus:ring-indigo-400'
                            )}
                            type="email"
                            placeholder="join@email.address"
                            required
                            value={email}
                            onChange={({ target }) => {
                                setEmail(target.value)
                            }}
                            disabled={loading}
                        />
                        <input
                            className="rounded bg-neutral-800 px-2 py-1 text-sm shadow outline-none focus:ring-2 focus:ring-indigo-500"
                            type="text"
                            placeholder="Appsumo code"
                            required
                            value={code === 'null' ? '' : code}
                            onChange={({ target }) => {
                                setCode(target.value)
                            }}
                        // disabled={loading || code?.length === 19}
                        />
                        <p className="text-xs text-indigo-600/70">
                            Paste the code from appsumo
                        </p>
                        <div className="flex flex-col">
                            <span className="my-5 text-sm">Select operating system</span>
                            <label htmlFor="macos">
                                <input
                                    id="macos"
                                    name="macos"
                                    className="mx-2"
                                    type="radio"
                                    onChange={() => {
                                        selectOs('macos')
                                    }}
                                    checked={os === 'macos' ? true : false}
                                />
                                Mac
                            </label>
                            <label htmlFor="macosM1">
                                <input
                                    id="macosM1"
                                    name="macOsm1"
                                    className="mx-2"
                                    type="radio"
                                    onChange={() => {
                                        selectOs('macosM1')
                                    }}
                                    checked={os === 'macosM1' ? true : false}
                                />
                                Mac os M1( apple Sillicon)
                            </label>
                            <label htmlFor="versions">
                                Version{' '}
                                <select
                                    onChange={(e) => setVersion(e.target.value)}
                                    defaultValue={currentVersion}
                                    className="bg-transparent border-2 border-indigo-500 rounded m-4 outline-none"
                                >
                                    {versions?.map((version) => (
                                        <option key={`version-${version}`} value={version}>
                                            {version}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <span>
                            <button
                                type="submit"
                                className={cn(
                                    loading || code?.length !== 19
                                        ? 'cursor-not-allowed'
                                        : 'cursor-pointer',
                                    'inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-indigo-400 disabled:bg-neutral-500'
                                )}
                                disabled={code?.length !== 19 ? true : false}
                            >
                                {loading && (
                                    <svg
                                        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                )}
                                {loading ? 'Processing..' : 'submit'}
                            </button>
                        </span>
                    </form>
                </div>
            </motion.section>
            <section className="flex flex-col gap-10  mt-24 max-w-6xl mx-auto items-center justify-center">
                <h2 className="text-6xl font-bold mt-5 mb-10">FAQ</h2>
                <ul className="max-w-3xl max-w-auto w-full bg-neutral-200 dark:bg-neutral-800 rounded-lg">
                    {faqs.map((faq, index) => (
                        <li
                            key={index}
                            className="mb-2 border-b-[1px] border-b-neutral-900"
                            onClick={() => {
                                setActiveFQA(index)
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
                                className={cn(
                                    activeFQA !== index && 'hidden',
                                    'transition ease-linear px-4 py-2 dark:text-neutral-400 text-neutral-600'
                                )}
                            >
                                {faq.des}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

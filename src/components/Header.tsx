'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, translateY: -5 }}

            animate={{
                opacity: 1,
                translateY: 0,
            }}
            className="mb-8 flex flex-col md:flex-row items-center justify-between py-4 gap-8 md:gap-2 "
        >
            <Link href={'/'}>
                <Image src="/favicon-180.png" alt="leaf-left" height={50} width={50} />{' '}
            </Link>
            <div className="flex items-center gap-4 md:p-2 px-4 py-2 bg-neutral-900/80 rounded-full md:bg-transparent text-xs md:text-md">
                <a
                    href="https://achuth.notion.site/Changelog-cf1aea338e454e1888b362d00c5be39f?pvs=4"
                    className="p-2"
                >
                    Changelog
                </a>
                <Link href="/pricing" className="p-2">
                    Pricing
                </Link>
                <Link href="https://github.com/achuthhadnoor/annotate_www/releases/latest">
                    <button className="hidden md:inline-block rounded bg-indigo-900 px-4 py-2">
                        Download Now
                    </button>
                </Link>
            </div>

            <motion.a
                initial={{ opacity: 0, translateY: 50 }}
                animate={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{
                    delay: 0.4,
                }}
                href="https://www.producthunt.com/posts/annotate-6?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-annotate&#0045;6" target="_blank" className="fixed right-24 bottom-5"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=435552&theme=neutral" alt="Annotate - Menubar&#0032;app&#0032;to&#0032;draw&#0032;on&#0032;any&#0032;app&#0032;or&#0032;screen&#0032;on&#0032;macOS | Product Hunt" width="250" height="54" /></motion.a>

        </motion.header>
    )
}

import React from 'react'

export default function Pricing() {
    return (
        <div className="pb-10">
            <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
                <div className="mb-4 text-center">
                    <p className="mt-2 text-4xl font-extrabold text-white lg:text-5xl">
                        <span className="inline-block">Pay once.</span>
                        <span className="inline-block">Use forever</span>.
                    </p>
                    <p className="mx-auto mt-3 max-w-4xl text-sm text-gray-300 sm:mt-5 sm:text-xl">One year of free updates included, optional renewal at 40% discount.</p>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 pt-6 pb-16 sm:px-6 lg:px-8">
                <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(20,1fr)]">
                    <div className="flex lg:col-span-6 lg:py-10">
                        <div className="relative flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
                                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-green-600 py-1.5 px-4 text-sm font-semibold uppercase tracking-wide text-white">Save $15</p>
                                <p className="mt-4 text-gray-900">
                                    <span className="text-4xl font-extrabold tracking-tight">$29.99</span>
                                </p>
                                <p className="mt-6 text-gray-500">Simple and beautiful</p>
                                <ul role="list" className="mt-6 space-y-6">
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-purple-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                        <span className="ml-3 text-gray-500">1 macOS device</span>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-purple-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                        <span className="ml-3 text-gray-500">No watermark</span>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-purple-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                        <span className="ml-3 text-gray-500">1 year of updates</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="bg-purple-50 text-purple-700 hover:bg-purple-100 mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium">Buy License</button>
                        </div>
                    </div>
                    <div className="flex lg:col-span-6 lg:py-10">
                        <div className="relative flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900">Personal</h3>
                                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-green-600 py-1.5 px-4 text-sm font-semibold uppercase tracking-wide text-white">Save $27</p>
                                <p className="mt-4 text-gray-900">
                                    <span className="text-4xl font-extrabold tracking-tight">$54.99</span>
                                </p>
                                <p className="mt-6 text-gray-500">Most popular pick</p>
                                <ul role="list" className="mt-6 space-y-6">
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-purple-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                        <span className="ml-3 text-gray-500">2 macOS devices</span>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-purple-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                        <span className="ml-3 text-gray-500">No watermark</span>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-purple-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                        <span className="ml-3 text-gray-500">1 year of updates</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="bg-purple-50 text-purple-700 hover:bg-purple-100 mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium">Buy License</button>
                        </div>
                    </div>
                    <div className="flex lg:col-span-6 lg:py-10 lg:!col-span-7 lg:!py-0">
                        <div className="relative flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900">Standard</h3>
                                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-green-600 py-1.5 px-4 text-sm font-semibold uppercase tracking-wide text-white">Save $40 (Best value)</p>
                                <p className="mt-4 text-gray-900">
                                    <span className="text-4xl font-extrabold tracking-tight">$79.99</span>
                                </p>
                                <p className="mt-6 text-gray-500">For the professionals!</p>
                                <ul role="list" className="mt-6 space-y-6">
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-purple-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                        <span className="ml-3 text-gray-500">3 macOS devices</span>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-purple-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                        <span className="ml-3 text-gray-500">No watermark</span>
                                    </li>
                                    <li className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-purple-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                        <span className="ml-3 text-gray-500">1 year of updates</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="bg-purple-500 text-white hover:bg-purple-600 mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium">Buy License</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 text-center text-gray-400">Prices in USD. Taxes may apply.<br />Secure payment via <a href="https://gumroad.com">gumroad</a>, macOS 10.15+ Required.</div>
            <div className="mx-auto max-w-xl px-4">
                <div className="my-10 rounded-md bg-gray-800 p-4 text-center text-base">
                    <div className="text-xl font-semibold">7-Day Money-Back Guarantee</div>
                    <div className="my-2">{`It's risk free! If you're not happy with your purchase for whatever reason, we will refund, no question asked.`}</div>
                    <div className="my-2">Contact us: 💌 support@annotateapp.com</div>
                </div>
            </div>
            <div className="mx-auto max-w-xl px-4">
                <div className="my-10 rounded-md bg-gray-800 p-4 text-center text-base">
                    <div className="text-xl font-semibold">License Terms</div>
                    <ul className="list-disc pl-4 text-left text-sm">
                        <li>One license key allows you to use the app indefinitely + 1 year of updates.</li>
                        <li>After 1 year, you can renew the license at 40% discount for another year of updates. The discount is calculated based on your purchase price and will never change, even if the official price goes up in the future.</li>
                        <li>{`If you don't renew, you can still use the last version you have forever, there is no expiration date.`}</li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto my-24 max-w-xl px-4">
                <h2 className="text-center text-3xl font-semibold">Already have a license?</h2>
                <p className="my-4 text-center text-gray-400">Manage your license key in the <a href="/license-manager" className="text-blue-500">License Manager</a>.</p>
            </div>
        </div>
    )
}

import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState } from 'react';
import Link from 'next/link'
const CrispWithNoSSR: any = dynamic(() => import('./crisp'), {
  ssr: false,
})

export default function Container(props: { [x: string]: any; children: any }) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'annotate – Paint on any app or screen 🖌️',
    description: `An app to annotate any screen`,
    image: 'https://annotate.achuth.dev/banner.png',
    type: 'website',
    date: '24-08-2023',
    ...customMeta,
  }
  return (
    <div className=" bg-gradient-to-b from-purple-900/20 text-neutral-300">
      <CrispWithNoSSR />
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://annotate.achuth.dev${router.asPath}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href={`https://annotate.achuth.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="annotate" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@achuth_hadnoor" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <script
          id="donate-for-turkiye"
          src={
            'https://www.donateforturkiye.org/cdn/widget.js?type=one&position=bottom-left'
          }
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config',  'UA-177599995-1');
        `,
          }}
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Header />
      <span className="fixed bottom-5 right-36 z-10">
        <a
          href="https://www.producthunt.com/posts/annotate-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-annotate&#0045;2"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="54"
            viewBox="0 0 250 54"
            version="1.1"
          >
            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-130.000000, -73.000000)">
                <g transform="translate(130.000000, 73.000000)">
                  <rect
                    stroke="#D9E1EC"
                    strokeWidth="1"
                    fill="#FFFFFF"
                    x="0.5"
                    y="0.5"
                    width="249"
                    height="53"
                    rx="10"
                  />
                  <text
                    fontFamily="Helvetica-Bold, Helvetica"
                    fontSize="9"
                    fontWeight="bold"
                    fill="#4B587C"
                  >
                    <tspan x="53" y="20">
                      FEATURED ON
                    </tspan>
                  </text>
                  <text
                    fontFamily="Helvetica-Bold, Helvetica"
                    fontSize="21"
                    fontWeight="bold"
                    fill="#4B587C"
                  >
                    <tspan x="52" y="40">
                      Product Hunt
                    </tspan>
                  </text>
                  <g
                    transform="translate(201.000000, 13.000000)"
                    fill="#4B587C"
                  >
                    <g>
                      <polygon points="26.0024997 10 15 10 20.5012498 0" />
                      <text
                        fontFamily="Helvetica-Bold, Helvetica"
                        fontSize="13"
                        fontWeight="bold"
                      >
                        <tspan x="9.100000000000001" y="27">
                          294
                        </tspan>
                      </text>
                    </g>
                  </g>

                  <g transform="translate(11.000000, 12.000000)">
                    <path
                      d="M31,15.5 C31,24.0603917 24.0603917,31 15.5,31 C6.93960833,31 0,24.0603917 0,15.5 C0,6.93960833 6.93960833,0 15.5,0 C24.0603917,0 31,6.93960833 31,15.5"
                      fill="#4B587C"
                    />
                    <path
                      d="M17.4329412,15.9558824 L17.4329412,15.9560115 L13.0929412,15.9560115 L13.0929412,11.3060115 L17.4329412,11.3060115 L17.4329412,11.3058824 C18.7018806,11.3058824 19.7305882,12.3468365 19.7305882,13.6308824 C19.7305882,14.9149282 18.7018806,15.9558824 17.4329412,15.9558824 M17.4329412,8.20588235 L17.4329412,8.20601152 L10.0294118,8.20588235 L10.0294118,23.7058824 L13.0929412,23.7058824 L13.0929412,19.0560115 L17.4329412,19.0560115 L17.4329412,19.0558824 C20.3938424,19.0558824 22.7941176,16.6270324 22.7941176,13.6308824 C22.7941176,10.6347324 20.3938424,8.20588235 17.4329412,8.20588235"
                      fill="#FFFFFF"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </span>
      <main className="mx-auto max-w-6xl">{children}</main>
      <Footer />
    </div>
  )
}
function Header() {
  const [open, setOpen] = useState(false)

  const NavMenu = () => (
    <nav className="flex h-full w-full flex-col items-end gap-10 rounded align-middle text-sm uppercase text-neutral-200 md:flex-row">
      <Link
        href={'/'}
        onClick={() => {
          setOpen(false)
        }}
      >
        <span className="px-2 py-1 text-sm">Home</span>
      </Link>
      {/* <Link
        href={'#features'}
        onClick={() => {
          setOpen(false)
        }}
      >
        <span className="px-2 py-1 text-sm">Features</span>
      </Link> */}
      <Link
        href={'#faq'}
        onClick={() => {
          setOpen(false)
        }}
      >
        <span className="px-2 py-1 text-sm">FAQ</span>
      </Link>
      <a
        href="https://achuth.notion.site/Changelog-4c898f8b4ec140abb1d6a6d2e9108a15"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm"
      >
        Changelog
      </a>
    </nav>
  )
  return (
    <>
      <header className="sticky top-0 z-50 bg-black/10 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-2 py-4 align-middle lg:px-0">
          <Link href="/" className="hidden md:inline">
            <span className=" bg-gradient-to-r from-purple-400 to-purple-700/40 bg-clip-text text-3xl font-bold text-transparent ">
              Annotate
            </span>
          </Link>
          <span className="md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5959_265)">
                <rect width="24" height="24" rx="5" transform="matrix(-1 0 0 1 24 0)" fill="url(#paint0_linear_5959_265)" />
                <g filter="url(#filter0_di_5959_265)">
                  <path d="M18.2344 17.25L12.2419 7.9802C10.2357 4.98139 3.28021 7.12659 6.78274 15.8761L7.68619 16.1683L12.0234 14.2752" stroke="url(#paint1_linear_5959_265)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shape-rendering="crispEdges" />
                </g>
              </g>
              <defs>
                <filter id="filter0_di_5959_265" x="-1.18555" y="0.705078" width="26.4199" height="24.5449" filterUnits="userSpaceOnUse" >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5959_265" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5959_265" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_5959_265" />
                </filter>
                <linearGradient id="paint0_linear_5959_265" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5DB5FF" />
                  <stop offset="1" stopColor="#2B59FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_5959_265" x1="12.0581" y1="6.02704" x2="12.0581" y2="18.1627" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.78" />
                </linearGradient>
                <clipPath id="clip0_5959_265">
                  <rect width="24" height="24" rx="5" transform="matrix(-1 0 0 1 24 0)" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </span>
          <div className="hidden lg:flex">
            <NavMenu />
          </div>
          <div className="flex gap-4">
            <Link href="/download">
              <button className="rounded bg-gradient-to-r from-purple-700/40 p-[0.5px]">
                <div className="flex items-center gap-2 rounded  bg-black/20 p-2">
                  <span className="hidden md:inline-block">Download</span>
                  <span className="md:hidden">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.25 7.5L9 11.25L12.75 7.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 11.25V2.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z"
                        fill="currentColor"
                        fill-opacity="0.9"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M6.6607 8.98214V14.7946L0.571411 13.9554V8.98214H6.6607ZM6.6607 2.34821V8.23214H0.571411V3.1875L6.6607 2.34821ZM15.4286 8.98214V16L7.33034 14.8839V8.98214H15.4286ZM15.4286 1.14286V8.23214H7.33034V2.25893L15.4286 1.14286Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="16"
                            height="16"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </button>
            </Link>

            <button
              className="lg:hidden"
              onClick={() => {
                setOpen(true)
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 15H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-neutral-900/30 p-4 backdrop-blur-md">
          <div className="flex flex-col items-end gap-4 rounded-lg">
            <button
              onClick={() => {
                setOpen(false)
              }}
              className="rounded-full border-2  border-transparent p-2 outline-none focus:border-neutral-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <NavMenu />
          </div>
        </div>
      )}
    </>
  )
}

const ExternalLink = ({ href, children }: any) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)


const Footer = () => {
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const _date = new Date()
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-20">
      <div className="flex flex-col justify-between gap-4 px-2 py-10 lg:flex-row">
        <div className="grid flex-1 grid-flow-row gap-2 text-gray-400  md:grid-flow-col md:grid-rows-3">
          <Link href="#feedback">Feedback</Link>
          {/* <ExternalLink href="https://gum.co/lapse_app">Buy</ExternalLink> */}
          <ExternalLink href="https://achuth.notion.site/Changelog-4c898f8b4ec140abb1d6a6d2e9108a15">
            Changelog
          </ExternalLink>
          <ExternalLink href="https://achuth.notion.site/Press-Kit-1a3b994e395d43efbaf6727fed4429f1">
            Press kit
          </ExternalLink>
          <ExternalLink href="https://achuth.notion.site/Privacy-Policy-ec65b78f07c443e2a3bcd46d834a263d">
            Privacy policy
          </ExternalLink>
          <ExternalLink href="https://achuth.notion.site/Terms-of-Service-cf16898198bd42eeb41f4a780f04ac94">
            {'Terms & conditions'}
          </ExternalLink>
          <ExternalLink href="https://achuth.notion.site/Refund-Policy-dd800e71934c4b9c85ce12bf504544f4">
            Refund Policy
          </ExternalLink>
        </div>
        <div className="mt-10 max-w-lg rounded-lg bg-purple-900/30 px-2 py-4 sm:mt-0  sm:px-10">
          <h3 className="mb-5 text-2xl">Be the first to know</h3>
          <p className="mb-5 text-sm text-gray-300">
            We’ll inform you about new tips, apps and deals. No spam, we
            promise.
          </p>
          <form
            className="flex flex-col rounded-lg bg-black/50 p-2 sm:flex-row"
            onSubmit={async (e) => {
              e.preventDefault()
              let { status, error }: any = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: email,
                }),
              })
              switch (status) {
                case 201:
                  setSuccessMessage('You are subscribed')
                  break
                case 400:
                  setSuccessMessage(error)
                  break
              }
              setEmail('')
            }}
          >
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="join@email.addess"
              className="flex-1 bg-transparent px-4 py-2  outline-none"
              required
            />
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-purple-800 px-4 py-2 sm:mt-0 sm:w-fit "
            >
              Subscribe
            </button>
          </form>
          {successMessage && (
            <div className="fixed right-0 top-10 flex items-center rounded bg-lime-100 px-2 text-purple-600 ">
              {successMessage}
              <span
                className="p-2"
                onClick={() => {
                  setSuccessMessage('')
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between py-5 text-xs">
        <span>
          Copyright © {_date.getFullYear()} <i className="font-mono">Annotate</i>
        </span>
        <span>
          <a href="https://twitter.com/achuth_hadnoor">
            <svg
              fill="none"
              height="16"
              width="16"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}
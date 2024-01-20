import type { NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Container from '../components/Container'
import Timer from '../components/timer'
import Menubar from '../components/menubar'

const Home: NextPage = () => {
  const [hideVideo, setHideVideo] = useState(true)
  return (
    <Container>
      {/* Hero Section */}
      <section className="flex flex-col items-center p-2 pt-10 text-center ">
        <div className="w-full  overflow-hidden rounded-xl md:border md:border-purple-800 ">
          <Menubar />
          <div className="mx-auto my-10 flex max-w-2xl flex-col items-center justify-center gap-4">

            <h1 className=" py-5 text-4xl font-bold leading-relaxed lg:text-6xl">
              Annotate{' '}
              <span className="bg-gradient-to-r from-purple-300 to-purple-700 bg-clip-text text-transparent">
                any screen or app{' '}
              </span>{' '}
              while screen recording ✨
            </h1>
            <p className="mx-auto max-w-md text-lg text-neutral-300 md:text-2xl">
              A menubar app to paint screen on macOs.
            </p>
            <div className="flex justify-center gap-4">
              {/* <Link
                href="/download"
                className="mt-5 items-center rounded p-2 align-middle text-sm lg:hidden "
              >
                <button className="flex gap-2">
                  <span className="lg:hidden">
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
                  </span>{' '}
                  Get it now{' '}
                </button>
              </Link> */}
              <svg className="relative w-full scale-90" width="774" height="50" viewBox="0 0 774 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_bi_5933_276)"><rect width="774" height="50" rx="10" fill="#272727" fillOpacity="0.6"></rect><circle cx="25" cy="25" r="8.5" fill="#D479FF" stroke="#575757"></circle><circle cx="67" cy="25" r="8.5" fill="#62FFA1" stroke="#575757"></circle><circle cx="109" cy="25" r="8.5" fill="#FFAE64" stroke="#575757"></circle><rect x="142" y="17" width="3" height="16" rx="1.5" fill="#575D96"></rect><rect x="580" y="17" width="3" height="16" rx="1.5" fill="#575D96"></rect><rect x="391" y="17" width="3" height="16" rx="1.5" fill="#575D96"></rect><path d="M697 20H698.778H713" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M712 20.1211V32.2C712 32.6774 711.789 33.1352 711.414 33.4728C711.039 33.8104 710.53 34 710 34H700C699.47 34 698.961 33.8104 698.586 33.4728C698.211 33.1352 698 32.6774 698 32.2V19.9235M701 19.6V17.8C701 17.3226 701.211 16.8648 701.586 16.5272C701.961 16.1896 702.47 16 703 16H707C707.53 16 708.039 16.1896 708.414 16.5272C708.789 16.8648 709 17.3226 709 17.8V19.6" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><rect x="418" y="23" width="98" height="3" rx="1.5" fill="#D9D9D9"></rect><circle cx="428" cy="25" r="5" fill="#D9D9D9"></circle><rect x="540.5" y="17.5" width="15" height="15" rx="1.5" stroke="white"></rect><path d="M544 25.375L547.368 28L552 22" stroke="white" strokeLinecap="round"></path><g clip-path="url(#clip0_5933_276)"><path d="M614 28L607 21.5L614 15" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M627 35V26.7273C627 25.4735 626.473 24.2711 625.536 23.3846C624.598 22.4981 623.326 22 622 22H607" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><g clip-path="url(#clip1_5933_276)"><path d="M664 28L671 21.5L664 15" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M651 35V26.7273C651 25.4735 651.527 24.2711 652.464 23.3846C653.402 22.4981 654.674 22 656 22H671" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><rect x="744" y="17.625" width="3.75" height="3.75" rx="1.875" fill="#6F6F6F"></rect><rect x="744" y="22.625" width="3.75" height="3.75" rx="1.875" fill="#6F6F6F"></rect><rect x="744" y="27.625" width="3.75" height="3.75" rx="1.875" fill="#6F6F6F"></rect><rect x="750.25" y="17.625" width="3.75" height="3.75" rx="1.875" fill="#6F6F6F"></rect><rect x="750.25" y="22.625" width="3.75" height="3.75" rx="1.875" fill="#6F6F6F"></rect><rect x="750.25" y="27.625" width="3.75" height="3.75" rx="1.875" fill="#6F6F6F"></rect><g clip-path="url(#clip2_5933_276)"><path fill-rule="evenodd" clip-rule="evenodd" d="M180.518 26.587L188.846 17.5489C188.897 17.495 188.938 17.4313 188.964 17.3615C188.991 17.2917 189.003 17.2173 189 17.1428C188.996 17.0682 188.978 16.9951 188.946 16.9277C188.914 16.8604 188.868 16.8002 188.812 16.7509L187.215 15.1535C187.111 15.055 186.974 15 186.832 15C186.689 15 186.552 15.055 186.449 15.1535L177.398 23.471C177.345 23.5227 177.302 23.5846 177.272 23.6532C177.243 23.7218 177.228 23.7955 177.228 23.87C177.228 23.9446 177.243 24.0183 177.272 24.0869C177.302 24.1555 177.345 24.2174 177.398 24.2691L179.719 26.587C179.771 26.6408 179.833 26.6835 179.901 26.7128C179.97 26.742 180.044 26.757 180.119 26.757C180.193 26.757 180.267 26.742 180.336 26.7128C180.404 26.6835 180.466 26.6408 180.518 26.587ZM175.755 25.3561L178.653 28.2605C178.835 28.4269 178.956 28.6494 178.998 28.8925V29.4361C179 30.0206 178.886 30.5997 178.663 31.1401C178.44 31.6805 178.112 32.1717 177.699 32.5853C176.833 33.42 175.802 34.0645 174.672 34.477C173.542 34.8896 172.337 35.0612 171.137 34.9807C170.422 34.9839 169.727 34.7499 169.161 34.3154C169.071 34.2246 169.015 34.1054 169.002 33.9781C168.99 33.8507 169.023 33.7231 169.094 33.617C169.765 32.5346 170.109 31.2815 170.083 30.0087C170.043 29.3327 170.14 28.6555 170.368 28.018C170.597 27.3805 170.953 26.7959 171.414 26.2994C172.247 25.4679 173.377 25.0013 174.556 25.0021C174.737 24.9907 174.919 24.9907 175.1 25.0021C175.35 25.0484 175.579 25.1723 175.755 25.3561Z" fill="#C7C7C7"></path></g><g clip-path="url(#clip3_5933_276)"><line x1="215.379" y1="34.8104" x2="234.318" y2="15.8711" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round"></line></g><g clip-path="url(#clip4_5933_276)"><rect x="261.75" y="15.75" width="18.5" height="18.5" rx="1.25" stroke="#C7C7C7" strokeWidth="1.5"></rect></g><g clip-path="url(#clip5_5933_276)"><circle cx="317" cy="25" r="9.25" stroke="#C7C7C7" strokeWidth="1.5"></circle></g><g clip-path="url(#clip6_5933_276)"><rect x="353.75" y="15.75" width="18.5" height="18.5" rx="1.25" stroke="#C7C7C7" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="2 2"></rect><path d="M364 26L367 29" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M359 21L362.333 29L363.516 25.5162L367 24.3329L359 21Z" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></g><defs><filter id="filter0_bi_5933_276" x="-20" y="-20" width="814" height="90" filterUnits="userSpaceOnUse" ><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="10"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5933_276"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5933_276" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect2_innerShadow_5933_276"></feBlend></filter><clipPath id="clip0_5933_276"><rect width="20" height="20" fill="white" transform="translate(607 15)"></rect></clipPath><clipPath id="clip1_5933_276"><rect width="20" height="20" fill="white" transform="translate(651 15)"></rect></clipPath><clipPath id="clip2_5933_276"><rect width="20" height="20" fill="white" transform="translate(169 15)"></rect></clipPath><clipPath id="clip3_5933_276"><rect width="20" height="20" fill="white" transform="translate(215 15)"></rect></clipPath><clipPath id="clip4_5933_276"><rect width="20" height="20" fill="white" transform="translate(261 15)"></rect></clipPath><clipPath id="clip5_5933_276"><rect width="20" height="20" fill="white" transform="translate(307 15)"></rect></clipPath><clipPath id="clip6_5933_276"><rect width="20" height="20" fill="white" transform="translate(353 15)"></rect></clipPath></defs></svg>
            </div>
            <Timer type={'horizontal'} />
          </div>
        </div>

      </section>
      {/* Features */}
      {/* <section className="p-2 pt-24" id="features">
        <h2 className="p-4 text-center text-4xl font-bold">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
          <div className="my-10 flex flex-1 flex-col gap-4 rounded p-4 ">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4702_369)">
                  <path
                    d="M38.2041 0.979584H9.79594C4.92682 0.979584 0.979614 4.92679 0.979614 9.79591V38.2041C0.979614 43.0732 4.92682 47.0204 9.79594 47.0204H38.2041C43.0732 47.0204 47.0204 43.0732 47.0204 38.2041V9.79591C47.0204 4.92679 43.0732 0.979584 38.2041 0.979584Z"
                    stroke="#323232"
                    strokeWidth="2"
                  />
                  <path
                    d="M30.3674 20.5714H31.347C32.3862 20.5714 33.3828 20.9842 34.1176 21.7191C34.8525 22.4539 35.2653 23.4506 35.2653 24.4898C35.2653 25.5291 34.8525 26.5257 34.1176 27.2605C33.3828 27.9954 32.3862 28.4082 31.347 28.4082H30.3674"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6938 20.5714H30.3673V29.3878C30.3673 30.427 29.9545 31.4237 29.2196 32.1584C28.4848 32.8933 27.4882 33.3061 26.4489 33.3061H18.6122C17.573 33.3061 16.5763 32.8933 15.8415 32.1584C15.1066 31.4237 14.6938 30.427 14.6938 29.3878V20.5714Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.6122 13.7143V16.6531"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5306 13.7143V16.6531"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.449 13.7143V16.6531"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4702_369">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-xl">Save time</span>
            <p className="font-thin leading-loose">
              Recorded long hours of video and waited for hours to render again
              as time-annotate? Record directly in time-annotate as you record a
              normal screen recording.
            </p>
          </div>
          <div className="my-10 flex flex-1 flex-col gap-4 rounded p-4 ">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.865 16.5H18.135C17.232 16.5 16.5 17.232 16.5 18.135V29.865C16.5 30.768 17.232 31.5 18.135 31.5H29.865C30.768 31.5 31.5 30.768 31.5 29.865V18.135C31.5 17.232 30.768 16.5 29.865 16.5Z"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.25 16.5V31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.75 16.5V31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 24H31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 20.25H20.25"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 27.75H20.25"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.75 27.75H31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.75 20.25H31.5"
                  stroke="#FDFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="45.0204"
                  height="46"
                  rx="9"
                  stroke="#323232"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="text-xl">Control output</span>
            <p className="font-thin leading-loose">
              Speed up or slow down video by adjusting the framerate from high
              to low and further more by customizing the video output.
            </p>
          </div>
          <div className="my-10 flex flex-1 flex-col gap-4 rounded p-4 ">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 31.5C28.1421 31.5 31.5 28.1421 31.5 24C31.5 19.8579 28.1421 16.5 24 16.5C19.8579 16.5 16.5 19.8579 16.5 24C16.5 28.1421 19.8579 31.5 24 31.5Z"
                  stroke="#FDFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5 26.25V21.75"
                  stroke="#FDFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 26.25V21.75"
                  stroke="#FDFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="46"
                  height="46"
                  rx="9"
                  stroke="#323232"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="text-xl">Autopausing</span>
            <p className="font-thin leading-loose">
              Recording is paused smartly based on inactivity, unexpected
              shutdown and screen lock
            </p>
          </div>
          <div className="my-10 flex flex-1 flex-col gap-4 rounded p-4 ">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4702_365)">
                  <path
                    d="M38.2041 0.979584H9.79594C4.92682 0.979584 0.979614 4.92679 0.979614 9.79591V38.2041C0.979614 43.0732 4.92682 47.0204 9.79594 47.0204H38.2041C43.0732 47.0204 47.0204 43.0732 47.0204 38.2041V9.79591C47.0204 4.92679 43.0732 0.979584 38.2041 0.979584Z"
                    stroke="#323232"
                    strokeWidth="2"
                  />
                  <path
                    d="M29.3877 18.6122H15.6734C14.5914 18.6122 13.7142 19.4894 13.7142 20.5714V28.4082C13.7142 29.4902 14.5914 30.3673 15.6734 30.3673H29.3877C30.4698 30.3673 31.3469 29.4902 31.3469 28.4082V20.5714C31.3469 19.4894 30.4698 18.6122 29.3877 18.6122Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35.2653 25.4694V23.5102"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4702_365">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-xl">Perfomance</span>
            <p className="font-thin leading-loose">
              Removes load on the processor as there is no re-rendering of the
              recorded video and is 5X faster.
            </p>
          </div>
        </div>
      </section> */}
      {/* FAQ */}
      <section className="mt-20 p-2 pt-24" id="faq">
        <h2 className="mt-10 text-center text-3xl">FAQ</h2>
        <div className="flex flex-col px-2 py-10 sm:flex-row">
          <div className="grid flex-1 grid-flow-row gap-2 text-gray-400 sm:grid-flow-col sm:grid-rows-3 sm:gap-0">
            <div className="p-1">
              <div>
                <div className="py-1 text-xl">
                  Is there an option to select monitors?
                </div>
                <p className="max-w-xl p-2 px-4 font-thin">
                  No, you can not select one of the external monitors to start
                  recording.
                  <br />
                  However, the support for multiple screens is in the
                  roadmap.
                </p>
              </div>
            </div>
            <div className="p-1">
              <div>
                <div className="py-1 text-xl">Do you offer a trial?</div>
                <p className="max-w-xl p-2 px-4 font-thin">
                  We didn’t implement a trial yet, but no worries—feel free to
                  purchase the app. If you’re not happy send a short message.
                  We’ll refund your order.
                  <br />
                </p>
              </div>
            </div>
            <div className="p-1">
              <div>
                <div className="py-1 text-xl">
                  Does the app require permission?
                </div>
                <p className="max-w-xl p-2 px-4 font-thin">
                  annotate requires no permission.
                </p>
              </div>
            </div>
            <div className="p-1">
              <div>
                <div className="py-1 text-xl">Is there a Windows app?</div>
                <p className="max-w-xl p-2 px-4 font-thin">
                  {/* Yes we support for MacOs and windows. */}
                  The app will be available soon.
                </p>
              </div>
            </div>
            <div className="p-1">
              <div>
                <div className="py-1 text-xl">
                  Something’s wrong. How do I get in touch?
                </div>
                <p className="max-w-xl p-2 px-4 font-thin">
                  <a href="mailto:achuth.hadnoor123@gmail.com">
                    Drop us a line
                  </a>
                  , we’ll be happy to help!
                </p>
              </div>
            </div>
            <div className="p-1">
              <div>
                <div className="py-1 text-xl">Will you update annotate?</div>
                <p className="max-w-xl p-2 px-4 font-thin">
                  One year of updates with the licence purchaced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Download */}
      <section className="relative px-4 sm:px-20" id="download">
        <h2 className="mt-10 text-center text-3xl">Download</h2>
        <div className="mt-5 flex flex-col items-center justify-center gap-2 md:flex-row">
          {/* <Timer type="horizontal" /> */}
          <a href="https://github.com/achuthhadnoor/annotate_www/releases/download/0.0.1/Annotate-0.0.1-x64.dmg">
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
          <a href="https://github.com/achuthhadnoor/annotate_www/releases/download/0.0.1/Annotate-0.0.1-arm64.dmg">
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
        </div>
      </section>
    </Container>
  )
}

export default Home

{
  /* <div className="py-10 px-2 flex flex-col sm:flex-row">
            <div className="grid sm:grid-rows-3 sm:grid-flow-col grid-flow-row text-gray-400 flex-1 gap-2 sm:gap-0">
            <div>
              <div>
                <div>Title</div>
                <p>body</p>
              </div>
            </div>
            <div>
              <div>
                <div>Title</div>
                <p>body</p>
              </div>
            </div>
            <div>
              <div>
                <div>Title</div>
                <p>body</p>
              </div>
            </div>
            <div>
              <div>
                <div>Title</div>
                <p>body</p>
              </div>
            </div>
            <div>
              <div>
                <div>Title</div>
                <p>body</p>
              </div>
            </div>
            <div>
              <div>
                <div>Title</div>
                <p>body</p>
              </div>
            </div>

            </div>
          </div> */
}

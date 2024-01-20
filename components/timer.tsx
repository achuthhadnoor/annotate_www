import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Timer({ type }: { type: string }) {
  const [timer, setTimer] = useState({ days: 0, hr: 0, min: 0, sec: 0 })
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const countDownDate = new Date('March 31, 2024 15:37:25').getTime()
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setTimer({ days: days, hr: hours, min: minutes, sec: seconds })
      setIsLoading(false)
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x)
      }
    }, 1000)
  }, [])
  return type === 'vertical' ? (
    <div id="timer" className="mt-5">
      <div className="bg-skin-secondary inline-block justify-center rounded-xl p-2 align-middle">
        <div className="flex">
          <span className="mr-4 flex flex-col p-2">
            <span>{timer.days}</span>
            <span className="text-xs text-purple-500">Days</span>
          </span>
          <span className="mr-4 flex flex-col p-2">
            <span>{timer.hr}</span>
            <span className="text-xs text-purple-500">Hrs</span>
          </span>
          <span className="mr-4 flex flex-col p-2">
            <span>{timer.min}</span>
            <span className="text-xs text-purple-500">mins</span>
          </span>
          <span className="mr-4 flex flex-col p-2">
            <span>{timer.sec}</span>
            <span className="text-xs text-purple-500">Sec</span>
          </span>
        </div>
        <a href="https://achuthhadnoor.gumroad.com/l/learnvim">
          <button className="mt-2 w-full rounded-lg bg-purple-500 px-4 py-2 text-xs ring-purple-900 hover:ring-2 sm:text-sm">
            Get It for{' '}
            <span className="stroke-purple-600 text-purple-300 line-through">
              $15
            </span>{' '}
            <span className="ring-1 ring-gray-900">$9</span>
          </button>
        </a>
      </div>
    </div>
  ) : (
    <div id="timer" className="mt-4">
      <div className="bg-skin-secondary inline justify-center space-y-6 rounded-xl align-middle">
        <div className="bg-skin-secondary mt-5 inline-block justify-center rounded-xl  align-middle ring ring-purple-500">
          <div className="flex">
            <span className="md:mr1 mr-2 flex flex-col p-2">
              <span>{timer.days}</span>
              <span className="text-xs text-purple-300">Days</span>
            </span>
            <span className="md:mr1 mr-2 flex flex-col p-2">
              <span>{timer.hr}</span>
              <span className="text-xs text-purple-300">Hrs</span>
            </span>
            <span className="md:mr1 mr-2 flex flex-col p-2">
              <span>{timer.min}</span>
              <span className="text-xs text-purple-300">mins</span>
            </span>
            <span className="mr-4 flex flex-col p-2">
              <span>{timer.sec}</span>
              <span className="text-xs text-purple-300">Sec</span>
            </span>
            <a href="https://gum.co/annotate" target="_blank">
              <button className="m-2 rounded-lg bg-purple-800 px-4 py-2 text-xs outline-none ring-purple-900 hover:bg-purple-600 hover:ring-2 sm:text-sm">
                Get It for
                <span className="stroke-purple-300 px-1 font-bold text-purple-300 line-through">
                  $15
                </span>
                <span className="text-purple-100">$9</span>
              </button>
            </a>
          </div>
        </div>
        {/* <div className="my-4 flex flex-col items-center gap-2 text-sm sm:flex-row">
          <span>Used by </span>
          <span className="[&>*]:border-primary my-1 ml-1 flex -space-x-1  [&>*]:inline-block [&>*]:h-6 [&>*]:w-6 [&>*]:rounded-full [&>*]:border-2 [&>*]:sm:h-8 [&>*]:sm:w-8">
            <Image
              src="/avatars/catz.jpg"
              alt="Catz"
              height={25}
              width={25}
              className="rounded-full ring-1 ring-purple-400"
            />
            <Image
              src="/avatars/epitomi.png"
              alt="epitomi"
              height={25}
              width={25}
              className="rounded-full ring-1 ring-purple-400"
            />
            <Image
              src="/avatars/mikkel.jpg"
              alt="mikkel"
              height={25}
              width={25}
              className="rounded-full ring-1 ring-purple-400"
            />
            <Image
              src="/avatars/afvallenzondergedoe.png"
              alt="afvallenzondergedoe"
              height={25}
              width={25}
              className="rounded-full ring-1 ring-purple-400"
            />
            <Image
              src="/avatars/Aileenooi.jpeg"
              alt="Aileenooi"
              height={25}
              width={25}
              className="rounded-full ring-1 ring-purple-400"
            />
            <Image
              src="/avatars/crystal.png"
              alt="crystal"
              height={25}
              width={25}
              className="rounded-full ring-1 ring-purple-400"
            />
          </span>
          <span>+ 1000's of designers, educators, gamers and more!</span>
        </div> */}
        {/* <div className="mt-5 flex items-center justify-center gap-4 p-2 align-middle">
                <span className="text-purple-300">Avalilable on</span>
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
                      fillOpacity="0.9"
                    />
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
                    <g clipPath="url(#clip0)">
                      <path
                        d="M6.6607 8.98214V14.7946L0.571411 13.9554V8.98214H6.6607ZM6.6607 2.34821V8.23214H0.571411V3.1875L6.6607 2.34821ZM15.4286 8.98214V16L7.33034 14.8839V8.98214H15.4286ZM15.4286 1.14286V8.23214H7.33034V2.25893L15.4286 1.14286Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="16" height="16" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div> */}
      </div>
    </div>
  )
}

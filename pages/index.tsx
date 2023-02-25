import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Layout from "../components/layout";

const Timer = ({ type }: any) => {
  const [timer, setTimer] = useState({ days: 0, hr: 0, min: 0, sec: 0 });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const countDownDate = new Date("March 1, 2024 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimer({ days: days, hr: hours, min: minutes, sec: seconds });
      setIsLoading(false);
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }, []);

  switch (type) {
    case "vertical":
      return (
        <div id="timer" className="mt-5">
          {!isLoading && (
            <div className="bg-skin-secondary inline-block justify-center rounded-xl p-2 align-middle">
              <div className="flex">
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.days}</span>
                  <span className="text-xs text-blue-500">Days</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.hr}</span>
                  <span className="text-xs text-blue-500">Hrs</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.min}</span>
                  <span className="text-xs text-blue-500">mins</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.sec}</span>
                  <span className="text-xs text-blue-500">Sec</span>
                </span>
              </div>
              <a href="https://achuthhadnoor.gumroad.com/l/annotate">
                <button className="mt-2 w-full rounded-lg bg-orange-500 px-4 py-2 text-xs ring-purple-900 hover:ring-2 sm:text-sm">
                  Get It for{" "}
                  <span className="stroke-orange-600 text-purple-300 line-through">
                    $9
                  </span>{" "}
                  <span className="ring-1 ring-gray-900">$3</span>
                </button>
              </a>
            </div>
          )}
        </div>
      );
    case "horizontal":
      return (
        <div id="timer" className="mt-4">
          {!isLoading && (
            <div className="bg-skin-secondary inline-block justify-center rounded-xl align-middle">
              <div className="bg-skin-secondary mt-5 inline-block justify-center rounded-xl px-2 align-middle ring ring-blue-500">
                <div className="flex">
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.days}</span>
                    <span className="text-xs text-blue-300">Days</span>
                  </span>
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.hr}</span>
                    <span className="text-xs text-blue-300">Hrs</span>
                  </span>
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.min}</span>
                    <span className="text-xs text-blue-300">mins</span>
                  </span>
                  <span className="mr-4 flex flex-col p-2">
                    <span>{timer.sec}</span>
                    <span className="text-xs text-blue-300">Sec</span>
                  </span>
                  <a href="https://gum.co/annotate" target="_blank">
                    <button className="m-2 rounded-lg bg-blue-800 px-4 py-2 text-xs outline-none ring-blue-900 hover:bg-blue-600 hover:ring-2 sm:text-sm">
                      Get It for
                      <span className="stroke-blue-300 px-1 font-bold text-blue-300 line-through">
                        $25
                      </span>
                      <span className="text-blue-100">$9</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center gap-4 p-2 align-middle">
                <span className="text-blue-300">Avalilable on</span>
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
              </div>
            </div>
          )}
        </div>
      );
    default:
      return null;
  }
};

const Home: NextPage = () => {
  // const [time, setTime] = useState("Wed 23 Feb 19:43");
  // useEffect(() => {

  // }, []);
  return (
    <Layout className="bg-gradient-to-b from-blue-500 to-black ">
      <div className="h- relative">
        <div className="flex justify-center mb-10">
          <Timer type="horizontal" />
        </div>
        <div className="relative mb-60 ">
          <svg
            className="relative  w-full  scale-90"
            width="774"
            height="50"
            viewBox="0 0 774 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_bi_5933_276)">
              <rect
                width="774"
                height="50"
                rx="10"
                fill="#272727"
                fill-opacity="0.6"
              />
              <circle cx="25" cy="25" r="8.5" fill="#D479FF" stroke="#575757" />
              <circle cx="67" cy="25" r="8.5" fill="#62FFA1" stroke="#575757" />
              <circle
                cx="109"
                cy="25"
                r="8.5"
                fill="#FFAE64"
                stroke="#575757"
              />
              <rect
                x="142"
                y="17"
                width="3"
                height="16"
                rx="1.5"
                fill="#575D96"
              />
              <rect
                x="580"
                y="17"
                width="3"
                height="16"
                rx="1.5"
                fill="#575D96"
              />
              <rect
                x="391"
                y="17"
                width="3"
                height="16"
                rx="1.5"
                fill="#575D96"
              />
              <path
                d="M697 20H698.778H713"
                stroke="#C7C7C7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M712 20.1211V32.2C712 32.6774 711.789 33.1352 711.414 33.4728C711.039 33.8104 710.53 34 710 34H700C699.47 34 698.961 33.8104 698.586 33.4728C698.211 33.1352 698 32.6774 698 32.2V19.9235M701 19.6V17.8C701 17.3226 701.211 16.8648 701.586 16.5272C701.961 16.1896 702.47 16 703 16H707C707.53 16 708.039 16.1896 708.414 16.5272C708.789 16.8648 709 17.3226 709 17.8V19.6"
                stroke="#C7C7C7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="418"
                y="23"
                width="98"
                height="3"
                rx="1.5"
                fill="#D9D9D9"
              />
              <circle cx="428" cy="25" r="5" fill="#D9D9D9" />
              <rect
                x="540.5"
                y="17.5"
                width="15"
                height="15"
                rx="1.5"
                stroke="white"
              />
              <path
                d="M544 25.375L547.368 28L552 22"
                stroke="white"
                stroke-linecap="round"
              />
              <g clip-path="url(#clip0_5933_276)">
                <path
                  d="M614 28L607 21.5L614 15"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M627 35V26.7273C627 25.4735 626.473 24.2711 625.536 23.3846C624.598 22.4981 623.326 22 622 22H607"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g clip-path="url(#clip1_5933_276)">
                <path
                  d="M664 28L671 21.5L664 15"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M651 35V26.7273C651 25.4735 651.527 24.2711 652.464 23.3846C653.402 22.4981 654.674 22 656 22H671"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <rect
                x="744"
                y="17.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="744"
                y="22.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="744"
                y="27.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="750.25"
                y="17.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="750.25"
                y="22.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="750.25"
                y="27.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <g clip-path="url(#clip2_5933_276)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M180.518 26.587L188.846 17.5489C188.897 17.495 188.938 17.4313 188.964 17.3615C188.991 17.2917 189.003 17.2173 189 17.1428C188.996 17.0682 188.978 16.9951 188.946 16.9277C188.914 16.8604 188.868 16.8002 188.812 16.7509L187.215 15.1535C187.111 15.055 186.974 15 186.832 15C186.689 15 186.552 15.055 186.449 15.1535L177.398 23.471C177.345 23.5227 177.302 23.5846 177.272 23.6532C177.243 23.7218 177.228 23.7955 177.228 23.87C177.228 23.9446 177.243 24.0183 177.272 24.0869C177.302 24.1555 177.345 24.2174 177.398 24.2691L179.719 26.587C179.771 26.6408 179.833 26.6835 179.901 26.7128C179.97 26.742 180.044 26.757 180.119 26.757C180.193 26.757 180.267 26.742 180.336 26.7128C180.404 26.6835 180.466 26.6408 180.518 26.587ZM175.755 25.3561L178.653 28.2605C178.835 28.4269 178.956 28.6494 178.998 28.8925V29.4361C179 30.0206 178.886 30.5997 178.663 31.1401C178.44 31.6805 178.112 32.1717 177.699 32.5853C176.833 33.42 175.802 34.0645 174.672 34.477C173.542 34.8896 172.337 35.0612 171.137 34.9807C170.422 34.9839 169.727 34.7499 169.161 34.3154C169.071 34.2246 169.015 34.1054 169.002 33.9781C168.99 33.8507 169.023 33.7231 169.094 33.617C169.765 32.5346 170.109 31.2815 170.083 30.0087C170.043 29.3327 170.14 28.6555 170.368 28.018C170.597 27.3805 170.953 26.7959 171.414 26.2994C172.247 25.4679 173.377 25.0013 174.556 25.0021C174.737 24.9907 174.919 24.9907 175.1 25.0021C175.35 25.0484 175.579 25.1723 175.755 25.3561Z"
                  fill="#C7C7C7"
                />
              </g>
              <g clip-path="url(#clip3_5933_276)">
                <line
                  x1="215.379"
                  y1="34.8104"
                  x2="234.318"
                  y2="15.8711"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </g>
              <g clip-path="url(#clip4_5933_276)">
                <rect
                  x="261.75"
                  y="15.75"
                  width="18.5"
                  height="18.5"
                  rx="1.25"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                />
              </g>
              <g clip-path="url(#clip5_5933_276)">
                <circle
                  cx="317"
                  cy="25"
                  r="9.25"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                />
              </g>
              <g clip-path="url(#clip6_5933_276)">
                <rect
                  x="353.75"
                  y="15.75"
                  width="18.5"
                  height="18.5"
                  rx="1.25"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M364 26L367 29"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M359 21L362.333 29L363.516 25.5162L367 24.3329L359 21Z"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_bi_5933_276"
                x="-20"
                y="-20"
                width="814"
                height="90"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_5933_276"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_5933_276"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_5933_276"
                />
              </filter>
              <clipPath id="clip0_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(607 15)"
                />
              </clipPath>
              <clipPath id="clip1_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(651 15)"
                />
              </clipPath>
              <clipPath id="clip2_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(169 15)"
                />
              </clipPath>
              <clipPath id="clip3_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(215 15)"
                />
              </clipPath>
              <clipPath id="clip4_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(261 15)"
                />
              </clipPath>
              <clipPath id="clip5_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(307 15)"
                />
              </clipPath>
              <clipPath id="clip6_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(353 15)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </Layout>
  );
};

// 7787817287;

export default Home;

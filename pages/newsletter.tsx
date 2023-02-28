import React from "react";
import Layout from "../components/layout";

export default function newsletter() {
  return (
    <Layout>
      <p className="mt-2 text-center max-w-xl mx-auto">
        I'm building annotate in the open with total transparency. Every Sunday
        I send out an update on how things are going. Sign up below to look
        behind the curtains.
      </p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/building-lotus"
        method="post"
        target="popupwindow"
        className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 mt-3"
      >
        <input type="hidden" name="embed" value="1" />
        <input
          placeholder="Enter your email..."
          aria-label="Email"
          type="email"
          className="px-2 w-full sm:w-80 h-11 text-base rounded-md border border-gray-300 focus:border-gray-300 focus:ring-blue-600 text-gray-700"
          name="email"
        />
        <button
          type="submit"
          className="w-full sm:w-auto p-4 text-base leading-3 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none transition ease-in-out duration-150"
        >
          Get Backstage Pass
        </button>
      </form>
      <div className="container mt-10 mx-auto px-4 sm:px-0" id="features">
        <div>
          <a id="archives">
            <h3 className="text-center text-2xl font-semibold">Archives</h3>
          </a>
          <div className="mt-2 flex justify-center">
            <ul className="space-y-6 max-w-2xl w-full">
              <li className="flex space-x-2">
                <a
                  className="group flex items-start space-x-2 text-gray-100 w-full"
                  href="/24-lotus-is-out-now"
                >
                  <span
                    className="flex-none text-gray-400 inline-block w-8 text-right relative top-0.5"
                    aria-hidden="true"
                  >
                    #1
                  </span>
                  <div className="flex-1">
                    <div className="space-x-2">
                      <span className="text-lg">Annotate is out now!</span>
                      <span
                        className="uppercase text-xs font-semibold rounded px-2 py-1 bg-purple-50 text-purple-600"
                        aria-hidden="true"
                      >
                        New
                      </span>
                      <span className="transition opacity-0 group-hover:opacity-100">
                        →
                      </span>
                    </div>
                    <span className="block text-gray-400">March 1st, 2023</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

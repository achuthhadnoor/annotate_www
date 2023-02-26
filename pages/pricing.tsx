import type { NextPage } from "next";
import Layout from "../components/layout";
import Timer from "../components/timer";

const Pricing: NextPage = () => {
  return (
    <Layout title={"Pricing | Annotate your screen"}>
      <div className="mt-2 flex flex-col items-center">
        <h1 className="max-w-xl text-xl font-semibold text-center ">
          One price. All of the features. Bye bye video editing.
        </h1>
        <Timer type="horizontal" />
        <div className="container mx-auto py-10 px-4 sm:px-0 space-y-10">
          <div className="mt-8 flex justify-center space-x-3 mx-auto">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Yours to keep, forever</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Free updates for a year</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Use on all your Macs</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>5-day money back guarantee</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>No subscription</span>
              </li>
            </ul>
          </div>
          <div className="mt-20 px-10">
            <h2 className="text-center text-xl font-semibold">
              Frequently Asked Questions
            </h2>
            <div className="py-12 px-4">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                <div>
                  <dt className="text-lg leading-6 font-medium text-neutral-100">
                    Is there a trial version?
                  </dt>
                  <dd className="mt-2 text-base text-blue-300">
                    No, unless you are a 👶 (😉).
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-neutral-100">
                    How is my payment processed?
                  </dt>
                  <dd className="mt-2 text-base text-blue-300">
                    All payments are processed through{" "}
                    <a
                      href="https://gumroad.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      Gumroad
                    </a>
                    , an authorized and secure payment processing platform. I
                    never get access to your personal information or credit card
                    details.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-neutral-100">
                    What payment methods are available?
                  </dt>
                  <dd className="mt-2 text-base text-blue-300">
                    You can buy Annotate via a credit or debit card, PayPal and
                    Apple Pay. Price is in USD. VAT may apply.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-neutral-100">
                    Where can I find my license?
                  </dt>
                  <dd className="mt-2 text-base text-blue-300">
                    After a successful purchase, license key will be displayed
                    in the checkout flow and it'll also be emailed to you
                    afterwards. Make sure to also check your Spam folder just in
                    case.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-neutral-100">
                    How many devices I can use per license?
                  </dt>
                  <dd className="mt-2 text-base text-blue-300">
                    There's currently no limit on how many devices you install
                    and use Annotate on. I rely on you being respectful, so
                    please don't share your license key with others and buy a
                    separate license per person.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-neutral-100">
                    Can I buy Annotate for my team?
                  </dt>
                  <dd className="mt-2 text-base text-blue-300">
                    Of course! During the checkout flow you can select the
                    quantity, where you can enter how many people you're buying
                    Annotate for. You'll receive a separate license key per
                    person.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-neutral-100">
                    What happens a year after purchase?
                  </dt>
                  <dd className="mt-2 text-base text-blue-300">
                    Annotate will continue to work as before and it won't annoy
                    you to buy another license. If you want to receive free
                    updates for another year, you will have to extend your
                    license. This is not a subscription, so you won't be charged
                    automatically.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-neutral-100">
                    Does Annotate work on Windows or Linux?
                  </dt>
                  <dd className="mt-2 text-base text-blue-300">
                    No, Annotate is available only for Mac at this moment.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-neutral-100">
                    What if I don't like it?
                  </dt>
                  <dd className="mt-2 text-base text-blue-300">
                    Write me an email at{" "}
                    <a
                      href="mailto:vadim@getAnnotate.app"
                      className="text-white"
                    >
                      vadim@getAnnotate.app
                    </a>{" "}
                    within 30 days of your purchase and I'll send you a refund,
                    no questions asked.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;

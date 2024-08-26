'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import cl from 'classnames'
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NewRoute = () => {
  const [activeFQA, setActiveFQA] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();
  // When element comes into view, set isVisible to true
  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  const faqs = [
    {
      title: "Is there an option to select monitors?",
      des: `No, you can not select one of the external monitors to start recording.
      However, the support for multiple screens is in the roadmap.`,
    },
    {
      title: "Is there a Windows app?",
      des: "Yes, it is coming soon",
    },
    {
      title: "Do you offer a trial?",
      des: "We didn’t implement a trial yet, but no worries—feel free to purchase the app. If you’re not happy send a short message. We’ll refund your order within 7 days of purchase.",
    },
    {
      title: "Something’s wrong. How do I get in touch?",
      des: "Drop us a line, we’ll be happy to help!",
    },
    {
      title: "The menubar app doesn’t work. What can I do?",
      des: "No permissions are required",
    },
    {
      title: "How much memory does Annotate use?",
      des: "Annotate uses ~150MB ",
    },
    {
      title: "Will you update Annotate?",
      des: "One year of updates with the license purchased. And from the next year with 40% discounted renewal you can keep getting updates",
    },
  ];
  return (
    <>
      <section className="flex flex-col gap-24 pb-32">
        <motion.div className="flex flex-col items-center md:flex-row text-center md:text-left gap-24 md:gap-2">
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }}
              transition={{ duration: 0.4 }}
              className="max-w-sm text-4xl font-bold"><span className='inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>Annotate</span> any <span className='inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>Screen</span> or <span className='inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>App</span> while screen Recording✨</motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }}
              transition={{ duration: 0.4, delay: 0.1, opacity: 1, skew: 0 }}
              className="text-neutral-300">
              <p>Present Screen like a pro</p>
              <span>Click → Draw → Clear</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }}
              transition={{ duration: 0.4, delay: 0.2 }}>
              <div className="flex gap-2 justify-center md:justify-start">
                <Link href={'https://gum.co/annotate'}>
                  <button className="rounded-md bg-neutral-200 px-4 py-2 text-indigo-950">Purchase license</button>
                </Link>
                {/* <button className="rounded-md bg-indigo-500 px-4 py-2">Download Trail</button> */}
              </div>
              <span className="text-xs text-neutral-500">macOS 10.15+ Intel, Apple Silicon and Windows</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
            animate={{
              scale: 1,
              opacity: 1, skew: 0,
              translateY: 0
            }}
            transition={{ duration: 0.4, delay: 0.1, opacity: 1, skew: 0 }} className="w-full mx-auto max-w-2xl">
            <div className="my-3 aspect-video md:my-0 flex-grow-2 order-2 md:order-1">
              <iframe
                width="100%"
                height="110%"
                src={`https://www.youtube.com/embed/2wyEc-2t-ek`}
                title="YouTube video player"
                allowFullScreen
                className="mx-auto rounded-2xl"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
          animate={{
            scale: 1,
            opacity: 1, skew: 0,
            translateY: 0
          }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex gap-2 text-center justify-center">
          <Image
            src="/leaf_left.png"
            alt="leaf-left"
            height={25}
            width={100}
            className='opacity-45'
          />
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg">5.0 User Rating</span>
            <span className="text-2xl leading-loose">⭐️⭐️⭐️⭐️⭐️</span>
            <div className="my-2 flex flex-col items-center gap-2 text-sm sm:flex-row">
              <span>Used by </span>
              <span className="[&>*]:border-primary my-1 ml-1 flex -space-x-2  [&>*]:inline-block [&>*]:h-6 [&>*]:w-6 [&>*]:rounded-full [&>*]:border-2 [&>*]:sm:h-8 [&>*]:sm:w-8">
                <Image
                  src="/avatars/catz.jpg"
                  alt="Catz"
                  height={25}
                  width={25}
                  className="rounded-full ring-1 ring-green-400"
                />
                <Image
                  src="/avatars/epitomi.png"
                  alt="epitomi"
                  height={25}
                  width={25}
                  className="rounded-full ring-1 ring-green-400"
                />
                <Image
                  src="/avatars/mikkel.jpg"
                  alt="mikkel"
                  height={25}
                  width={25}
                  className="rounded-full ring-1 ring-green-400"
                />
                <Image
                  src="/avatars/afvallenzondergedoe.png"
                  alt="afvallenzondergedoe"
                  height={25}
                  width={25}
                  className="rounded-full ring-1 ring-green-400"
                />
                <Image
                  src="/avatars/Aileenooi.jpeg"
                  alt="Aileenooi"
                  height={25}
                  width={25}
                  className="rounded-full ring-1 ring-green-400"
                />
                <Image
                  src="/avatars/crystal.png"
                  alt="crystal"
                  height={25}
                  width={25}
                  className="rounded-full ring-1 ring-green-400"
                />
              </span>
              <span className="text-center md:text-left">
                & more happy users!
              </span>
            </div>
          </div>
          <Image
            src="/leaf_right.png"
            alt="leaf-right"
            height={25}
            width={100}
            className='opacity-45'
          />
        </motion.div>
      </section>
      <main ref={ref}>
        <AnimatePresence>
          {isVisible && (
            <motion.section initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }} transition={{ delay: 0.3 }} className='flex flex-col-reverse md:flex-row my-24 items-center gap-4'>
              <video autoPlay loop controls playsInline className='flex-1 max-w-xl ring-2 rounded-md ring-teal-700 w-full'>
                <source src="/assets/brush tool.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col gap-4 px-4 flex-1">
                <h2 className="text-4xl font-semibold">Sketch with <i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Free draw</i> tool</h2>
                <p>Draw freely using the <i className="rounded bg-teal-800 px-2 py-1">brush</i> tool to make markings across the screen to point something out. You can also change the colors to show different parts oof the screen. </p>
              </div>
            </motion.section>)}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.section initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }} transition={{ delay: 0.3 }} className='flex flex-col-reverse md:flex-row my-24 items-center gap-4'>
              <div className="flex flex-col gap-4 px-4 flex-1">
                <h2 className="text-4xl font-semibold">Use <i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Cursor Focus</i> tool</h2>
                <p>This helps you to bring user <i className="rounded bg-teal-800 px-2 py-1">focus</i> to follow the cursor during explanation. </p>
              </div>
              <video autoPlay loop controls playsInline className='flex-1 max-w-xl ring-2 rounded-md ring-teal-700 w-full'>
                <source src="/assets/focus tool.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.section>)}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.section initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }} transition={{ delay: 0.3 }} className='flex flex-col md:flex-row my-24 items-center gap-4'>
              <video autoPlay loop controls playsInline className='flex-1 max-w-xl ring-2 rounded-md ring-teal-700 w-full'>
                <source src="/assets/shapes tool.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex flex-col gap-4 px-4 flex-1">
                <h2 className="text-4xl font-semibold">Shapes like <i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">line, rectangle and circle</i> tools</h2>
                <p>Illustrate using <i className="rounded bg-teal-800 px-2 py-1">shapes</i> to point more specific points on the screen. For example, selecting a paragraph or a section </p>
              </div>
            </motion.section>)}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.section initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }} transition={{ delay: 0.3 }} className='flex flex-col my-24 items-center gap-4'>
              <h2 className="text-4xl font-semibold text-center"><i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Coming Soon</i> </h2>
              <p>The usual stuff to speedup the workflow</p>
              <ul className='p-2 flex flex-col gap-2'>
                <li>✔︎ Toggle with ⌘ + 7</li>
                <li>✔︎ Keyboard shortcuts</li>
                <li>✔︎ Cursor highlight</li>
                <li>✔︎ Translucent fill in shapes</li>
                <li>✔︎ Hide the toolbar</li>
              </ul>
            </motion.section>)}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.section initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }} transition={{ delay: 0.3 }} className='flex flex-col my-24 items-center gap-4 text-center'>
              <h2 className="text-4xl font-semibold text-center"><i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Download Now</i> </h2>
              <p>Pay once and use forever</p>
              <div className='space-y-4'>
                <div className="flex gap-2 justify-center md:justify-start">
                  <Link href={'https://gum.co/annotate'}>
                    <button className="rounded-md bg-neutral-200 px-4 py-2 text-indigo-950">Purchase license</button>
                  </Link>
                  {/* <button className="rounded-md bg-indigo-500 px-4 py-2">Download Trail</button> */}
                </div>
                <span className="text-xs text-neutral-500">macOS 10.15+ Intel, Apple Silicon and Windows</span>
                <div> 5.0 ⭐⭐⭐⭐⭐ Based on User Feedback</div>
              </div>
            </motion.section>)}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.section initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }} transition={{ delay: 0.3 }} className='flex flex-col my-24 items-center gap-4'>
              <h2 className="text-4xl font-semibold text-center">People<i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Love</i> Annotate </h2>
              <p>Read from the customers</p>
              <div className="grid-col-1 grid gap-7 md:grid-cols-2">
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
                  <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
                    <Image
                      className="rounded-md"
                      src={"https://ph-avatars.imgix.net/5403718/959ed060-fae5-49bf-990e-b03b598a69f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=2"}
                      alt={"Medias"}
                      width={75}
                      height={75}
                      blurDataURL="data:..."
                      placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                        Alvaro Villalba Perez
                        </h5>
                        <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                        </div>
                      </div>
                      <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                      Co-founder at Clous
                      </p>
                    </div>
                  </div>
                  <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased flex">
                      {` "We really need this app. I'd use it with clients, employees, etc. 
                      Having an annotation tool fully embedded in the MacOS UI is just great. 
                      Congrats to the team. Best launch today! "`}
                    </p>
                  </div>
                </div>
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
                  <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
                    <Image
                      className="rounded-full"
                      src={"https://ph-avatars.imgix.net/282542/92c275a6-1d2e-45e0-8d14-9a76a64c5dca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop"}
                      alt={"Mikkel"}
                      width={75}
                      height={75}
                      blurDataURL="data:..."
                      placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                        Musharof Chowdhury
                        </h5>
                        <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                        </div>
                      </div>
                      <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                      Founder @Pimjo
                      </p>
                    </div>
                  </div>
                  <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {`"Awesome app! I can understand how much effort you put into making it live.
                      I would like to suggest that you move this into a separate domain and make the pricing more clear.
                      Goodluck!"`}
                    </p>
                  </div>
                </div>
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
                  <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
                    <Image
                      className="rounded-full"
                      src={"https://ph-avatars.imgix.net/1996202/605143d4-9c09-4cc0-8fb2-dcdbcf9cc632.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop"}
                      alt={"Screen recording"}
                       width={75}
                      height={75}
                      blurDataURL="data:..."
                      placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                        Garen Orchyan
                        </h5>
                        <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                        </div>
                      </div>
                      <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                        ProductHunt User
                      </p>
                    </div>
                  </div>
                  <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {`"Looks super. Big congrats on the launch, best of luck today 🦄🎉"`}
                    </p>
                  </div>           
                </div>
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
                  <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
                    <Image
                      className="rounded-full"
                      src={"https://ph-avatars.imgix.net/6641216/original.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop"}
                      alt={"Screen recording"}
                      width={75}
                      height={75}
                      blurDataURL="data:..."
                      placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                        dvss karthick
                        </h5>
                        <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                        </div>
                      </div>
                      <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                      ProductHunt User
                      </p>
                    </div>
                  </div>
                  <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased justify-between">
                      {`Good luck on the Launch!!Looks like a great companion for recording interactive videos!`}
                    </p>
                  </div>
                </div>
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
                  <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
                    <Image
                      className="rounded-full"
                      src={"https://ph-avatars.imgix.net/4218825/47fe3260-9d32-405a-9a89-784f84a3d7b8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop"}
                      alt={"epitomi"}
                      width={75}
                      height={75}
                      blurDataURL="data:..."
                      placeholder="blur" // Optional blur-up while loading
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                        Abhishek Dutta
                        </h5>
                        <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                        </div>
                      </div>
                      <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                      UX designer and founder @ Team Codesign
                      </p>
                    </div>
                  </div>
                  <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {`Hey @achuthhadnoor, so this looks like another amazing product coming from your repository. You have been an amazing maker and have been indie-hacking a lot of amazing stuff and putting it across for all of the Product Hunt community.
                      Excited to see you here again with this amazing product and I think — and I completely believe — that this will be a fit for a lot of meeting hoggers like me. I'm looking forward to trying this one out.
                      Thank you for such an amazing product once again. This looks, this looks amazing, exciting, thanks for you, for sure.`}
                    </p>
                  </div>
                </div>

              </div>
            </motion.section>)}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.section initial={{ opacity: 0, scale: 0.98, translateY: 15, skew: 1 }}
              animate={{
                scale: 1,
                opacity: 1, skew: 0,
                translateY: 0
              }} transition={{ delay: 0.3 }} className="flex flex-col gap-2 my-10">
              <h2 className="mb-10 mt-5 text-6xl font-bold text-center">FAQ</h2>
              <ul className="max-w-auto w-full max-w-3xl rounded-lg bg-neutral-200 dark:bg-neutral-800  justify-center mx-auto">
                {faqs.map((faq, index) => (
                  <li
                    key={index}
                    className="mb-2 border-b-[1px] border-b-neutral-900"
                    onClick={() => {
                      setActiveFQA(index);
                    }}
                  >
                    <div className=" flex justify-between px-4 py-2">
                      <h3 className="text-lg">{faq.title}</h3>
                      <span className="flex items-center p-2">
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
                        "px-4 py-2 text-neutral-600 transition ease-linear dark:text-neutral-400"
                      )}
                    >
                      {faq.des}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.section>)}
        </AnimatePresence>

      </main>

    </>
  )
}
export default NewRoute;
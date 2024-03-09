import Image from 'next/image';
import React from 'react'

const NewRoute = () => {
  return (
    <>
      <section className="flex flex-col gap-24">
        <div className="flex flex-col items-center md:flex-row text-center md:text-left gap-24 md:gap-2">
          <div className="flex flex-col gap-4">
            <h1 className="max-w-sm text-4xl font-bold"><span className='inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>Annotate</span> any <span className='inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>Screen</span> or <span className='inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>App</span> while screen Recording✨</h1>
            <div className="text-neutral-300">
              <p>Present Screen like a pro</p>
              <span>Click → Draw → Clear</span>
            </div>
            <div>
              <div className="flex gap-2 justify-center md:justify-start">
                <button className="rounded-md bg-neutral-200 px-4 py-2 text-indigo-950">Purchase license</button>
                <button className="rounded-md bg-indigo-500 px-4 py-2">Download Trail</button>
              </div>
              <span className="text-xs text-neutral-500">macOS 10.15+ Intel, Apple Silicon and Windows</span>
            </div>
          </div>
          <div className="w-full mx-auto max-w-2xl">
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
          </div>
        </div>
        <div className="flex gap-2 text-center justify-center">
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
                + hundteals of happy users!
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
        </div>
      </section>
      <section className='flex flex-col-reverse md:flex-row my-24 items-center gap-4'>
        <video autoPlay loop controls playsInline className='flex-1 max-w-xl ring-2 rounded-md ring-teal-700 w-full'>
          <source src="/assets/brush tool.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col gap-4 px-4 flex-1">
          <h2 className="text-4xl font-semibold">Sketch with <i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Free draw</i> tool</h2>
          <p>Draw freely using the <i className="rounded bg-teal-800 px-2 py-1">brush</i> tool to make markings across the screen to point something out. You can also change the colors to show different parts oof the screen. </p>
        </div>
      </section>
      <section className='flex flex-col md:flex-row my-24 items-center gap-4'>
        <div className="flex flex-col gap-4 px-4 flex-1">
          <h2 className="text-4xl font-semibold">Shapes like <i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">line, rectangle and circle</i> tools</h2>
          <p>Illustrate using <i className="rounded bg-teal-800 px-2 py-1">shapes</i> to point more specific points on the screen. For example, selecting a paragraph or a section </p>
        </div>
        <video autoPlay loop controls playsInline className='flex-1 max-w-xl ring-2 rounded-md ring-teal-700 w-full'>
          <source src="/assets/shapes tool.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className='flex flex-col-reverse md:flex-row my-24 items-center gap-4'>
        <video autoPlay loop controls playsInline className='flex-1 max-w-xl ring-2 rounded-md ring-teal-700 w-full'>
          <source src="/assets/focus tool.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col gap-4 px-4 flex-1">
          <h2 className="text-4xl font-semibold">Use <i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Cursor Focus</i> tool</h2>
          <p>This helps you to bring user <i className="rounded bg-teal-800 px-2 py-1">focus</i> to follow the cursor during explanation. </p>
        </div>
      </section>
      <section className='flex flex-col my-24 items-center gap-4'>
        <h2 className="text-4xl font-semibold text-center"><i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Coming Soon</i> </h2>
        <p>The usual stuff to speedup the workflow</p>
        <ul className='p-2 flex flex-col gap-2'>
          <li>✔︎ Toggle with ⌘ + 7</li>
          <li>✔︎ Keyboard shortcuts</li>
          <li>✔︎ Cursor highlight</li>
          <li>✔︎ Translucent fill in shapes</li>
          <li>✔︎ Hide the toolbar</li>
        </ul>
      </section>
      <section className='flex flex-col my-24 items-center gap-4 text-center'>
        <h2 className="text-4xl font-semibold text-center"><i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Download Now</i> </h2>
        <p>Pay once and use forever</p>
        <div className='space-y-4'>
          <div className="flex gap-2 justify-center md:justify-start">
            <button className="rounded-md bg-neutral-200 px-4 py-2 text-indigo-950">Purchase license</button>
            <button className="rounded-md bg-indigo-500 px-4 py-2">Download Trail</button>
          </div>
          <span className="text-xs text-neutral-500">macOS 10.15+ Intel, Apple Silicon and Windows</span>
          <div> 5.0 ⭐⭐⭐⭐⭐ Based on User Feedback</div>
        </div>
      </section>
      <section className='flex flex-col my-24 items-center gap-4'>
        <h2 className="text-4xl font-semibold text-center">People<i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Love</i> Annotate </h2>
        <p>Read from the customers</p>
        <div className="grid-col-1 grid gap-7 md:grid-cols-2">
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-md"
                src={"/avatars/default.png"}
                alt={"Medias"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    Medias
                  </h5>
                  <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Great timesaver!
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {` "So far, I've been using different software for my timelapse
                recordings, but I've always had to do a framerate conversion
                afterwards. I just wanted to give a shoutout to Achuth for being
                incredibly helpful in the embedded chat on his website. He
                responded super quickly. Best wishes! "`}
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-full"
                src={"/avatars/mikkel.jpg"}
                alt={"Mikkel"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    Mikkel
                  </h5>
                  <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Appsumo user
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {`"I found solution to all my design needs from Creative Tim. I
                use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!"`}
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-full"
                src={"/avatars/saasMaster.png"}
                alt={"Screen recording"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    SaasMaster
                  </h5>
                  <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Exactly as advertised
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {`Lapse can record your screen in high speed mode. Not really a work tool but more of a cool gadget. You can record your workflow or your day work and display it in a quick video.

                PROS:
                Works just like advertised
                Records up to 8K
                Available for Windows and Mac
                Unlimited recordings
                Frame rate selection

                CONS:
                No regular recording
                Not direct install from App Store (mac) permission is required to install

                Video example here: https://youtu.be/EJJOjh8pZFM
`}
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-full"
                src={"/avatars/epitomi.png"}
                alt={"epitomi"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    Epitomi
                  </h5>
                  <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Good but needs more basic features
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {` Pros [+] It exports easily [+] It does what it supposed to do
                Cons [-] No custom region yet [-] No focus on specific app yet
                [-] No basic effects editor (i.e. put a rectangle or an arrow)
                [-] No web dashboard app for knowing we own it besides receipt`}
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl  bg-clip-border  p-4 shadow-none bg-neutral-800/80">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0  shadow-none">
              <Image
                className="rounded-full"
                src={"/avatars/default.png"}
                alt={"Screen recording"}
                width={75}
                height={75}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    Xeferus
                  </h5>
                  <div className="5 flex items-center gap-0">⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
                  Works great!
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {`I love Lapse, It's a pretty cool piece of software. It works as
                advertised and the quality of footage is great. My only request
                would be to add a GIF convertor and dual screen recording
                (currently you can record on the active screen).`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col my-24 items-center gap-4'>
        <h2 className="text-4xl font-semibold text-center"><i className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Free to use</i> </h2>
        <p>Try it for free now</p>
        <div>
          <div className="flex gap-2 justify-center">
            <button className="rounded-md bg-indigo-500 px-4 py-2">Download Trail</button>
          </div>
          <span className="text-xs text-neutral-500">macOS 10.15+ Intel, Apple Silicon and Windows</span>
          <div>⭐⭐⭐⭐⭐ 5.0 Based on User Review</div>
        </div>
      </section>
    </>
  )
}
export default NewRoute;
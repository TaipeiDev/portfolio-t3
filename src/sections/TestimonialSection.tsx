import React from "react";

export function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Here is what people say about me...
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-6 text-center sm:mt-12 lg:mt-20 lg:max-w-full lg:grid-cols-3 xl:gap-x-12">
          <div className="overflow-hidden rounded-md bg-white shadow">
            <div className="px-8 py-12">
              <div className="relative mx-auto h-24 w-24">
                <img
                  className="relative mx-auto h-24 w-24 rounded-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    className="h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="mt-7">
                <p className="text-lg text-black">
                  “Really good. Wow what great service, I love it! Marcin
                   should be nominated for developer of the year.
                   Not able to tell you how happy I am with Marcin.”
                </p>
              </blockquote>
              <p className="tex-tblack mt-9 text-base font-semibold">
                Jenny Wilson
              </p>
              <p className="mt-1 text-base text-gray-600">
                Project Manager at Microsoft
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-md bg-white shadow">
            <div className="px-8 py-12">
              <div className="relative mx-auto h-24 w-24">
                <img
                  className="relative mx-auto h-24 w-24 rounded-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    className="h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="mt-7">
                <p className="text-lg text-black">
                  “I like Marcin more and more each day because he makes my
                  life a lot easier. Thanks to Marcin, we&apos;ve just launched our
                  5th website!”
                </p>
              </blockquote>
              <p className="tex-tblack mt-9 text-base font-semibold">
                Robert Fox
              </p>
              <p className="mt-1 text-base text-gray-600">
                Founder at Brain.co
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-md bg-white shadow">
            <div className="px-8 py-12">
              <div className="relative mx-auto h-24 w-24">
                <img
                  className="relative mx-auto h-24 w-24 rounded-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    className="h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="mt-7">
                <p className="text-lg text-black">
                  “If you want real marketing that works and effective
                  implementation - Marcin&apos;s got you covered.
                  Since I invested in Marcin I made over 100,000 dogecoins.”
                </p>
              </blockquote>
              <p className="tex-tblack mt-9 text-base font-semibold">
                Kristin Watson
              </p>
              <p className="mt-1 text-base text-gray-600">
                UX Designer at Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;

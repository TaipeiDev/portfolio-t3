import React from "react";

function SkillSection() {
  return (
    <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Numbers tell our story
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3 lg:mt-24">
          <div>
            <h3 className="text-7xl font-bold">
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                6+{" "}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Years in business
            </p>
            <p className="mt-0.5 text-base text-gray-500">
              Creating the successful path
            </p>
          </div>

          <div>
            <h3 className="text-7xl font-bold">
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                4821{" "}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Projects delivered
            </p>
            <p className="mt-0.5 text-base text-gray-500">In last 6 years</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold">
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                37+{" "}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">Team members</p>
            <p className="mt-0.5 text-base text-gray-500">
              Working for your success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;

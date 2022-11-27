import { Stats } from "fs";
import React from "react";

const content = {
  title: (
    <span>
      My <span className="text-purple-500">2022</span> Stats
    </span>
  ),
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis",
  stats: [
    {
      number: 11,
      label: "Projects",
      description: "Projects I built or helped on",
    },
    {
      number: "1300+",
      label: "Deploys",
      description: "Deployed to Production",
    },
    {
      number: 3,
      label: "Micro-SasS",
      description: "Created 3 Commercial Products",
    },
  ],
};

export function StatSection() {
  return (
    <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            {content.description}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3 lg:mt-24">
          {content.stats &&
            content.stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-7xl font-bold">
                  <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-base text-gray-500">
                  {stat.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default StatSection;

import Image from "next/image";
import React from "react";
// import projectPlaceHolder from "./assets/projects/project.png";
import mandarinProjectPhoto from "./assets/projects/mandarin.png";
import taipeiDevProjectPhoto from "./assets/projects/taipeidev.png";
import portfolioT3ProjectPhoto from "./assets/projects/website.png";

const content = {
  title: `My Projects`,
  description: (
    <div>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis.
    </div>
  ),
  projects: [
    {
      photo: mandarinProjectPhoto,
      title: "Taipei.dev",
      description:
        "Entertaining, Easy & Free way to learn real world Mandarin on the go! Learn to Read, Write & Speak Mandarin while watching shows",
      url: "https://mandarin.marcincebula.com",
    },
    {
      photo: taipeiDevProjectPhoto,
      title: "Mandarin Learning App",
      description:
        "Free Code & Design bootcamp. Learn Javascript, Typescript, ReactJS, NextJS, Figma, HTML, CSS and more every Wednesday here in Taipei, Taiwan",
      url: "https://taipei.dev",
    },
    {
      photo: portfolioT3ProjectPhoto,
      title: "Dev Portfolio Builder",
      description:
        "Forkable, hightly customizable Dev Portfolio Builder with an assortment of components specifically designed for Devs in mind. It's powered by the T3 Stack and can be deployed anywhere but it was designed in mind to run on Vercel",
      url: "https://github.com/TaipeiDev/portfolio-t3",
    },
  ],
};

export function ProjectSection() {
  return (
    <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <div className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            {content.description}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:gap-10">
          {content.projects &&
            content.projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col items-center justify-around space-y-2 border p-2"
              >
                <Image
                  className="aspect-[4/3] h-40 w-40 object-cover p-4"
                  src={project.photo}
                  alt={project.title}
                />
                <div className="pt-4 text-center">
                  <p className="text-xl font-semibold text-black">
                    {project.title}
                  </p>
                </div>
                <div className="px-2 pt-2 text-center text-sm leading-relaxed text-slate-500">
                  {project.description}
                </div>
                <div className="pt-6">
                  <a className="btn w-full rounded-md" href={project.url}>
                    See it Live
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;

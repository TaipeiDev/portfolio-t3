import React from "react";
import {
  CSSSKill,
  HTMLSkill,
  JavascriptSkill,
  NextJSSkill,
  NodeJSSkill,
  ReactJSSkill,
  TailwindSkill,
  TypeScriptSkill,
} from "../components/Skills";

const content = {
  title: "I'm a Pro! Check out ma'skills!",
  description: null,
  // description: (
  //   <p>
  //     Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
  //     consectetur, adipisci velit
  //   </p>
  // ),
  skills: {
    typescript: {
      love: 5,
      skill: 4.5,
    },
    javascript: {
      love: 3,
      skill: 5,
      description: null,
    },
    nextJS: {
      love: 4.5,
      skill: 4.5,
      description: null,
    },
    reactJS: {
      love: 4.5,
      skill: 4.5,
      description: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit`,
    },
    nodeJS: {
      love: 3.5,
      skill: 4,
      description: null,
    },
    tailwind: {
      love: 5,
      skill: 5,
      description: null,
    },
    html: {
      love: 5,
      skill: 5,
      description: null,
    },
    css: {
      love: 5,
      skill: 5,
      description: null,
    },
  },
};

export function SkillSection() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            <span className="border-b-4 border-yellow-400">
              {content.title}
            </span>
          </h2>
          {content.description && (
            <div className="flex flex-col space-y-1 px-4 pt-3">
              <p className="text-center text-base leading-relaxed text-gray-500">
                {content.description}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-2 xl:gap-10">
          {content.skills.typescript && (
            <TypeScriptSkill {...content.skills.typescript} />
          )}

          {content.skills.javascript && (
            <JavascriptSkill {...content.skills.javascript} />
          )}

          {content.skills.nextJS && <NextJSSkill {...content.skills.nextJS} />}

          {content.skills.reactJS && (
            <ReactJSSkill {...content.skills.reactJS} />
          )}

          {content.skills.nodeJS && <NodeJSSkill {...content.skills.nodeJS} />}

          {content.skills.tailwind && (
            <TailwindSkill {...content.skills.tailwind} />
          )}
          {content.skills.html && <HTMLSkill {...content.skills.html} />}
          {content.skills.css && <CSSSKill {...content.skills.css} />}

          {/* You can create your own and add here. Check out how SkillWidget Works */}
        </div>
      </div>
    </section>
  );
}

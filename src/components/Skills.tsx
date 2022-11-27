import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactJSIcon,
  T3StackIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./SkillIcons";
import SkillWidget from "./SkillWidget";

export type SkillProps = {
  love: number;
  skill: number;
  description?: string | null;
};

export const T3StackSkill = (props: SkillProps) => (
  <SkillWidget {...props} title="T3 Stack" icon={<T3StackIcon />} />
);
export const TypeScriptSkill = (props: SkillProps) => (
  <SkillWidget {...props} title="Typescript" icon={<TypeScriptIcon />} />
);

export const JavascriptSkill = (props: SkillProps) => (
  <SkillWidget {...props} title="Javascript" icon={<JavaScriptIcon />} />
);

export const NextJSSkill = (props: SkillProps) => (
  <SkillWidget {...props} title="NextJS" icon={<NextJSIcon />} />
);

export const ReactJSSkill = (props: SkillProps) => (
  <SkillWidget {...props} title="ReactJS" icon={<ReactJSIcon />} />
);

export const NodeJSSkill = (props: SkillProps) => (
  <SkillWidget {...props} title="NodeJS" icon={<NodeJSIcon />} />
);

export const TailwindSkill = (props: SkillProps) => (
  <SkillWidget {...props} title="Tailwind" icon={<TailwindIcon />} />
);

export const HTMLSkill = (props: SkillProps) => (
  <SkillWidget {...props} title="HTML" icon={<HTMLIcon />} />
);

export const CSSSKill = (props: SkillProps) => (
  <SkillWidget {...props} title="CSS" icon={<CSSIcon />} />
);

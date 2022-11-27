import LoveRating from "./LoveRating";
import SkillRating from "./SkillRating";

export const SkillWidget = ({
  title,
  icon,
  love,
  skill,
  description,
}: {
  title: string;
  icon: JSX.Element;
  love: number;
  skill: number;
  description?: string | null;
}) => (
  <div className="overflow-hidden rounded border border-stone-200 bg-white py-2 font-mono">
    <div className="flex flex-col justify-center pb-2 text-center">
      <h2 className="text-2xl font-semibold text-black">{title}</h2>
    </div>
    <div className="py-2">
      <div className="flex items-center justify-center">
        <div className="h-24 w-24 p-2 md:p-0">{icon}</div>
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <div className="grid grid-cols-2 items-center justify-center gap-y-2">
            <h3 className="px-2 text-left text-xl  text-slate-500">Love</h3>
            <LoveRating rating={love} id={title} />
            <h3 className="px-2 text-left text-xl  text-slate-500">Skill</h3>
            <SkillRating rating={skill} id={title} />
          </div>
        </div>
      </div>
      {description && (
        <div className="flex flex-col space-y-1 px-4 pt-3">
          <p className="text-center text-base leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
      )}
    </div>
  </div>
);

export default SkillWidget;

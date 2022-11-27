import Lottie from "react-lottie";
import { replaceColor } from "lottie-colorify";
import scrollDownIconData from "./AnimatedIcons/scrolldown.json";

export const ScrollDownIcon = () => {
  const r1 = replaceColor("#33CCCC", "#9333ea", scrollDownIconData);
  const r2 = replaceColor("#000000", "#1e293b", r1);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: r2,
    renderer: "svg",
  };

  return <Lottie options={defaultOptions} />;
};

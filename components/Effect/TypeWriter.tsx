"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[100%]  ">
      <TypewriterEffectSmooth words={words} />
           {/* <p className="text-gray-400 text-sm">trhthrht</p>
              <p className="text-gray-600 leading-relaxed text-md mt-5">trhthrht</p> */}
    </div>
  );
}

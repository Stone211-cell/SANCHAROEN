import { CometCard } from "@/components/ui/comet-card";
import Image from "next/image";

export function CometCardDemo() {
  return (
    <CometCard>
      <button
        type="button"
        className="my-13 flex w-70 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4 md:w-90"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4]">
            <Image
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000]  object-cover scale-100 "
              alt="Invite background"
              src="/รูปพี่อาท.jpg"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
              fill
            />
          </div>
        </div>
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">เครษฐกรณ์ ภูสิทธิ์คุณานนท์  </div>
          <div className="text-xs text-gray-300 opacity-50">อาท</div>
        </div>
      </button>
    </CometCard>
  );
}

import {
  ViewpointCardL,
  ViewpointCardR,
} from "@/components/Card/Cardcomponent";
import { CometCardDemo } from "@/components/Card/CometAboutUs";

import Mapcontactdetail from "@/components/Contacted/Mapcontactdetail";
import { TypewriterEffectSmoothDemo } from "@/components/Effect/TypeWriter";

const page = () => {
  return (
    <div>
      <div className="flex justify-center text-center text-9xl">Banner</div>
      <h2 className="text-3xl font-semibold mt-15">
        <TypewriterEffectSmoothDemo />
      </h2>
      <div className="mx-auto w-3/5">
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div>
            <CometCardDemo />
          </div>

          <div className="flex-1 text-gray-800 text-start mx-20">
            <h2 className="text-3xl font-semibold">
              เครษฐกรณ์ ภูสิทธิ์คุณานนท์ (อาท){" "}
            </h2>
            <p className="text-gray-400 text-sm">ผู้จัดการ</p>
            <p className="text-gray-800 leading-relaxed text-md mt-5 mb-25">
              ให้คำปรึกษา ออกแบบ ติดตั้งงานระบบลำเลียง จำหน่ายอะไหล่ part
              โรงงานสกัดน้ำมันปาล์ม โรงงานยางพารา จำหน่ายฉนวนกันความร้อน
              วัสดุทนไฟ ตลับลูกปืน เฟือง โซ่ลำเลียง สายพาน วัสดุ อุปกรณ์
              โรงงานอุตสาหกรรม <br/>
               Procurement-Import of all types of machinery and
              spare parts.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 mb-25">
        <ViewpointCardL
          texthead="อะไหล่ดี มีคุณภาพ"
          des="หาอะไหล่เหล็กไม่เจอ? มาที่นี่ มีครบทุกแบบ!
เรามีอะไหล่เหล็กทุกขนาด ทุกประเภท พร้อมให้เลือกสรร
สินค้าคุณภาพดี ราคายุติธรรม ส่งไวถึงหน้าบ้านคุณ"
          scr="/อะไหล่.jpg"
        />
        <ViewpointCardL
          texthead="ครบ จบ ที่เดียว"
          des="ครบทุกอะไหล่เหล็กสำหรับงานช่างและอุตสาหกรรม
ตั้งแต่ชิ้นเล็กถึงชิ้นใหญ่ เรามีพร้อมให้เลือกในที่เดียว"
          scr="/อะไหร่1.jpg"
        />
        <ViewpointCardR
          texthead="เหล็กแท้ มาตรฐานโรงงาน"
          des="อะไหล่ทุกชิ้นคือเหล็กคุณภาพสูง ทนทาน ใช้งานได้ยาวนาน
เหมาะสำหรับงานช่างทั่วไปจนถึงอุตสาหกรรม
มั่นใจได้ทั้งคุณภาพ ราคา และการจัดส่งที่รวดเร็ว"
          scr="/อะไหร่2.jpg"
        />
      </div>

      <div>
        <Mapcontactdetail />
      </div>
    </div>
  );
};
export default page;

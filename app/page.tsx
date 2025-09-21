import { ViewpointCardL,ViewpointCardR } from "@/components/Card/Cardcomponent"
import { CometCardDemo } from "@/components/Card/CometAboutUs"

import Mapcontactdetail from "@/components/Contacted/Mapcontactdetail"
import { TypewriterEffectSmoothDemo } from "@/components/Effect/TypeWriter"

const page = () => {
  return (
    <div>
      
      <div className="flex justify-center text-center text-9xl">Banner</div>
  <h2 className="text-3xl font-semibold mt-15"><TypewriterEffectSmoothDemo/></h2>
      <div className="mx-auto w-3/5">
        <div className="flex flex-col justify-center items-center md:flex-row">

          <div><CometCardDemo/></div>

         <div className="flex-1 text-gray-800 text-start mx-20">
        <h2 className="text-3xl font-semibold">trhthrht</h2>
        <p className="text-gray-400 text-sm">trhthrht</p>
        <p className="text-gray-600 leading-relaxed text-md mt-5 mb-25">trhthrht</p>
      </div>

        </div>
      </div>

      <div className="space-y-8 mb-25">

      <ViewpointCardL texthead="sadssaddsa" des="dsasdadsasd" scr="/อะไหล่.jpg"/>
      <ViewpointCardL texthead="sadssaddsa" des="dsasdadsasd" scr="/อะไหล่.jpg"/>
      <ViewpointCardR texthead="sadssaddsa" des="dsasdadsasd" scr="/อะไหล่.jpg"/>
      </div>


      <div>
        <Mapcontactdetail/>
      </div>
    </div>
  )
}
export default page
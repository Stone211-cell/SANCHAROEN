import Image from "next/image";

type Viewpointtype = {
  texthead: string;
  des: string;
  scr: string;
  cls?: string;
  ty ?: string
};
export const ViewpointCardL = ({ texthead, des, scr, cls,ty }: Viewpointtype) => {
  return (
   <div className="mx-auto w-3/5">
    <div
      className={`flex flex-col md:flex-row md:justify-center justify-start md:gap-6 p-3 md:p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ${cls}`}
    >
      {/* Image */}
      <div className="relative w-full md:w-2/4 h-100 rounded-xl overflow-hidden">
        <Image
          src={scr}
          alt={texthead}
          fill
          className="object-cover hover:scale-105 transition duration-500"
          />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-gray-800 text-start pt-5">
        <h2 className="text-3xl font-semibold">{texthead}</h2>
        <p className="text-gray-400 text-sm">{ty}</p>
        <p className="text-gray-600 leading-relaxed text-md mt-5">{des}</p>
      </div>
    </div>
    </div>
   
  );
};

export const ViewpointCardR = ({ texthead, des, scr, cls,ty }: Viewpointtype) => {
  return (
   <div className="mx-auto w-3/5">
    

    <div
      className={`flex flex-col-reverse md:flex-row md:justify-center justify-start md:gap-6 p-3 md:p-6 rounded-2xl shadow-xl bg-white hover:shadow-2xl transition duration-300 ${cls}`}
    >
      {/* Text Content */}
      <div className="flex-1 text-gray-800 text-start pt-5">
        <h2 className="text-3xl font-semibold">{texthead}</h2>
        <p className="text-gray-400 text-sm">{ty}</p>
        <p className="text-gray-600 leading-relaxed  text-md mt-5">{des}</p>
      </div>
      {/* Image */}
      <div className="relative w-full md:w-2/4 h-100 rounded-xl overflow-hidden">
        <Image
          src={scr}
          alt={texthead}
          fill
          className="object-cover hover:scale-105 transition duration-500"
          />
      </div>

    </div>
    </div>
   
  );
};
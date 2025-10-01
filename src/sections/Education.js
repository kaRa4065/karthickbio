import items from "@/data/education/data.json";
import Image from "next/image";
export default function Education() {
  return (
    <section className="pb-10 flex flex-col justify-center ">
      <h1 className="sm:text-[56px] text-[28px] font-bold sm:leading-[72px] leading-[36px] sm:text-center">
        Highest Qualification
      </h1>
      <div className="lg:px-[100px] px-10 py-10 mt-5">
        <div className="grid grid-cols-1 relative">
          {items.map((item, index) => (
            <div
              key={index}
              className={`md:flex items-center lg:gap-10 md:gap-10  ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex md:w-1/2 w-full px-10 ">
                <Image
                  src={item.image}
                  alt="edu"
                  className="w-full rounded-lg  max-h-[300px]"
                />
              </div>
              <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[1px] bg-gray-200"></div>
              <div
                className={`md:w-1/2 w-full px-10 text-center md:mt-0 mt-10 relative ${
                  index % 2 === 0 ? "md:text-left " : "md:text-right"
                }`}
              >
                <h2 className="text-sm font-normal text-[#646570]">
                  {item.year}
                </h2>
                <p className="text-xl leading-[32px] font-bold text-[#8365A5] ">
                  {item.education}
                </p>
                <p className="text-md leading-[32px] font-bold text-[#0D0D0D]">
                  {item.org}
                </p>
                <p className="text-md  leading-[32px] font-bold text-[#0D0D0D]">
                  {item.percent}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

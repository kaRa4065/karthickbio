import Carousel from "@/components/Carousel";
import images from "@/data/skills/data.json";
export default function Skills() {
  return (
    <section className="py-10 flex flex-col justify-center">
      <h1 className="sm:text-[56px] text-[28px] font-bold sm:leading-[72px] leading-[36px] mt-5 sm:text-center">
        Skills
      </h1>
      <Carousel images={images} />
    </section>
  );
}

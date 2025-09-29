export default function Summary() {
  return (
    <section className="bg-no-repeat bg-cover w-full h-[calc(100vh-74px)] text-white">
      <div
        className="relative w-full bg-no-repeat bg-cover md:py-[115px] py-20 flex items-center h-[calc(100vh-74px)]"
        style={{ backgroundImage: `url("/images/hero.svg")` }}
      >
        <div className=" max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 flex w-full">
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            <span className="bg-primary-bgbutton rounded-lg  px-7 py-2 text-sm font-semibold w-fit">
              Who am I?
            </span>
            <h1 className="sm:text-[56px] text-[28px] font-bold sm:leading-[72px] leading-[36px] mt-5 sm:text-left text-center">
              Full Stack Developer
            </h1>
            <p className="sm:text-[20px] text-[16px] sm:leading-[34px] leading-[24px] my-2 sm:text-left text-center">
              Full Stack Developer (MERN/Next.js) with experience in building
              scalable web applications, creating responsive UIs, and
              integrating APIs.Skilled in TypeScript, Redux, and modern UI
              frameworks like Tailwind CSS and Ant Design.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

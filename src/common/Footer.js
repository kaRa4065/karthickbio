import Image from "next/image";
import Link from "next/link";

export default function Footer(classname) {
  return (
    <footer id="footer">
      <div className={`footer-block  max-w-[1290px] mx-auto `}>
        <div className="container py-[30px]">
          <div className="flex justify-between gap-y-8 max-xl:flex-wrap">
            <div className="xl:w-1/4 md:w-1/2">
              <div className="footer-company-infor flex flex-col gap-5">
                <header className="h-full w-fulll mr-40">
                  <h1 className="text-[#EF4733] text-3xl font-bold">
                    Karthick.<span></span>
                  </h1>
                </header>
                <div className="caption1">
                  I have 2.5 years of experience as a Frontend Developer, mainly
                  working with React and Next.js. Along with strong frontend
                  skills, I am eager to expand my expertise into backend
                  development, building full-stack applications and growing into
                  a more versatile developer.
                </div>
                {/* <div className="caption1">Mon - Fri: 10:30 AM - 07:30 PM <br />Closed on Weekends</div> */}
              </div>
            </div>

            <div className="xl:w-1/4 w-full">
              <div className="company-contact max-xl:w-1/2 max-sm:w-full">
                <div className="heading text-button">Social Links</div>
                <div className="list-social flex items-center flex-wrap gap-2.5 mt-7">
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="http://www.facebook.com/quadkast"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>{" "}
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="http://www.linkedin.com/company/quadkast-technologies"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin-in"></i>{" "}
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="http://www.twitter.com/quadkast"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="flex items-center sm:justify-between max-sm:flex-col gap-y-2 justify-center py-2 border-t border-outline">
              <div className="left-block flex items-center">
                <div className="copy-right text-surface1 caption1">
                  {`©2025`} Karthick Ravi. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

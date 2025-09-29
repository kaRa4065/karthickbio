"use client"
import React, { useState } from "react";
import experience from "@/data/experience/data.json"


const Experience = () => {
    const [toggleView, setToggleView] = useState(0);
    const [imgShow, setImgShow] = useState(0);

    const platformData = [
        {
            id: 1,
            title: "Android",
            content:
                " Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.",
        },
        {
            id: 2,
            title: "iOS",
            content:
                "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
        },
        {
            id: 3,
            title: "macOS",
            content:
                "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
        },
        {
            id: 4,
            title: "Windows",
            content:
                "Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.",
        },
        {
            id: 5,
            title: "tvOS",
            content:
                "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
        },
        {
            id: 6,
            title: "FireOS",
            content:
                "Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.",
        },
    ];
    const handleClick = (index) => {
        console.log(index);
        if (index !== toggleView) {
            setToggleView(index);
            console.log(index);
        }
    };
    return (
        <div className="w-full bg-[#f7f7f7] pb-16 px-5 sm:px-20">
            <div className=" md:mx-w-[1300px] mx-auto">
                <div className="py-20" align="center">
                    <h3 className="text-[40px] text-[#020a19] text-center font-bold pb-5">
                        Technical Expertise
                    </h3>
                    <h5 className="hidden md:block text-[16px] md:text-[18px] leading-[28px] text-center font-regular text-[#333333]">
                        Where Passion Meets Expertise
                    </h5>
                </div>
                <div className="md:mx-w-[1300px] mx-auto ">
                    <div className="flex justify-center pt-5 lg:flex-row  flex-col  md:items-start items-center">
                        <div className="flex relative overflow-hidden max-w-[600px] max-h-[565px] hidden md:flex ">
                            <div
                                className="  flex-col transition-transform duration-500 md:flex hidden"
                                style={{
                                    transform: `translateY(-${toggleView * 100}%)`,
                                }}
                            >
                                {experience?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="   h-full  flex-shrink-0   flex-row  bg-[#f7f7f7] rounded-lg  md:h-[565px] md:flex hidden"
                                        style={{ width: "100%" }}
                                    >
                                        <img
                                            src={item?.image}
                                            alt="platform"
                                            className="rounded-[18px] w-full h-full object-cover md:block hidden"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="divide-y bg-[#F7F7F7] pl-8">
                            {experience.map((list, index) => (
                                <div
                                    key={index}
                                    className={`${toggleView === index
                                        ? "border border-[#D7D7D7] bg-[#ffffff]"
                                        : " bg-[#F7F7F7] "
                                        } flex flex-col items-start md:max-w-[700px] px-[30px] h-fit rounded-[15px] `}
                                >
                                    <h3
                                        className="text-[#050607] w-full cursor-pointer font-bold text-[24px] leading-[30px] hover:text-primary-bgbutton text-left transition-[padding] duration-300 ease-in-out py-[20px]"
                                        onClick={(e) => handleClick(index)}
                                    >
                                        {list?.title}
                                    </h3>
                                    {toggleView === index && (
                                        <>
                                            {list?.roles?.map((item) => (
                                                <p key={item?.id} className="text-[#333333] font-normal text-[18px] leading-[28px] py-5">
                                                    {item?.resp}
                                                </p>
                                            ))}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

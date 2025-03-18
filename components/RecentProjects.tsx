"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { projects } from "@/data";
import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            // remove bg-black
            <div className="relative group/pin z-50  cursor-pointer">
              <div className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden">
                  <div className=" relative z-50 ">
                    <Button
                      //   random duration will be fun , I think , may be not
                      duration={Math.floor(Math.random() * 10000) + 10000}
                      borderRadius="1.75rem"
                      style={{
                        //   add these two
                        //   you can generate the color from here https://cssgradient.io/
                        background: "rgb(4,7,29)",
                        backgroundColor:
                          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                        // add this border radius to make it more rounded so that the moving border is more realistic
                        borderRadius: `calc(1.75rem* 0.96)`,
                      }}
                      // remove bg-white dark:bg-slate-900
                      className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                          <img
                            src={item.img}
                            alt="cover"
                            className="z-10 absolute bottom-0"
                          />
                        </div>

                        <div className="lg:ms-5">
                          <h1 className="text-start text-xl md:text-2xl font-bold">
                            {item.title}
                          </h1>
                          <p className="text-start text-white-100 mt-3 font-semibold">
                            {item.des}
                          </p>
                          <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                              {item.iconLists.map((icon, index) => (
                                <div
                                  key={index}
                                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                  style={{
                                    transform: `translateX(-${
                                      5 * index + 2
                                    }px)`,
                                  }}
                                >
                                  <img src={icon} alt="icon5" className="p-2" />
                                </div>
                              ))}
                            </div>

                            <div className="flex justify-center items-center">
                              <a href={item.link}>
                                <MagicButton
                                  title="Check Live Site"
                                  icon={<FaLocationArrow />}
                                  position="right"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            // remove bg-black
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

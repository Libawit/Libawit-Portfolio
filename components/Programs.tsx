"use client";

import React from "react";

import { companies } from "@/data";

const Clients = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                  {company.name}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

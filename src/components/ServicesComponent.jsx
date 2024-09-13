import React from "react";
import { skills } from "../constants/constants";

function ServicesComponent() {
  // const select = skills.map((skill) => {
  //   console.log(skill.icon.className);
  // });

  return (
    <section className="min-h-screen px-4">
      <h1 className="text-center bold-32 text-white mb-8">Skills</h1>

      <div className="flex">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full">
          {skills.map((skill, index) => {
            return (
              <div
                key={skill.label}
                className="p-4 cursor-pointer hover:bg-slate-950 group transition ease-in-out duration-700 md:border-r md:border-gray-600 hover:text-blue-600"
              >
                <div className="flexCenter">{skill.icon}</div>
                <h1 className="font-extrabold text-[20px] text-center mt-4 group-hover:text-white">
                  {skill.label}
                </h1>
                <p className="text-center mt-4 mb-2">{skill.description}</p>
                <div className="border-b border-gray-600"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;

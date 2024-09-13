import { FaUserAstronaut, FaUserGraduate } from "react-icons/fa";
import { aboutMe } from "../constants/constants";
import { GoTerminal } from "react-icons/go";

function About() {
  return (
    <section className="max-container p-4">
      <h1 className="text-center bold-32 text-white mb-8">About Me</h1>

      <div>
        {aboutMe.map((about, index) => {
          return (
            <div className="grid md:grid-cols-3 gap-10" key={index}>
              <div className="effects group">
                <div className="flexCenter ">
                  <div className="p-4 rounded-full border border-[#bcc6cc] group-hover:bg-white/80 animation">
                    <FaUserAstronaut className="text-[50px] group-hover:text-indigo-800 animation" />
                  </div>
                </div>
                <div className="px-5 pb-3 mt-3">
                  <h1 className="text-center mb-3 bold-18 group-hover:text-white">
                    Personal Info
                  </h1>
                  <div className="flex flex-col gap- mt-3">
                    <p className="regular-16 group-hover:text-indigo-800 relative">
                      Name:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.personalInfo.label}
                      </span>
                    </p>
                    <p className="regular-16 group-hover:text-indigo-800 relative">
                      DoB:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.personalInfo.DOB}
                      </span>
                    </p>
                    <p className="regular-16 group-hover:text-indigo-800 relative">
                      Email:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.personalInfo.email}
                      </span>
                    </p>
                    <p className="regular-16 group-hover:text-indigo-800 relative">
                      Tel:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.personalInfo.tel}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="effects group">
                <div className="flexCenter">
                  <div className="p-4 rounded-full border border-[#bcc6cc] group-hover:bg-white/80 animation">
                    <FaUserGraduate className="text-[50px] group-hover:text-orange-500 animation" />
                  </div>
                </div>
                <div className="px-5 pb-3 mt-3">
                  <h1 className="text-center mb-3 bold-18 group-hover:text-white">
                    Education
                  </h1>
                  <div className="flex flex-col gap-3">
                    <p className="regular-16 group-hover:text-orange-500 relative">
                      Primary School:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.education.primary}
                      </span>
                    </p>
                    <p className="regular-16 group-hover:text-orange-500 relative">
                      High School:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.education.Secondary}
                      </span>
                    </p>
                    <p className="regular-16 group-hover:text-orange-500 relative">
                      Tertiary:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.education.tertiary}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="effects group">
                <div className="flexCenter">
                  <div className="p-4 rounded-full border border-[#bcc6cc group-hover:bg-white/80 animation">
                    <GoTerminal className="text-[50px] group-hover:text-green-600 animation" />
                  </div>
                </div>
                <div className="px-5 pb-3 mt-3">
                  <h1 className="text-center mb-3 bold-18 group-hover:text-white">
                    Skills
                  </h1>
                  <div className="flex flex-col gap-3">
                    <p className="regular-16 group-hover:text-green-600 relative">
                      Frontend:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.skills.frontend}
                      </span>
                    </p>
                    <p className="regular-16 group-hover:text-green-600 relative">
                      Backend:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.skills.backend}
                      </span>
                    </p>
                    <p className="regular-16 group-hover:text-green-600 relative">
                      Additional:
                      <span className="group-hover:text-white/80 ml-2">
                        {about.skills.additonal}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;

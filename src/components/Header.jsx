import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import pic from "../../public/pic.png";
import { FiDownload } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Header() {
  const text = Typewriter({
    words: ["Full web Stack developer", "Graphic designer", "Photographer"],
    loop: {},
  });

  return (
    <section className="max-container px-4 min-h-[calc(100vh-70px)] flex flex-col lg:flex-row">
      <div className="flexCenter">
        <div className="max-w-[600px] max-h-[500px]">
          <img src={pic} className="w-full object-cover" />
        </div>
      </div>

      <div className="md:flexCenter lg:max-w-[550px] w-full lg:ml-[100px] mt-[70px] lg:m-0 ">
        <div className="lg:flex flex-col flexCenter">
          <h1 className="regular-24 text-center text-wrap">
            Hi i'm{" "}
            <span className="text-blue-600 bold-32">
              Dennis <span className="text-white">Butunyi</span> Muganda
            </span>
          </h1>
          <h3 className="bold-28 text-ellipsis  lg:bold-32 text-center mt-4 md:mt-8">
            i am a <span className="text-purple-950">{text}</span>
            <Cursor />
          </h3>
          <p className="regular-16 text-wrap text-center mt-4 md:mt-8">
            I excell at creating digital experience <br /> and I am proficient
            in various programming languages.
          </p>
          <div className="lg:mt-8 m-4 flex items-center gap-4 md:6">
            <button className="flexCenter md:gap-2 p-2 font-serif text-white bg-blue-600 rounded-xl hover:scale-105 hover:text-white animation cursor-pointer">
              Download CV <FiDownload />
            </button>
            <div className="flex gap-4">
              <div className="flexCenter p-2 bg-blue-600 rounded-full hover:scale-105 hover:text-white animation cursor-pointer">
                <FaInstagram size={20} />
              </div>
              <div className="flexCenter p-2 bg-blue-600 rounded-full hover:scale-105 hover:text-white animation cursor-pointer">
                <FaFacebook size={20} />
              </div>
              <div className="flexCenter p-2 bg-blue-600 rounded-full hover:scale-105 hover:text-white animation cursor-pointer">
                <FaLinkedin size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="relative flex flex-col items-center bg-black pt-20">
      <div className="absolute bottom-0 w-full h-1/2 z-10">
        <div
          className="bg-black bg-opacity-55 h-full"
          style={{ clipPath: "polygon(0 40%, 120% 0, 100% 100%, 0% 100%)" }}
        >
          <div
            className="text-white p-8 font-raleway flex justify-between items-center"
            style={{ transform: "translateY(90%)" }}
          >
            <div className="flex flex-col tracking-wider">
              <p className="font-bold text-md">Hi, I am</p>
              <p className="font-bold text-3xl">Ariel Zakly P.</p>
              <p className="text-sm ">Fullstack Web Developer</p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <MdAlternateEmail className="text-white w-8 h-8" />
              <FaGithub className="text-white w-8 h-8" />
              <FaLinkedinIn className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-1/2 z-0">
        <div
          className="bg-white h-full"
          style={{ clipPath: "polygon(0 40%, 120% 0, 100% 100%, 0% 100%)" }}
        ></div>
      </div>
      <img
        src="https://i.imgur.com/a5Jyj5e.png"
        className="relative z-5 mt-4"
        alt="Intro Image"
      />
    </div>
  );
}

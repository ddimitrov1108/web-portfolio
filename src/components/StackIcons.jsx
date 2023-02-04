import { FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJquery,
  SiCsharp,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export default function StackIcons() {
  return (
    <div
      id="stack-icons"
      className="rounded-full w-[420px] h-[420px] -top-1/3 right-0 hidden xl:block absolute text-4xl"
    >
      <div className="transition-all z-0 duration-1000 absolute top-10 right-12 bg-primary-light/[0.05] w-52 h-52 rounded-full"></div>
      <div className="transition-all z-0 absolute bottom-12 left-14 bg-primary-light/[0.05] w-72 h-72 rounded-full"></div>
      <SiReact className="absolute top-[18%] left-[20%] text-cyan-600" />
      <SiRedux className="absolute top-[12%] right-[16%] text-purple-900" />
      <FaNodeJs className="absolute top-[42%] left-[23%] text-green-900" />
      <SiTailwindcss className="absolute top-[16%] left-[48%] text-cyan-400" />
      <SiCsharp className="absolute top-[74%] right-[11%] text-primary-main" />
      <SiMysql className="absolute top-[48%] right-[20%] text-primary-dark" />
      <SiJquery className="absolute top-[75%] left-[42%] text-blue-500" />
      <SiMongodb className="absolute top-[30%] left-[36%] text-green-600" />{" "}
      <SiJavascript className="absolute top-[65%] right-[30%] bg-black text-yellow-400" />
      <SiCss3 className="absolute top-[60%] left-[29%] text-primary-light" />
      <SiBootstrap className="absolute top-[32%] right-[30%] text-purple-600" />
      <SiHtml5 className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-orange-600" />
    </div>
  );
}

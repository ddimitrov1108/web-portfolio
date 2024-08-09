"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/lib/interfaces";
import { Github, SquareArrowOutUpRight } from "lucide-react";

interface Props {
  data: IProject;
}

const projectAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const Project = ({ data }: Props) => {
  return (
    <motion.div
      variants={projectAnimation}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, easeInOut }}
    >
      <div className="w-full rounded-lg relative overflow-hidden">
        <div
          className="-z-10 absolute top-0 left-0 right-0 bottom-0 bg-cover blur-md"
          style={{
            background: `url(/projects/compressed/${data.img
              .split(".")[0]
              .concat(".jpg")})`,
          }}
        ></div>

        <div className="p-4 !overflow-hidden">
          <Image
            src={`/projects/${data.img}`}
            alt={data.name}
            width={1920}
            height={1080}
            className="max-w-full h-auto min-h-[180px] max-h-[180px] sm:min-h-[280px] sm:max-h-[280px] md:min-h-[320px] md:max-h-[320px] object-cover object-center rounded-lg"
            priority
          />
        </div>
      </div>

      <div className="bg-background py-4 grid space-y-4 rounded-b-lg">
        <div className="flex items-center justify-between">
          <span className="capitalize p-2 px-3 rounded-full border border-muted-foreground text-muted-foreground text-sm max-w-fit">
            {data.type}
          </span>

          <div className="flex items-center gap-4">
            <Link
              href={data.source || "#"}
              className="transition-all text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.name}
              title={`${data.name} - Source Code`}
            >
              <Github size={24} />
            </Link>

            <Link
              href={data.url || "#"}
              className="transition-all text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.name}
              title={`${data.name} - Live Demo`}
            >
              <SquareArrowOutUpRight size={24} />
            </Link>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="font-medium">{data.name}</h1>

          <p className="text-sm text-muted-foreground">{data.description}</p>
        </div>

        <div className="flex items-center gap-4 !mt-4">
          {data.tech.map((tech) => (
            <Image
              key={tech}
              src={`/tech/${tech}`}
              alt={tech}
              width={24}
              height={24}
              className="select-none"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Project;

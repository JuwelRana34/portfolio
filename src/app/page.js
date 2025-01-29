import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { HyperText } from "@/components/ui/hyper-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {ArrowRightIcon ,FacebookIcon ,Github, LinkedinIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative container mx-auto overflow-hidden md:h-[80vh] ">
        <FlickeringGrid
          className=" absolute opacity-50 top-0 left-0  w-full   inset-0 z-0 [mask-image:radial-gradient(750px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={5}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={1000}
          width={1348}
        />

        <div className="h-full  grid grid-cols-1 md:grid-cols-12">
          <div className="   col-span-8  flex items-center justify-center">
            <div className="   p-5">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out backdrop-blur bg-white/45 border rounded-full mx-5  hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Web developer</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>

              <HyperText
                className={
                  " z-[9999] bg-clip-text text-transparent text-3xl text-center md:text-5xl lg:text-7xl bg-gradient-to-br from-violet-300 to-violet-700"
                }
              >
                Md.Juwel Rana
              </HyperText>
              <ShimmerButton className="shadow-2xl  mx-auto md:mx-0 ">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white  dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Download Resume
                </span>
              </ShimmerButton>
            </div>
          </div>
          <div className=" flex flex-col space-y-5 justify-center items-center z-[999] col-span-4 ">
            <Image
              className="rounded-md shadow-md"
              src="/Photo-of-owner.jpg"
              alt="Me"
              width={300}
              height={300}
            />
            <div className="flex space-x-5">

            <Link href="https://www.facebook.com/juwel34/" target="_blank">
             <FacebookIcon className="w-10 h-10 text-blue-500" />
            </Link>
            <Link href="https://www.linkedin.com/in/md-juwel-rana/" target="_blank">
             <LinkedinIcon className="w-10 h-10 text-blue-500" />
            </Link>
            <Link href="https://github.com/JuwelRana34" target="_blank">
             <Github className="w-10 h-10 text-blue-500" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

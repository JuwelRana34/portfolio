import Hero from "@/components/Hero";
import { Spotlight } from "@/components/ui/Spotlight";
import Aboutme from "@/components/Aboutme";

export default function Home() {
  return (
    <>
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#b39af6"
      />
     <Hero/>
      <Aboutme/>
   

     
   
    </>
  );
}

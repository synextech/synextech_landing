// import Image from "next/image";
// import { NavbarDemo } from "@/components/Navbar";

// import Hero from "@/components/landingpagecomp/Hero";

import {HeroScrollDemo} from "@/components/landingpagecomp/HeroScrollDemo";
import {Footer} from "@/components/Footer";
import {Faq3Demo} from "@/components/landingpagecomp/faq";
import { PricingBasic } from "@/components/landingpagecomp/Pricingplan";
import Newhero from "@/components/landingpagecomp/Newhero";


export default function Home() {
  return (
    <div>
      {/* <Hero/> */}
      <Newhero/>
      <HeroScrollDemo/>
      <PricingBasic/>
      <Faq3Demo/>
      <Footer/>


      
      


    </div>
  );
}

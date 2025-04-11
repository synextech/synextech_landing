

import {Footer} from "@/components/Footer";
import Questions from "@/components/landingpagecomp/Questions";
import Newhero from "@/components/landingpagecomp/Newhero";
import AboutUs from "@/components/landingpagecomp/AboutUs";
import Process from "@/components/landingpagecomp/Process";
import ContactUs from "@/components/landingpagecomp/ContactUs";
// import Templates from "@/components/landingpagecomp/Templates";
import { Services } from "@/components/landingpagecomp/Services";


export default function Home() {
  return (
    <div>
      {/* <Hero/> */}
      <Newhero/>
      <AboutUs/>
      <Process />
      <Services />
      {/* <Templates/> */}
      <Questions/>
      <ContactUs />
      <Footer/>
    </div>
  );
}

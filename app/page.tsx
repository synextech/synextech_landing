

import {Footer} from "@/components/Footer";
import Faq from "@/components/landingpagecomp/Faq";
import Newhero from "@/components/landingpagecomp/Newhero";
import AboutUs from "@/components/landingpagecomp/AboutUs";
import Process from "@/components/landingpagecomp/Process";
import ContactUs from "@/components/landingpagecomp/ContactUs";
import Templates from "@/components/landingpagecomp/Templates";


export default function Home() {
  return (
    <div>
      {/* <Hero/> */}
      <Newhero/>
      <AboutUs/>
      <Process />
      <Templates/>
      <Faq/>
      <ContactUs />
      <Footer/>


      
      


    </div>
  );
}

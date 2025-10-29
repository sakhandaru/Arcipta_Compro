import dynamic from "next/dynamic";
import { SectionLoader } from "../components/section-loader";


// lazy load setiap section

const About = dynamic(() => import("../components/sections/about"), {
  loading: () => <SectionLoader /> 
});
const Hero = dynamic(() => import("../components/sections/hero"), {
  loading: () => <SectionLoader /> 
});

export default function Page() {
  return (
    <>
      <Hero />
        <About />
    </>
  );
}

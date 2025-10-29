import dynamic from "next/dynamic";
import { Suspense } from "react";
import { SectionLoader } from "../components/section-loader";

// lazy load setiap section
// const Hero = dynamic(() => import("./(sections)/hero/hero"), { suspense: true });
const About = dynamic(() => import("./(sections)/about/page"), );
// const Services = dynamic(() => import("./(sections)/services/services"), { suspense: true });
// const Projects = dynamic(() => import("./(sections)/projects/projects"), { suspense: true });
// const Contact = dynamic(() => import("./(sections)/contact/contact"), { suspense: true });

export default function Page() {
  return (
    <>
      {/* <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense> */}

      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      {/* <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense> */}

      {/* <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense> */}

      {/* <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense> */}
    </>
  );
}

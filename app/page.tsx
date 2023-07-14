import AboutUs from "./home/AboutUs";
import HeroSection from "./home/HeroSection";
import Location from "./home/Location";
import RoomsServices from "./home/RoomsServices";
import Services from "./home/Services";
import Testimonials from "./home/Reviews";
import WhyNusra from "./home/WhyNusra";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <RoomsServices />
      <WhyNusra />
      <AboutUs />
      <Testimonials />
      <Location />
    </main>
  );
}

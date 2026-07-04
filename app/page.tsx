import BlogSection from "@/components/pages/Home/BlogSection";
import HeroSlider from "@/components/pages/Home/HeroSlider";
import MapSection from "@/components/pages/Home/MapSection";
import OurSpecialities from "@/components/pages/Home/OurSpecialities";
import QueryCTA from "@/components/pages/Home/QueryCTA";
import WhyChooseUs from "@/components/pages/Home/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <WhyChooseUs />
      <OurSpecialities />
      <BlogSection />
      <QueryCTA />
      <MapSection />
    </ div>
  );
}

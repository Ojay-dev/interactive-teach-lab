import DefaultLayout from "@/layout/defaultLayout";
import AboutUsComponent from "@/components/About";
import HeroComponent from "@/components/Hero";
import ScheduleComponent from "@/components/Schedule";
import SpeakersComponent from "@/components/Speakers";
import EventHighlightComponent from "@/components/EventHighlight";
import CTAAreaComponent from "@/components/CTASection";
import PartnersComponent from "@/components/Partners";
import FAQsComponent from "@/components/FAQs";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <HeroComponent />
      <AboutUsComponent />
      <ScheduleComponent />

      <SpeakersComponent />
      <EventHighlightComponent />
      <CTAAreaComponent />
      <FAQsComponent />
      <PartnersComponent />
    </DefaultLayout>
  );
};

export default IndexPage;

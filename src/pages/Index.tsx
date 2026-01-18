import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AKMS meta.ai | IT Consulting & Digital Transformation Services</title>
        <meta 
          name="description" 
          content="AKMS meta.ai delivers innovative IT consulting, web development, app development, automation, and digital marketing solutions for businesses worldwide." 
        />
        <meta name="keywords" content="IT consulting, web development, app development, digital marketing, automation, BPO, technical support" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesPreview />
        <WhyChooseUs />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;

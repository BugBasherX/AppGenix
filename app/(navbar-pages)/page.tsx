import BuildProcess from "@/sections/build-process";
import CallToAction from "@/sections/call-to-action";
import FeaturesSection from "@/sections/features-section";
import HeroSection from "@/sections/hero-section";
import OurTestimonials from "@/sections/our-testimonials";
import PricingSection from "@/sections/pricing-section";
import TrustedBrand from "@/sections/trusted-brand";

export default function Page() {
    return (
        <main className="px-4 py-4 md:px-16 lg:px-24 xl:px-32">
            <HeroSection />
            <TrustedBrand />
            <FeaturesSection />
            <BuildProcess />
            <PricingSection />
            <OurTestimonials />
            <CallToAction />
        </main>
    );
}
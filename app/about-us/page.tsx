import { aboutMockData } from "@/mock-data/about";
import AboutBanner from "./banner";
import WhoWeAre from "./WhoWeAre";
import TransformingAndBuilding from "./TransformingAndBuilding";
import YoutubeIframe from "./YoutubeIframe";
import MissionVisionValues from "./MissionVisionValues";
import Accreditation from "./Accreditation";
import MrcpCenter from "./MrcpCenter";


export const metadata = {
    title: "About Us | Sonia Nursing Home & Diagnostic Center",
    description: "Learn about Evercare Hospital Dhaka, our vision, mission, global metrics, and clinical benchmarks.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans overflow-x-hidden">
            {/* 1. Banner */}
            <AboutBanner data={aboutMockData.banner} />

            {/* 2. Who We Are */}
            <WhoWeAre data={aboutMockData.whoWeAre} />

            {/* 3. Transforming and Building section */}
            <TransformingAndBuilding data={aboutMockData.transformingAndBuilding} />

            {/* 4. YouTube Video Showcase Box */}
            <YoutubeIframe data={aboutMockData.youtube} />

            {/* 5. Mission, Vision, and Values layout matrix */}
            <MissionVisionValues data={aboutMockData.missionVisionValues} />

            {/* 6. Accreditation Bar */}
            <Accreditation data={aboutMockData.accreditation} />

            {/* 7. MRCP Center Grid Section */}
            <MrcpCenter data={aboutMockData.mrcpCenter} />
        </main>
    );
}
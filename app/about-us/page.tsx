import { aboutMockData } from "@/mock-data/about";
import WhoWeAre from "./WhoWeAre";
import TransformingAndBuilding from "./TransformingAndBuilding";
import YoutubeIframe from "./YoutubeIframe";
import MissionVisionValues from "./MissionVisionValues";
import Accreditation from "./Accreditation";
import MrcpCenter from "./MrcpCenter";
import SuperHero from "@/components/shared/SuperHero";


export const metadata = {
    title: "About Us | Sonia Nursing Home & Diagnostic Center",
    description: "Learn about Evercare Hospital Dhaka, our vision, mission, global metrics, and clinical benchmarks.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans overflow-x-hidden">
            <SuperHero data={aboutMockData.banner} />
            <WhoWeAre data={aboutMockData.whoWeAre} />
            <TransformingAndBuilding data={aboutMockData.transformingAndBuilding} />
            <YoutubeIframe data={aboutMockData.youtube} />
            <MissionVisionValues data={aboutMockData.missionVisionValues} />
            <Accreditation data={aboutMockData.accreditation} />
            <MrcpCenter data={aboutMockData.mrcpCenter} />
        </main>
    );
}

import { careersMockData } from "@/mock-data/careers";
import AboutBanner from "../about-us/banner";
import HRMessage from "./HRMessage";
import JobOpenings from "./JobOpenings";
import EmployeeEvents from "./EmployeeEvents";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutBanner data={{ title: "Careers", subtitle: "Join Our Team and Transform Healthcare Together" }} />
            <HRMessage data={careersMockData.hrMessage} />
            <JobOpenings data={careersMockData.jobsSection} />
            <EmployeeEvents data={careersMockData.eventsSection} />
        </main>
    );
}
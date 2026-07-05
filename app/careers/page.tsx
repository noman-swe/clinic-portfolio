
import { careersMockData } from "@/mock-data/careers";
import HRMessage from "./HRMessage";
import JobOpenings from "./JobOpenings";
import EmployeeEvents from "./EmployeeEvents";
import SuperHero from "@/components/shared/SuperHero";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <SuperHero data={careersMockData.banner} />
            <HRMessage data={careersMockData.hrMessage} />
            <JobOpenings data={careersMockData.jobsSection} />
            <EmployeeEvents data={careersMockData.eventsSection} />
        </main>
    );
}
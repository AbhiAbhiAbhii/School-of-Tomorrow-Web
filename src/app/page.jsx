import SideBar from "./components/SideBar/SideBar";
import HeroBanner from "./components/HeroBanner";
import HeroBannerText from "./components/HeroBannerText";
import HexShowcase from "./components/HexShowcase";
import BeliefShowcase from "./components/BeliefShowcase";
import SpeakerShowcase from "./components/SpeakerShowcase";
import Agenda from "./components/Agenda";
import LogoShowcase from "./components/LogoShowcase";
import { Collaborators, OrganizerSVG } from "../../data";
import TicketShowcase from "./components/TicketShowcase";
import Link from "next/link";
import PanelsShowcase from "./components/PanelsShowcase";

export default function Home() {

  return (
    <section className="flex justify-between gap-2 max-w-[2400px] mx-auto py-4 pr-6 relative h-auto">
      <SideBar />
      <main className="w-[68%] flex flex-col">
        <div className="w-full">
          <HeroBanner />
          <HeroBannerText />
        </div>
        <div className="relative space-y-24 bottom-24">
          <HexShowcase />
          <BeliefShowcase />
          <SpeakerShowcase />
          <PanelsShowcase />
          <Agenda />
          <LogoShowcase text='Organizers' data={OrganizerSVG} />
          {/* <LogoShowcase text='Collaborators' data={Collaborators} /> */}
          <TicketShowcase />
          <div className="text-[#9D9D9D] font-inter flex justify-between">
            <p className="text-sm text-wrap">
            COPYRIGHT © 2024  SCHOOL OF TOMORROW © ALL RIGHTS RESERVED
            </p>
            <Link className="text-sm" href='https://www.gradical.xyz/'>
              BY GRADICAL
            </Link>
          </div>
        </div>
      </main>
    </section>
  )
}

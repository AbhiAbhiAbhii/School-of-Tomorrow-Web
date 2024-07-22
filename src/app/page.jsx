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
import NavBar from "./components/NavBar";

export default function Home() {

  return (
    <section className="flex-col mt-32 lx:mt-0 lx:flex-row sm:flex sm:justify-between gap-2 max-w-[2400px] mx-auto p-4 lx:py-4 lx:pr-6 relative h-auto">
      <SideBar />
      <NavBar />
      <main className="sm:w-full lx:w-[68%] flex flex-col">
        <div className="w-full mb-12 sm:mb-0">
          <HeroBanner />
          <HeroBannerText />
        </div>
        <div className="relative space-y-24 lx:bottom-24">
          <HexShowcase />
          <BeliefShowcase />
          <SpeakerShowcase />
          <PanelsShowcase />
          <Agenda />
          <LogoShowcase text='Organizers' data={OrganizerSVG} />
          <TicketShowcase />
          <div className="text-[#9D9D9D] font-inter flex flex-col md:flex-row justify-between">
            <p className="text-sm text-wrap">
            COPYRIGHT © 2024  SCHOOLS OF TOMORROW © ALL RIGHTS RESERVED
            </p>
            <Link className="mt-4 md:mt-0 text-sm" href='https://www.gradical.xyz/'>
              BY GRADICAL
            </Link>
          </div>
        </div>
      </main>
    </section>
  )
}


export async function generateMetadata() {

  return {
    title: 'School of Tommorrow | Pune, August 07 | Innovate, Collaborate and Transform',
    description: 'Schools of Tomorrow aims to invest in School Leaders - the conductors who make India’s schools run"',
    openGraph: {
      images: ['/meta-img.png']
    }
  };
}

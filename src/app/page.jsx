import SideBar from "./components/SideBar/SideBar";
import HeroBanner from "./components/HeroBanner";
import HeroBannerText from "./components/HeroBannerText";
import HexShowcase from "./components/HexShowcase";
import BeliefShowcase from "./components/BeliefShowcase";
import SpeakerShowcase from "./components/SpeakerShowcase";
import Reveal from "./components/Reveal";
import WorkShopShowcase from "./components/WorkShopShowcase";
import Agenda from "./components/Agenda";
import LogoShowcase from "./components/LogoShowcase";
import { Collaborators, Organizers } from "../../logoData";
import TicketShowcase from "./components/TicketShowcase";

export default function Home() {


  return (
    <section className="flex justify-between gap-2 max-w-screen-2xl mx-auto py-4 pr-6 relative h-auto">
      <Reveal />
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
          <WorkShopShowcase />
          <Agenda />
          <LogoShowcase text='Organizers' data={Organizers} />
          <LogoShowcase text='Collaborators' data={Collaborators} />
          <TicketShowcase />
        </div>
      </main>
    </section>
  )
}

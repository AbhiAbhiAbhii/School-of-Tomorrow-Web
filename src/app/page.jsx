import SideBar from "./components/SideBar/SideBar";
import HeroBanner from "./components/HeroBanner";
import HeroBannerText from "./components/HeroBannerText";
import HexShowcase from "./components/HexShowcase";
import BeliefShowcase from "./components/BeliefShowcase";
import SpeakerShowcase from "./components/SpeakerShowcase";

export default function Home() {

  return (
    <section className="flex justify-between gap-4 max-w-screen-2xl mx-auto py-4 pr-6">
      <SideBar />
      <main className="w-[65%] flex flex-col">
        <div className="w-full">
          <HeroBanner />
          <HeroBannerText />
        </div>
        <div className="relative space-y-24 bottom-24">
          <HexShowcase />
          <BeliefShowcase />
          <SpeakerShowcase />
        </div>
      </main>
    </section>
  )
}

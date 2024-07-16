import Image from "next/image";
import SideBar from "./components/SideBar/SideBar";

export default function Home() {

  return (
    <section className="flex justify-between max-w-[2000px] mx-auto py-12 pr-6">
      <SideBar />
      <main className="pb-[2000px] w-[65%] flex flex-col">
        <div className="w-full">
          <Image 
            src='/assets/hero-banner.svg'
            alt="hero-banner"
            className="w-full"
            height={400}
            width={400}
          />
        </div>
        {/* Text component */}
        <div className="text-[#FBFAED] w-full relative bottom-[14%] h-fit">
          <p className="font-PPEdNewUltralight relative top-[10%] text-[9vw]">
            The future
          </p>
          <p className="font-PPEdNewUltralight text-[9vw] grid place-self-end place-content-end w-full pr-4">
            <span>of innovation is</span>
          </p>
          <p className="font-PPEdNewUltralight text-[9vw] relative bottom-[15%]">
            here.
          </p>
        </div>
      </main>
    </section>
  )
}

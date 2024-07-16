import Image from "next/image";
import SideBar from "./components/SideBar/SideBar";

export default function Home() {

  let textClassName = "font-PPEdNewUltralight text-[120px] xl:text-[142px]"

  return (
    <section className="flex justify-between gap-4 max-w-screen-2xl mx-auto py-4 pr-6">
      <SideBar />
      <main className="pb-[2000px] w-[65%] flex flex-col">
        <div className="w-full grid place-self-end place-content-end">
          <Image 
            src='/assets/hero-banner.svg'
            alt="hero-banner"
            className="!w-full"
            height={300}
            width={300}
          />
        </div>
        {/* Text component */}
        <div className="text-[#FBFAED] w-full relative bottom-[16%] h-fit">
          <p className={`${textClassName} relative top-14`}>
            The future
          </p>
          <p className={`${textClassName} grid place-content-end w-full`}>
            <span className="mr-4">of innovation is</span>
          </p>
          <p className={`${textClassName} relative bottom-24`}>
            here.
          </p>
        </div>
      </main>
    </section>
  )
}

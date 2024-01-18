import Image from "next/image";
import home from "./assets/img/home.png";

export default function Home() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 transtion-all duration-[0.4s] shadow-sm z-10 bg-white">
        <nav className="flex flex-row justify-between items-center mx-auto h-[5rem] max-w-[968px] ">
          <a
            href=""
            className="font-[700] inline-flex items-center gap-[0.5rem] transition-all duration-[0.3s]"
          >
            PLANTEX
          </a>
          <div>
            <ul className="flex gap-[3rem]">
              <li>
                <a href="" className="text-[#3e6553] font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="" className="font-medium">
                  Procucts
                </a>
              </li>
              <li>
                <a href="" className="font-medium">
                  FAQs
                </a>
              </li>
              <li>
                <a href="" className="font-medium">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="mt-[8rem]">
        <section className="grid grid-cols-3 mx-auto">
          <Image src={home} alt="plant" width={350} />
          <div>
            <h1>Plants will make your life better</h1>
            <p>
              Create incredible plant design for your offices or apastaments.
              Add fresness to your new ideas.
            </p>
            <a href="">Explore</a>
          </div>
        </section>
      </main>
    </>
  );
}

import logo from "@/assets/logosaas.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="/features">Crystal Features</a>
          <a href="/pricing">Empire Pricing</a>
          <a href="/contact">Reach Out (Better Call Saul)</a>
          <a href="/privacy">DEA Policy</a>
        </nav>
        <p className="mt-6">&copy; 2024 Heisenberg HQ, Inc. All rights reserved. 99.1% Pure Business Solutions.</p>
      </div>
    </footer>
  );
};

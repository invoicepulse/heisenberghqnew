import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { SolutionsDropdown } from "@/components/SolutionsDropdown";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">The chemistry of productivity - 99.1% pure organizational tools</p>
        <a href="/auth" className="inline-flex gap-1 items-center">
          <p>Let's Cook... Projects!</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </a>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-1">
              <Image src={Logo} alt="Saas logo" height={40} width={40} />
              <span className="font-bold text-xl text-black uppercase px-1">Heisenberg HQ</span>
            </a>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="/features">Crystal Features</a>
              <SolutionsDropdown />
              <a href="/pricing">Empire Pricing</a>
              <a href="/auth" className="text-black hover:text-black/80">Enter the Lab</a>
              <a 
                href="/auth" 
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
              >
                Let's Cook... Projects!
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

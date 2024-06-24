import Link from "next/link";
import logo from "../../assets/brand-logo.svg";
const Header = () => {
  return (
    <header className="bg-[#FFCC00] px-[10px] md:px-[10vw] flex items-center justify-between">
      <Link href={`/`}>
        <img src={logo.src} className="size-[64px]" loading="lazy" alt="" />
      </Link>
      <section className="w-[250px] h-[50px] flex items-center">
        <input
          type="text"
          placeholder="Suchbegriff"
          className="px-[10px] placeholder:text-gray-500 outline-none rounded-sm w-full h-[50px] "
        />
        <div className="bg-[#fff] cursor-pointer h-full flex items-center justify-center px-[10px]">
          Suchen
        </div>
      </section>
    </header>
  );
};

export default Header;

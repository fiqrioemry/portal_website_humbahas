import Logo from "../Logo";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { ArrowRight } from "lucide-react";
import { NavMenuMobile } from "./NavMenuMobile";
import { useState, useEffect, useRef } from "react";

const NavMenu = () => {
  const dropdownRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setActiveMenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderDropdownContent = () => {
    switch (activeMenu) {
      case "profile":
        return (
          <div className=" grid grid-cols-12 gap-4 px-12">
            <div className="col-span-3 space-y-6 text-background">
              <h2>Profile</h2>
              <p>
                Konten dropdown untuk menu <b>profile</b>. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Eveniet earum autem, totam
                cupiditate nemo rem!
              </p>
              <div>
                <Link to="/" onClick={() => toggleMenu("profile")}>
                  <button className="py-3 w-60 border border-background bg-accent text-background hover:text-accent hover:bg-background transition-all font-semibold">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-6  text-background">
              {[
                "Deklarasi",
                "Sejarah",
                "Visi Misi",
                "Tugas dan Fungsi",
                "Makna Lambang Gerindra",
                "Struktur dan daftar Anggota",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-center hover:bg-accent h-12 cursor-pointer border-b transition-all"
                >
                  <div className="w-1.5 h-full bg-accent-dark group-hover:bg-active"></div>
                  <div className="flex items-center justify-between w-full pr-2">
                    <span className="capitalize px-4">{item}</span>
                    <ArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "news":
        return (
          <div className="grid grid-cols-12 gap-4 px-12">
            <div className="col-span-3 space-y-6 text-background">
              <h2>news</h2>
              <p>
                Konten dropdown untuk menu <b>news</b>. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Eveniet earum autem, totam
                cupiditate nemo rem!
              </p>
              <div>
                <Link to="/news/cerdas" onClick={() => toggleMenu("news")}>
                  <button className="py-3 w-60 border border-background bg-accent text-background hover:text-accent hover:bg-background transition-all font-semibold">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-6 text-background">
              {[
                "cerdas",
                "nyaman",
                "sehat",
                "sejahtera",
                "terkonesi",
                "wisata",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-center hover:bg-accent h-12 cursor-pointer border-b transition-all"
                >
                  <div className="w-1.5 h-full bg-accent-dark group-hover:bg-active"></div>
                  <div className="flex items-center justify-between w-full pr-2">
                    <span className="capitalize px-4">{item}</span>
                    <ArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="bg-accent">
      <div className="flex items-center h-[75px] justify-between px-4 md:px-12">
        <div className="h-12 md:h-[3.5rem]">
          <Logo />
        </div>

        <div
          ref={dropdownRef}
          aria-label="main navigation"
          className="hidden md:flex items-center space-x-12"
        >
          <div
            onClick={() => toggleMenu("profile")}
            className={cn(
              "capitalize text-background cursor-pointer border-b-[3px] py-6",
              {
                "border-active text-active": activeMenu === "profile",
                "border-transparent": activeMenu !== "profile",
              }
            )}
          >
            profile
          </div>

          <div
            onClick={() => toggleMenu("news")}
            className={cn(
              "capitalize text-background cursor-pointer border-b-[3px] py-6",
              {
                "border-active text-active": activeMenu === "news",
                "border-transparent": activeMenu !== "news",
              }
            )}
          >
            news
          </div>

          {/* Direct Links */}
          {["pengaduan", "lowongan", "gallery"].map((menu) => (
            <Link
              key={menu}
              to={`/${menu}`}
              onClick={() => setActiveMenu(null)}
              className="capitalize text-background cursor-pointer border-b-[3px] py-6 border-transparent hover:border-active"
            >
              {menu}
            </Link>
          ))}
        </div>

        <div className="relative flex space-x-4 items-center">
          <SearchInput />
          <div className="md:hidden block">
            <NavMenuMobile />
          </div>
        </div>
      </div>

      {/* Dropdown Container */}
      <div
        ref={dropdownRef}
        className={cn(
          "fixed bg-accent-dark top-[75px] left-0 right-0 h-0 max-h-[20rem] overflow-hidden transition-all duration-300",
          { "h-full": activeMenu }
        )}
      >
        {renderDropdownContent()}
      </div>
    </nav>
  );
};

export default NavMenu;

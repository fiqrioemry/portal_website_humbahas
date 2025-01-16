import Logo from "../Logo";
import { cn } from "@/lib/utils";
import { navLinks } from "../../config";
import { NavMenuMobile } from "./NavMenuMobile";
import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();
  const getBaseName = (path) => {
    const parts = path.split("/").filter(Boolean); //
    return parts[0];
  };

  return (
    <nav className="flex bg-accent items-center justify-between md:justify-center py-2 md:py-6 space-x-4 md:px-0 px-2">
      <div className="flex md:hidden items-center space-x-4">
        <div className="h-8">
          <Logo />
        </div>
      </div>

      <div aria-label="main navigation" className="hidden md:block space-x-12">
        {navLinks.map((nav, index) => {
          const isActive =
            getBaseName(location.pathname) === getBaseName(nav.href);
          return (
            <Link
              to={`${nav.href}`}
              className={cn("uppercase text-background", {
                "border-active border-b-[3px] py-6 text-active": isActive,
              })}
              key={index}
            >
              {nav.title}
            </Link>
          );
        })}
      </div>

      <div className="md:hidden block">
        <NavMenuMobile />
      </div>
    </nav>
  );
};

export default NavMenu;

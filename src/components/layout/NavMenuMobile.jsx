import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "../../config";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchResult from "./SearchResult";

export function NavMenuMobile() {
  const location = useLocation();
  const getBaseName = (path) => {
    const parts = path.split("/").filter(Boolean);
    return parts[0];
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent>
        <nav className="py-6 space-y-4">
          <div className="flex items-center space-x-4">
            <SearchResult />
          </div>

          <div
            aria-label="main navigation"
            className="flex items-center justify-center flex-col gap-8"
          >
            {navLinks.map((nav, index) => {
              const isActive =
                getBaseName(location.pathname) === getBaseName(nav.href);
              return (
                <div className="mb-4" key={index}>
                  <Link
                    to={`${nav.href}`}
                    className={cn("uppercase text-accent ", {
                      "border-accent border-b-[3px] py-6 text-accent": isActive,
                    })}
                  >
                    {nav.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

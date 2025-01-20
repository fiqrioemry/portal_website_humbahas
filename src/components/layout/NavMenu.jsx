import Logo from "../Logo";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { NavMenuMobile } from "./NavMenuMobile";
import { navLinks, newsList } from "../../config";
import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const getBaseName = (path) => {
    const parts = path.split("/").filter(Boolean);
    return parts[0];
  };

  const inputRef = React.useRef(null);
  const dropdownRef = React.useRef(null);
  const [form, setForm] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [isFocused, setIsFocused] = React.useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };
  console.log(isFocused);
  const handleSearch = (form) => {
    if (!form.trim()) {
      setResult([]);
      return;
    }

    const filteredResults = newsList.filter(
      (news) =>
        news.title.toLowerCase().includes(form.toLowerCase()) ||
        news.subtitle.toLowerCase().includes(form.toLowerCase()) ||
        news.content.toLowerCase().includes(form.toLowerCase())
    );

    const slicedResults = filteredResults.slice(0, 5);
    setResult(slicedResults);
  };

  React.useEffect(() => {
    if (form.trim() !== "") {
      handleSearch(form);
    } else {
      setResult([]);
    }
  }, [form]);

  const handleClickOutside = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsFocused(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClickResult = () => {
    setForm("");
    setOpen(!open);
    setResult([]);
    setIsFocused(false);
  };

  return (
    <nav className="bg-accent">
      <div className="flex items-center h-[75px] justify-between px-4 md:px-12">
        <div className="h-8">
          <Logo />
        </div>

        <div
          aria-label="main navigation"
          className="hidden md:block space-x-12"
        >
          {navLinks.map((nav, index) => {
            const isActive =
              getBaseName(location.pathname) === getBaseName(nav.href);
            return (
              <Link
                to={`${nav.href}`}
                className={cn("uppercase text-background ", {
                  "border-active border-b-[3px] py-6 text-active": isActive,
                })}
                key={index}
              >
                {nav.title}
              </Link>
            );
          })}
        </div>

        <div className="relative flex space-x-4 items-center">
          <div>
            <div
              onClick={() => setOpen(!open)}
              className={cn(
                "flex cursor-pointer space-x-2 py-6 text-background border-b-[3px] border-accent ",
                { "border-active border-b-4": open }
              )}
            >
              <Search />
              <span className="hidden md:block">Search</span>
            </div>
            <div
              className={cn(
                "fixed bg-accent top-[75px] left-0 md:left-auto md:w-96 right-0 max-h-0 overflow-hidden duration-300 transition-all",
                {
                  "max-h-96": open,
                }
              )}
            >
              <div className="relative max-h-96">
                <input
                  ref={inputRef}
                  id="search"
                  name="search"
                  value={form}
                  onChange={handleChange}
                  className="w-full bg-accent-dark h-12 py-2 px-4 text-background outline-none md:w-96"
                  placeholder="Pencarian"
                  onFocus={handleFocus}
                />
                {form && isFocused && (
                  <div ref={dropdownRef} className="w-full max-h-96 ">
                    <div className=" text-background shadow-xl bg-accent py-4">
                      {result && result.length !== 0 ? (
                        result.map((item) => (
                          <Link
                            to={`/news/${item.category}/${item.slug}`}
                            key={item.id}
                            onClick={handleClickResult}
                          >
                            <div className="py-2 px-4 text-xs">
                              {item.title.slice(0, 60) + "..."}
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="py-2 text-xs w-full px-4">
                          Hasil pencarian tidak ditemukan, coba keywords berbeda
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden block">
            <NavMenuMobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;

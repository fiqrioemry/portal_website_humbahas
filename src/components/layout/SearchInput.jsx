import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { newsList } from "../../config";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SearchInput = () => {
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const [form, setForm] = useState("");
  const [result, setResult] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);

  const closeSearch = () => {
    setForm("");
    setResult([]);
    setOpenSearch(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value.trim();
    setForm(value);
    setResult(
      value
        ? newsList
            .filter(({ title, subtitle, content }) =>
              [title, subtitle, content].some((text) =>
                text.toLowerCase().includes(value.toLowerCase())
              )
            )
            .slice(0, 5)
        : []
    );
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current?.contains(e.target)) closeSearch();
    };

    document.addEventListener("mousedown", handleClickOutside);
    if (openSearch) inputRef.current?.focus();

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openSearch]);

  return (
    <div ref={wrapperRef}>
      {/* Search Button */}
      <div
        onClick={() => setOpenSearch(!openSearch)}
        className={cn(
          "flex cursor-pointer space-x-2 py-6 text-background border-b-[3px] border-accent",
          { "border-active border-b-4": openSearch }
        )}
      >
        <Search />
        <span className="hidden md:block">Search</span>
      </div>

      {/* Dropdown Search */}
      <div
        className={cn(
          "fixed bg-accent top-[75px] left-0 md:left-auto md:w-96 right-0 max-h-0 overflow-hidden duration-300 transition-all",
          { "max-h-96": openSearch }
        )}
      >
        <div className="relative">
          <input
            ref={inputRef}
            value={form}
            onChange={handleSearch}
            placeholder="Search for news ..."
            className="w-full bg-accent-dark h-12 py-2 px-4 text-background outline-none md:w-96"
          />
          {form && (
            <div className="w-full max-h-96 overflow-auto text-background shadow-xl bg-accent py-4">
              {result.length ? (
                result.map(({ id, title, category, slug }) => (
                  <Link
                    key={id}
                    onClick={closeSearch}
                    to={`/news/${category}/${slug}`}
                  >
                    <div className="py-2 px-4 text-xs">
                      {title.slice(0, 60)}...
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-2 text-xs w-full px-4">
                  Hasil pencarian tidak ditemukan, coba keywords berbeda
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;

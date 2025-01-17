import React from "react";
import { newsList } from "../../config";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { SheetClose } from "@/components/ui/sheet";

const SearchResult = () => {
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
    setResult([]);
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        id="search"
        name="search"
        value={form}
        onChange={handleChange}
        className="w-full md:w-96"
        placeholder="Pencarian"
        onFocus={handleFocus}
      />
      {form &&
        isFocused && ( // Tampilkan dropdown saat form tidak kosong atau input fokus
          <div ref={dropdownRef} className="absolute w-full top-12  max-h-96 ">
            <div className="rounded-md shadow-xl bg-muted">
              {result && result.length !== 0 ? (
                result.map((item) => (
                  <Link
                    to={`/news/${item.category}/${item.slug}`}
                    key={item.id}
                    onClick={handleClickResult} // Reset form dan tutup dropdown saat klik
                  >
                    <div className="py-2 px-4 text-xs">
                      <SheetClose>{item.title.slice(0, 60) + "..."}</SheetClose>
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
  );
};

export default SearchResult;

import Logo from "../Logo";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useRef } from "react";
import { newsList } from "../../config";
import { Link } from "react-router-dom";

const NavSearch = () => {
  const [form, setForm] = useState("");
  const [result, setResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false); // Untuk melacak status fokus
  const dropdownRef = useRef(null); // Untuk referensi dropdown
  const inputRef = useRef(null); // Untuk referensi input

  const handleChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  const handleSearch = (form) => {
    // Jika form kosong, set result menjadi array kosong
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

  useEffect(() => {
    // Hanya lakukan pencarian jika form tidak kosong
    if (form.trim() !== "") {
      handleSearch(form);
    } else {
      setResult([]); // Reset hasil jika form kosong
    }
  }, [form]);

  // Menangani klik di luar elemen input atau dropdown
  const handleClickOutside = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) && // Klik bukan di input
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) // Klik bukan di dropdown
    ) {
      setIsFocused(false); // Menutup dropdown
    }
  };

  // Menambahkan event listener saat komponen dimounting dan menghapusnya saat unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fungsi untuk menangani fokus pada input
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Fungsi untuk menangani kehilangan fokus pada input
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Fungsi untuk menangani klik pada hasil pencarian
  const handleClickResult = () => {
    setForm(""); // Reset form
    setResult([]); // Reset hasil
    setIsFocused(false); // Menutup dropdown setelah klik
  };

  console.log(isFocused);
  return (
    <div className="bg-background hidden md:flex justify-between items-center px-2">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-x-4">
        <label htmlFor="search">
          <Search className="cursor-pointer" />
        </label>
        <div className="relative">
          <Input
            ref={inputRef} // Menambahkan ref ke input
            id="search"
            name="search"
            value={form}
            onChange={handleChange}
            className="w-96"
            placeholder="Pencarian"
            onFocus={handleFocus} // Menambahkan event onFocus
            onBlur={handleBlur} // Menambahkan event onBlur
          />
          {isFocused && ( // Tampilkan dropdown saat form tidak kosong atau input fokus
            <div ref={dropdownRef} className="absolute top-12 w-full max-h-96 ">
              <div className="rounded-md shadow-xl bg-muted">
                {result.map((item) => (
                  <Link
                    to={`/news/${item.category}/${item.slug}`}
                    key={item.id}
                    onClick={handleClickResult} // Reset form dan tutup dropdown saat klik
                  >
                    <div className="py-2 px-2 text-xs">
                      {item.title.slice(0, 60) + "..."}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {/* Menampilkan pesan jika tidak ada hasil */}
          {form && result.length === 0 && (
            <div className="absolute top-12 w-full max-h-96 rounded-md shadow-xl border bg-muted p-2">
              <div className="py-2 text-xs w-full">
                Hasil pencarian tidak ditemukan, coba keywords berbeda
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavSearch;

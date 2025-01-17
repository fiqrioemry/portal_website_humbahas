import Logo from "../Logo";
import { Search } from "lucide-react";
import SearchResult from "./SearchResult";

const NavSearch = () => {
  return (
    <div className="bg-background hidden md:flex justify-between items-center px-2">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-x-4">
        <label htmlFor="search">
          <Search className="cursor-pointer" />
        </label>
        <SearchResult />
      </div>
    </div>
  );
};

export default NavSearch;

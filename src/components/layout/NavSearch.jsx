import Logo from "../Logo";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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
        <Input id="search" className="w-96" placeholder="Pencarian" />
      </div>
    </div>
  );
};

export default NavSearch;

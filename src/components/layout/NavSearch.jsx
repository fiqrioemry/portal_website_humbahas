import { Search } from "lucide-react";
import SearchResult from "./SearchResult";

const NavSearch = () => {
  return (
    <div className="px-2">
      <div className="flex space-x-2 text-background">
        <Search className="cursor-pointer" />
        <span>Search</span>
      </div>
      <div className="relative bg-red-500 w-full right-0 left-0 h-40">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
          consectetur voluptatum pariatur, voluptates suscipit eum minus dolor
          blanditiis temporibus vitae ipsum iure facilis delectus! Eius
          obcaecati, excepturi incidunt sed quas totam atque quasi doloribus
          consequuntur est animi at ratione beatae!
        </div>
      </div>
      {/* <SearchResult /> */}
    </div>
  );
};

export default NavSearch;

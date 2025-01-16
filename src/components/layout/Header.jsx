import NavMenu from "./NavMenu";
import NavSearch from "./NavSearch";

const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <NavSearch />
      <NavMenu />
    </header>
  );
};

export default Header;

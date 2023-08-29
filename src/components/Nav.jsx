import Search from "./Search";

const Nav = ({ handleSearch }) => {
  return (
    <>
      <Search handleSearch={handleSearch} />
      <nav>Logo, Navigation</nav>
    </>
  );
};

export default Nav;

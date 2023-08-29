import Search from "./Search";

const Nav = ({ handleSearch }) => {
  return (
    <>
      <div className="col">
        <nav>Logo, Navigation</nav>
      </div>
      <div className="col d-flex justify-content-end">
        <Search handleSearch={handleSearch} />
      </div>
    </>
  );
};

export default Nav;

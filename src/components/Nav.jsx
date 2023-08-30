import Search from "./Search";

const Nav = ({ handleSearch }) => {
  return (
    <>
      <div className="col">
        <nav>
          <img src="/nackerhews.svg" width="50" /> <strong>Nacker Hews</strong>
          <span className="mx-2">
            new | past | comments | ask | show | jobs | submit
          </span>
        </nav>
      </div>
      <div className="col d-flex justify-content-end">
        <Search handleSearch={handleSearch} />
      </div>
    </>
  );
};

export default Nav;

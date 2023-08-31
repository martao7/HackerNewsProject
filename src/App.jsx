import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Paginator from "./components/Paginator";
import ItemList from "./components/ItemList";

function App() {
  const [hits, setHits] = useState([]);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(0);
  const [nbPages, setnbPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search_by_date?query=${topic}&tags=story&page=${page}`
      );
      const searchData = response.data;
      setHits(searchData.hits);
      setPage(searchData.page);
      setnbPages(searchData.nbPages);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <header className="container mt-4">
        <div className="row d-flex align-items-center">
          <Nav handleSearch={handleSearch} setTopic={setTopic} />
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div className="col">
            {!hits.length && !isLoading ? (
              "No search results"
            ) : (
              <ItemList hits={hits} isLoading={isLoading} />
            )}
          </div>
        </div>

        {nbPages > 1 ? (
          <Paginator
            posts={hits}
            paginate={paginate}
            page={page}
            setPage={setPage}
            nbPages={nbPages} //max
          />
        ) : (
          ""
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;

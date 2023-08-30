import axios from "axios";
import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Paginator from "./components/Paginator";
import ItemList from "./components/ItemList";
import myData from "./fakeData.json";

document.body.style.backgroundColor = "#2ec4b6";

function App() {
  const [hits, setHits] = useState([...myData.hits]);
  const [pages, setPages] = useState(0);

  const handleSearch = async (topic) => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search_by_date?query=${topic}`
    );
    const searchData = response.data;
    setHits(searchData.hits);
    setPages(searchData.nbHits);
  };

  return (
    <>
      <header className="container">
        <div className="d-flex row justify-content-end">
          <Nav handleSearch={handleSearch} />
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div className="col">
            <ItemList posts={hits} />
          </div>
        </div>

        <Paginator posts={hits} />
      </main>
      <Footer />
    </>
  );
}

export default App;

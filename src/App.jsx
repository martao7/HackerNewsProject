import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Paginator from "./components/Paginator";
import ItemList from "./components/ItemList";
import Search from "./components/Search";
import myData from "./fakeData.json";

import { useState, useEffect } from "react";

document.body.style.backgroundColor = "#011627";

function App() {
  //prod
  //const [posts, setPosts] = useState([]);

  //test
  const [posts, setPosts] = useState([...myData.hits]);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed because of ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        //setPosts(data.hits);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header className="container">
        <Nav />
        <Search />
      </header>

      <main className="container">
        <div className="row">
          <div className="col">
            <ItemList posts={posts} />
          </div>
        </div>

        <Paginator posts={posts} />
      </main>
      <Footer />
    </>
  );
}

export default App;

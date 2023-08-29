import { useState, useEffect } from "react";
import "./App.css";
import Paginator from "./components/Paginator";
document.body.style.backgroundColor = "#011627";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const paging = false;

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed because of ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setPosts(data.hits);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header className="container">
        <nav>
          Logo, Navigation, Search
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </nav>
      </header>

      <main className="container">
        <div className="row">
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col">
            <ul className="list-group" id="hits">
              {posts.length
                ? posts.map((post, id) => (
                    <li className="list-group-item" key={id}>
                      {post.title}
                    </li>
                  ))
                : "...loading"}
            </ul>
          </div>
        </div>
        {paging && <Paginator />}
      </main>

      <footer className="container footer">
        Click on the Vite and React logos to learn more
      </footer>
    </>
  );
}

export default App;

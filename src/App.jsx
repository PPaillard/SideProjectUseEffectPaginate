import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Post from "./components/Post";

const nbPerPage = 10;

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("UseEffect");
    axios(`http://localhost:3000/posts?_page=${page}&limit=${nbPerPage}`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, [page]);

  return (
    <div className="App">
      <div>
        {[1, 2, 3, 4, 5].map((numPage) => (
          <button key={numPage} onClick={() => setPage(numPage)}>
            {numPage}
          </button>
        ))}
      </div>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;

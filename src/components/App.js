import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';
import { auth } from "../firebaseConfig";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { fetchArticles, createArticle, deleteArticle } from "../services/articleService";
import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);
  const [selected, setSelected] = useState('');
  const user = useAuthentication();

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body, author: auth.currentUser.displayName }).then((article) => {
      setArticle(article);
      setSelected(article.id);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  function removeArticle(id) {
    deleteArticle(id).then(() => {
      setArticles(articles.filter(a => a.id !== id));
      setArticle(articles.find(a => a.id !== id));
      setSelected(articles.find(a => a.id !== id).id);
    });
  }

  return (
    <div className="App">
      <header className="h-16 border-b-[0.1px] border-gray-700 mx-auto p-4 text-gray-200 flex w-screen justify-between items-center col-span-2">
        Blog Posts
        {user && <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-md flex items-center gap-2 hover:bg-blue-500"
          onClick={() => setWriting(!writing)}>{!writing ? <HiOutlinePencilAlt /> : <HiX />} {!writing ? 'New Article' : 'Cancel Entry'}
        </button>}
        {!user ? <SignIn /> :
          <SignOut />}
      </header>

      {!user ? "" : <Nav articles={articles} setArticle={setArticle} selected={selected} setSelected={setSelected} />}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} removeArticle={removeArticle} />
      )}
    </div>
  );
}
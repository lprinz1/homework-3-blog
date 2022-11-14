import { useState } from "react";
import { BsPlusLg } from 'react-icons/bs';

export default function ArticleEntry({ addArticle }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied");
    } else {
      addArticle({ title, body });
    }
  }

  return (
    <div>
      <form className="relative text-lg py-4 px-6 gap-2 flex flex-col text-gray-300" onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Title
        <input placeholder="Enter your title here" className="bg-gray-800 outline-none px-3 rounded-md mb-4 h-10 p-2 text-lg focus:ring-blue-500 focus:border focus:border-blue-500" value={title} onChange={(e) => setTitle(e.target.value)} />
        Content
        <textarea
          rows="8"
          value={body}
          className="bg-gray-800 outline-none px-3 rounded-md mb-4 p-2 text-lg focus:ring-blue-500 focus:border focus:border-blue-500"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="bg-blue-600 text-white text-[14px] px-3 py-1 rounded-lg text-md flex justify-center items-center gap-2 hover:bg-blue-500 ml-auto"
          type="submit"><BsPlusLg className="scale-[0.8]"/> Publish Post</button>
      </form>
    </div>
  );
}

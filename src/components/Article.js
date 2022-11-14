import moment from 'moment';
import { HiOutlineTrash } from 'react-icons/hi';

export default function Article({ article, removeArticle }) {
  return (
    <article className="text-gray-300 py-4 px-6">
      {!article ? (
        <p>To begin reading, select an article from the sidebar!</p>
      ) : (
        <section>
          <h2 className="font-bold text-4xl text-slate-300">{article.title}</h2>
          <p className="text-slate-400">{`Written by ${article.author}`}</p>
          <p className="text-slate-500">{`${moment(article.date.toDate()).format('LLL')}`}</p>
          <p className="whitespace-pre-wrap py-6">{article.body}</p>
          <button className="bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-md flex items-center gap-2" onClick={() => { removeArticle(article.id); }}><HiOutlineTrash />Delete Post</button>
        </section>
      )}
    </article>
  );
}

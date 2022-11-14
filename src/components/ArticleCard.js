export default function ArticleCard({ article, setActive, selected, setSelected }) {
  return <div onClick={() => {
    setSelected(article.id);
    setActive(article);
  }} className={`w-full cursor-pointer p-4 rounded-lg`} style={{ backgroundColor: selected === article.id ? '#1d4ed8' : '#1e293b'}}>
    <p className="text-sm">{article.title}</p>
    <p className="text-gray-400 text-xs">By {article.author}</p>
  </div>;
}
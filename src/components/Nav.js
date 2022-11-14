import ArticleCard from './ArticleCard';

export default function Nav({ articles, setArticle, selected, setSelected }) {

  return (
    <nav className="h-[40%] mb:h-full overflow-scroll flex items-center flex-col gap-4 p-4 text-white border-r-[0.5px] border-gray-700">
      {!articles
        ? "No articles"
        : articles.map((a) => (
          <ArticleCard key={a.id} article={a} setActive={setArticle} selected={selected} setSelected={setSelected}/>
        ))}
    </nav>
  );
}

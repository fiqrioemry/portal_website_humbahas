import { newsList } from "../../config";
import { Link } from "react-router-dom";
import HomeNewsCard from "../HomeNewsCard";
import { ArrowRight } from "lucide-react";

const News = () => {
  const randomNews = newsList.sort(() => Math.random() - 0.5).slice(0, 8);

  return (
    <section className="space-y-6 py-6 px-2 md:px-6 ">
      <div className="flex items-center justify-between">
        <h2>News</h2>
        <div>
          <Link
            to="/news"
            className="flex items-center font-semibold text-accent space-x-3 hover:text-accent/80 duration-300 transition-all"
          >
            <span>Selengkapnya</span>
            <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {randomNews.map((news) => (
          <HomeNewsCard news={news} key={news.id} />
        ))}
      </div>
    </section>
  );
};

export default News;

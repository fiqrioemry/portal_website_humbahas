import { newsList } from "../../config";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/NewsCard";
import NewsIndex from "../../components/NewsIndex";
import HitNewsCard from "../../components/HitNewsCard";

const Cerdas = () => {
  const location = useLocation();
  const name = location.pathname.split("/").pop();
  const selectedNews = newsList.filter((news) => news.category === name);
  const randomNews = newsList.sort(() => Math.random() - 0.5).slice(0, 5);

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex-col flex md:flex-row">
          <NewsIndex name={name} />
          <div className="max-w-[50rem] w-full h-screen overflow-y-scroll">
            {/* index */}
            <div>
              {selectedNews.map((news) => (
                <NewsCard news={news} key={news.id} />
              ))}
            </div>
          </div>

          <div className="px-2 lg:block hidden ">
            <div className="space-y-2">
              <div className="text-center">
                <h4>Hits News</h4>
              </div>
              {randomNews.map((news) => (
                <HitNewsCard news={news} key={news.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cerdas;

/* eslint-disable react/prop-types */
import NewsAuthor from "./NewsAuthor";
import { Link, useLocation } from "react-router-dom";

const NewsCard = ({ news }) => {
  const location = useLocation();
  const basePoint = location.pathname;

  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(" ")}...`;
    }
    return content;
  };

  return (
    <div className="py-6 px-4 space-y-4 md:space-y-2 border">
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-5 md:col-span-4">
          <h5 className="text-accent">{news.title}</h5>
          <Link to={`${basePoint}/${news.slug}`}>
            <h2 className="text-blue-800">{news.subtitle}</h2>
          </Link>
          <p className="md:text-md text-sm text-justify">
            {truncateContent(news.content, 30)}
            <Link to={`${basePoint}/${news.slug}`}>
              <span className="text-blue-500">selengkapnya</span>
            </Link>
          </p>
        </div>
        <div className="md:block hidden col-span-1">
          <img
            className="h-46"
            src="https://placehold.co/400x400?font=roboto"
            alt="news"
          />
        </div>
      </div>
      <NewsAuthor date={news.date} author={news.author} />
    </div>
  );
};

export default NewsCard;

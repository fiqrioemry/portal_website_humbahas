/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import NewsAuthor from "./NewsAuthor";

const HitNewsCard = ({ news }) => {
  return (
    <div className="flex space-x-2">
      <div className="w-[260px]">
        <span className="text-sm">{news.category}</span>
        <Link to={`/news/${news.category}/${news.slug}`}>
          <h5>{news.title}</h5>
        </Link>

        <NewsAuthor date={news.date} author={news.author} />
      </div>
      <div>
        <img
          className="w-24 h-24"
          src="https://placehold.co/400x400?font=roboto"
        />
      </div>
    </div>
  );
};

export default HitNewsCard;

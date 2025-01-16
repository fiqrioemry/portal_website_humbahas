/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeNewsCard = ({ news }) => {
  return (
    <div>
      <div>
        <img src="https://placehold.co/400x400/gray/white" alt="news" />
      </div>
      <div className="space-y-2 py-2">
        <div className="min-h-8 md:max-h-12">
          <Link to={`/news/${news.category}/${news.slug}`}>
            <h5 className="text-xs md:text-sm  text-accent">{news.title}</h5>
          </Link>
        </div>
        <div className="h-10 md:h-14">
          <p className="text-xs md:text-[16px]">{news.subtitle}</p>
        </div>

        <div className="flex items-center md:text-md text-xs space-x-4">
          <div>{news.date}</div>
          <span>|</span>
          <div className="col-span-2">{news.author}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCard;

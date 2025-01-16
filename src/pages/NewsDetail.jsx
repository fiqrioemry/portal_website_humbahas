import { newsList } from "../config";
import { useLocation } from "react-router-dom";
import NewsAuthor from "../components/NewsAuthor";
import PageBreadCrumb from "../components/PageBreadCrumb";

const NewsDetail = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/").pop();
  console.log(currentLocation);
  console.log(newsList);
  const selectedNews = newsList.find((item) => item.slug === currentLocation);
  console.log(selectedNews);
  const { title, subtitle, author, date, content } = selectedNews;
  return (
    <section className="py-6">
      <div className="container mx-auto space-y-4">
        <PageBreadCrumb />
        <div className="flex justify-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2>{title}</h2>
              <NewsAuthor date={date} author={author} />
            </div>

            <div>
              <img src="https://placehold.co/700x500/red/white" alt="news" />
            </div>
          </div>
        </div>
        <h4>{subtitle}</h4>
        <div>{content}</div>
        <div>{content}</div>
        <div>{content}</div>
        <div>{content}</div>
        <div>{content}</div>
      </div>
    </section>
  );
};

export default NewsDetail;

import { useState } from "react";
import { newsList } from "../config";
import { PaginationBox } from "./PaginationBox";
import { Link, useLocation } from "react-router-dom";

const IndexCard = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentName = useLocation().pathname.split("/").pop();
  const selectedNews = newsList.filter((news) => news.category === currentName);
  const currentNews = selectedNews.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(selectedNews.length / itemsPerPage);

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-10 md:col-span-7 border border-muted">
            <div>
              <div className="py-12 bg-muted border-b px-6 ">
                <h1>Index Berita {currentName}</h1>
              </div>
              {currentNews.map((news) => (
                <div className="px-6" key={news.id}>
                  <div className="border-b py-4">
                    <div>{news.date}</div>
                    <h4>{news.title}</h4>
                    <Link to={`/news/${currentName}/${news.slug}`}>
                      <h3 className="text-blue-800">{news.subtitle}</h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-6">
              <PaginationBox
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
              />
            </div>
          </div>

          {/* Arsip berita */}
          <div className="md:block hidden col-span-3 border border-muted">
            <div className="py-12 bg-muted border-b px-6 ">
              <h1>Arsip Berita </h1>
            </div>
            {selectedNews.map((news) => (
              <div className="border-b text-blue-500 py-2 px-6 " key={news.id}>
                <h5>{news.date} </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexCard;

/* eslint-disable react/prop-types */
const NewsAuthor = ({ date, author }) => {
  return (
    <div className="flex items-center md:text-md text-xs space-x-4">
      <div>{date}</div>
      <span>|</span>
      <div className="col-span-2">{author}</div>
    </div>
  );
};

export default NewsAuthor;

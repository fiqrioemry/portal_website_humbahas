import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CerdasSehatCard = ({ title, path }) => {
  return (
    <div className="bg-red-500">
      <div className="relative">
        <img
          className=" h-full w-full"
          src="https://placehold.co/400x400/black/white"
        />
        <div className="absolute px-4 bottom-5 text-background">
          <h3>{title}</h3>
          <Link to={`${path}`}>Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default CerdasSehatCard;

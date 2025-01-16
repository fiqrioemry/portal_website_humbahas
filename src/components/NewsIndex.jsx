import { Link } from "react-router-dom";
import useToastMessage from "../hooks/useToastMessage";

// eslint-disable-next-line react/prop-types
const NewsIndex = ({ name }) => {
  const { handleShowToast } = useToastMessage();
  return (
    <div className="w-full md:w-56 text-sm py-4 px-2 md:block flex gap-6">
      <Link
        to={`/index/${name}`}
        className="flex justify-end font-semibold cursor-pointer"
      >
        Index {name} +
      </Link>
      <div className="flex justify-end font-semibold">
        <button onClick={handleShowToast}>Index A - Z +</button>
      </div>
    </div>
  );
};

export default NewsIndex;

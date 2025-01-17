import { Link } from "react-router-dom";
import CerdasSehatCard from "../CerdasSehatCard";

const CerdasSehat = () => {
  return (
    <section className="py-6 px-4 md:px-8 bg-accent">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        <CerdasSehatCard title="cerdas" path="/news/cerdas" />
        <CerdasSehatCard title="nyaman" path="/news/nyaman" />
        <CerdasSehatCard title="wisata" path="/news/wisata" />
        <CerdasSehatCard title="terkoneksi" path="/news/terkoneksi" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:mb-0 mb-6 py-0 md:py-6">
        <CerdasSehatCard title="sejahtera" path="/news/sejahtera" />
        <CerdasSehatCard title="sehat" path="/news/sehat" />
        <div className="md:hidden flex items-end col-start-2 md:col-start-1">
          <Link to="/news" className="w-full">
            <div className="py-2 px-4 border text-background text-white border-background">
              Visit News
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="hidden md:grid grid-cols-4 gap-6 ">
          <Link to="/news" className="col-start-4 col-end-5">
            <div className="py-2 px-4 border text-background text-white border-background flex justify-center ">
              Visit News
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CerdasSehat;

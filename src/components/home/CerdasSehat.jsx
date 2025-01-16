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
        <div className="flex items-end col-start-2 md:col-start-1">
          <Link to="/news" className="w-full">
            <div className="py-2 px-4 border text-background text-white border-background">
              Visit News
            </div>
          </Link>
        </div>
        <CerdasSehatCard title="sejahtera" path="/news/sejahtera" />
        <CerdasSehatCard title="sehat" path="/news/sehat" />
      </div>
    </section>
  );
};

export default CerdasSehat;

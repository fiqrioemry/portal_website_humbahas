// pages
import Home from "./pages/Home";
import News from "./pages/News";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Pejabat from "./pages/Pejabat";
import Sehat from "./pages/news/Sehat";
import Lowongan from "./pages/Lowongan";
import Wisata from "./pages/news/Wisata";
import Nyaman from "./pages/news/Nyaman";
import Cerdas from "./pages/news/Cerdas";
import Pengaduan from "./pages/Pengaduan";
import NewsDetail from "./pages/NewsDetail";
import Sejahtera from "./pages/news/Sejahtera";
import Terkoneksi from "./pages/news/Terkoneksi";

// support
import IndexCard from "./components/IndexCard";
import Layout from "./components/layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="index" element={<Index />}>
            <Route path=":slug" element={<IndexCard />} />
          </Route>

          {/* news */}
          <Route path="news" element={<News />}>
            <Route index element={<Navigate to="cerdas" replace />} />
            <Route index path="cerdas" element={<Cerdas />} />
            <Route path="sehat" element={<Sehat />} />
            <Route path="wisata" element={<Wisata />} />
            <Route path="nyaman" element={<Nyaman />} />
            <Route path="sejahtera" element={<Sejahtera />} />
            <Route path="terkoneksi" element={<Terkoneksi />} />
          </Route>

          <Route path="gallery" element={<Gallery />} />
          <Route path="lowongan" element={<Lowongan />} />
          <Route path="pengaduan" element={<Pengaduan />} />
          <Route path="/news/:slug/:slug" element={<NewsDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

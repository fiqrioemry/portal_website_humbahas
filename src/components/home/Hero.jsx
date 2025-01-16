const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center "
      style={{ backgroundImage: "url(/humbahas_hero_image.png)" }}
    >
      <div className="absolute grid grid-cols-4 bottom-10 md:bottom-[5rem] lg:bottom-[7rem] px-4">
        <div className="col-span-4 md:col-span-3 space-y-6">
          <div>
            <h1 className="text-active font-bold">VISI</h1>
            <p className="text-xl md:text-2xl text-background">
              Pengembangan investasi SDM untuk anak-anak muda dan fasilitas
              kesehatan
            </p>
          </div>
          <div className="flex space-x-4 min-h-40">
            <div className="w-2 bg-active h-24"></div>
            <p className="text-md md:text-xl text-justify text-background">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              tempora cumque corrupti impedit accusamus officia, consequuntur
              magni hic molestias! Cupiditate est sit ut a. Id ut illum tempore,
              nisi deserunt debitis fugiat ipsa voluptas Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

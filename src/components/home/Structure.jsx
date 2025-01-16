import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Structure = () => {
  return (
    <section className="bg-accent text-background ">
      <div className="space-y-6 py-6 px-2 container mx-auto">
        <div className="text-center space-y-6">
          <h2>Susunan Organisasi</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            quibusdam adipisci nobis, illum nulla excepturi quaerat provident
            modi repellendus earum vero expedita tempore facilis explicabo ipsam
            harum. Suscipit facere necessitatibus doloribus est numquam. Vitae,
            eveniet ut quia quidem, reiciendis, eum porro tenetur debitis
            molestias laudantium quis enim possimus dicta culpa.
          </p>
        </div>
        <div className="px-2">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/2 lg:basis-1/3 "
                >
                  <div>
                    <div>
                      <img
                        src="https://placehold.co/400x400/white/black"
                        alt="avatar"
                      />
                    </div>
                    <div className="text-center py-2">
                      <h3>Nama Anggota</h3>
                      <p>Jabatan Anggota</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Structure;

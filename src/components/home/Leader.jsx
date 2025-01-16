import { Button } from "@/components/ui/button";

const Leader = () => {
  return (
    <section className="space-y-6 md:py-0 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="relative h-96 bg-center"
          style={{
            backgroundImage: "url(/leader.png)",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="h-auto md:min-h-96  flex items-center justify-center md:justify-start pr-0 md:pr-12">
          <div className="space-y-6 ">
            <div className="text-center md:text-start space-y-3">
              <h3>Ketua Partai Gerinda Humbahas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                aut reiciendis sint repudiandae quas quam qui veritatis et
                perspiciatis tempora eos, aspernatur aperiam laudantium odio hic
                explicabo eveniet iusto nobis rerum molestiae praesentium quia
                commodi adipisci soluta. Fugit, laborum et.
              </p>
            </div>

            <div className="flex md:justify-start justify-center">
              <Button className=" hover:bg-accent" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leader;

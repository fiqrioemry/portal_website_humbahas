import { cn } from "@/lib/utils";
import { newsChildrenPath } from "../config";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const News = () => {
  const location = useLocation();

  return (
    <section>
      <div className="container mx-auto mb-10">
        <div className="flex justify-center py-0 md:py-4">
          <Tabs className="w-full">
            <TabsList className="grid grid-cols-6">
              {newsChildrenPath.map((item) => {
                const isActive = item.path === location.pathname;
                return (
                  <Link to={item.path} key={item.title}>
                    <TabsTrigger
                      className={cn(
                        "capitalize text-background w-full h-10 rounded-none",
                        {
                          "border-accent border-b-2 text-active": isActive,
                        }
                      )}
                    >
                      {item.title}
                    </TabsTrigger>
                  </Link>
                );
              })}
            </TabsList>
          </Tabs>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default News;

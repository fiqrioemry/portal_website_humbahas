import useToastMessage from "../../hooks/useToastMessage";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { handleShowToast } = useToastMessage();
  return (
    <footer className="bg-muted">
      <div className="py-12 px-2 md:px-10">
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-5 md:col-span-3 space-y-6">
            <div className="flex md:justify-start justify-center">
              <div className="h-[200px]">
                <img
                  className="w-full h-full"
                  src="/footer_logo.png"
                  alt="gerinda_humbahas"
                />
              </div>
            </div>

            <div className="text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                optio nostrum, unde porro ipsa enim? Sequi, distinctio magni
                maxime vero, pariatur quod harum, asperiores expedita voluptatem
                deserunt voluptate molestias reiciendis praesentium? Laborum
                nisi maiores voluptas totam cumque id ex non excepturi
                reiciendis odio consequuntur aliquam, voluptates eaque,
                aspernatur voluptatibus officiis?
              </p>
            </div>
          </div>
          <div className="col-span-5 md:col-span-2 ">
            <div className="flex justify-center">
              <div className="max-w-96 space-y-6 ">
                <div className="flex items-center justify-center space-x-8 font-semibold">
                  <button onClick={handleShowToast}>Contact</button>
                  <button onClick={handleShowToast}>Location</button>
                  <button onClick={handleShowToast}>Legal</button>
                  <button onClick={handleShowToast}>Information</button>
                </div>
                <div className="flex items-center justify-center space-x-8">
                  <FaYoutube size={40} />
                  <FaTwitter size={40} />
                  <FaFacebook size={40} />
                  <FaInstagram size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

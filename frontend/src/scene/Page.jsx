import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Blog from "../component/Blog";
import Footer from "../component/Footer";
import Side from "../component/Side";

function Page() {
  const { slug } = useParams();

  return (
    <div className="content flex flex-col justify-between min-h-screen bg-site">
      <div>
        <Header />
        <div className="container px-12 md:px-24 lg:px-48 py-12 mx-auto grid grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="col-span-2">
            <Blog slug={slug} />
          </div>
          <div className="hidden xl:block bg-back p-6">
            <Side />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;

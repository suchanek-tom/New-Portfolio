import { Link } from "react-router-dom";
import Navbar from "./components/navbar";

const NotFoundPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center md:text-3xl">
                <span className="">Oops!</span> Page was not found
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link to="/" className="btn">
                Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

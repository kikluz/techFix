import { useRouteError, Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <FaExclamationTriangle className="text-6xl text-warning mx-auto mb-4" />
        <h1>Oops! SOmenthing went wrong!</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          We apologize for the inconvenience. The page you're looking for isn't
          available.
        </p>
        <div className="space-x-4">
          <Link to="/" className="btn btn-primary">
            <FaHome className="mr-2" />
            back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

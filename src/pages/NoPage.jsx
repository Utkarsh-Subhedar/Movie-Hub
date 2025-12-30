import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="text-center max-w-md">
        {/* Error Code */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold text-gray-200 leading-none">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block rounded-lg bg-green-700 px-6 py-3 text-white text-sm font-medium hover:bg-green-800 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPage;

// ServerErrorPage.jsx
import React from "react";

const ServerErrorPage = ({
  status = 500,
  title = "Internal Server Error",
  message = "An error occurred while starting the application.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 dark:text-gray-100 px-4">
      {/* Big sad face */}
      <div className="text-[4rem] sm:text-[6rem] md:text-[8rem] mb-4">:(</div>

      {/* Status + Title */}
      <h1 className="flex items-center text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
        <span className="text-red-700 mr-2 text-4xl sm:text-5xl md:text-6xl">
          |
        </span>
        {title}
      </h1>

      {/* Error Code */}
      <p className="text-base sm:text-lg md:text-xl mb-4">
        Error Code: <span className="font-semibold">{status}</span>
      </p>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 text-center max-w-md sm:max-w-xl">
        {message}
      </p>
    </div>
  );
};

export default ServerErrorPage;

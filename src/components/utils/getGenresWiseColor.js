import React from "react";

export const getGenresWiseColor = (genre) => {
  console.log(genre);
  switch (genre.name) {
    case "Action":
      return "text-[#FF5733]";

    case "Adventure":
      return "text-[#FFC300]";

    case "Animation":
      return "text-[#FF9FF0]";

    case "Comedy":
      return "text-[#00FF00]";

    case "Crime":
      return "text-[#900C3F]";

    case "Documentary":
      return "text-[#2E86C1]";

    case "Drama":
      return "text-[#884EA0]";

    case "Family":
      return "text-[#58D68D]";

    case "Fantasy":
      return "text-[#A569BD]";

    case "History":
      return "text-[#7D6608]";

    case "Horror":
      return "text-[#B22222]";

    case "Music":
      return "text-[#F39C12]";

    case "Mystery":
      return "text-[#6C3483]";

    case "Romance":
      return "text-[#FF6F61]";

    case "Science Fiction":
      return "text-[#2980B9]";

    case "TV Movie":
      return "text-[#F5B041]";

    case "Thriller":
      return "text-[#E74C3C]";

    case "War":
      return "text-[#8B0000]";

    case "Western":
      return "text-[#D35400]";

    default:
      return "text-gray-500";
  }
};

import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
  return (
    <div className="w-[90px] bg-zinc-950 rounded-full p-[0.2rem] font-bold ">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating?.toFixed(1)}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)

          textSize: "36px",
          trailColor: "transparent", // Colors customization
          pathColor: `${
            rating <= 3
              ? "rgba(255, 0, 0)"
              : rating > 3 && rating <= 6
              ? "rgba(259, 170, 0)"
              : "rgba(0, 128, 0)"
          }`, // Green progress bar
          textColor: "#fff", // White text
          backgroundColor: "#000", // Black background
        })}
      />
    </div>
  );
};

export default CircleRating;

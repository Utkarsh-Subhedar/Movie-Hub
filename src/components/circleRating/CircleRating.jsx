import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
  // ✅ Clamp rating to minimum of 1 (if valid number), otherwise fallback to 0
  // This avoids issues like rating being null/undefined/NaN
  const safeRating = Number.isFinite(rating) ? Math.max(rating, 1) : 0;

  return (
    <div
      className="
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
        bg-zinc-950 rounded-full p-[0.25rem] font-bold
      "
    >
      <CircularProgressbar
        // ✅ Use safe rating for progress value
        value={safeRating}
        maxValue={10}
        // ✅ Safely format rating text
        // Show "0.0" if rating is missing or invalid
        text={Number.isFinite(rating) ? rating.toFixed(1) : "0.0"}
        styles={buildStyles({
          // Responsive text size (scales with container)
          textSize: "200%",
          trailColor: "transparent",
          pathColor:
            safeRating <= 3
              ? "rgba(255, 0, 0)" // Red for low rating
              : safeRating > 3 && safeRating <= 6
              ? "rgba(255, 170, 0)" // Orange for mid rating
              : "rgba(0, 128, 0)", // Green for good rating
          textColor: "#fff",
          backgroundColor: "#000",
        })}
      />
    </div>
  );
};

export default CircleRating;

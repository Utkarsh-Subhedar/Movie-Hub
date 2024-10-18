import React, { useEffect } from "react";

export const imageCheck = (key, callback) => {
  const img = new Image();

  img.onload = () => {
    callback(true);
  };
  img.onerror = () => {
    callback(false);
  };
  img.src = `https://img.youtube.com/vi/${key}/hqdefault.jpg`;
};

import React from "react";

export const getSortingCallbacks = (labels) => {
  const Arr = [];
  if (labels?.includes("default")) {
    Arr.push({
      label: "Default",
      method: () => {},
    });
  }
  if (labels.includes("trending")) {
    Arr.push({
      label: "Trending",
      method: (a, b) => b.vote_average - a.vote_average,
    });
  }
  if (labels?.includes("AtoZ")) {
    Arr.push({
      label: "A - Z",
      method: (a, b) => a?.title.localeCompare(b?.title),
    });
  }
  if (labels?.includes("ZtoA")) {
    Arr.push({
      label: "Z -  A",
      method: (a, b) => b?.title.localeCompare(a?.title),
    });
  }
  return Arr;
};

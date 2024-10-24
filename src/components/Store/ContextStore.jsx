import React, { createContext, useReducer } from "react";

export const movieContext = createContext({
  movieData: [],
  newWishlist: () => {},
});
const dataHandle = (movieData, action) => {
  let newMovieData = movieData;
  const { type, payload } = action;
  if (
    type === "wishlist" &&
    movieData.some((movie) => movie.id === payload.data.id) === false
  ) {
    newMovieData = [...movieData, payload.data];
  } else {
    newMovieData = movieData.filter((movie) => {
      movie.id !== payload.data.id;
    });
  }
  return newMovieData;
};
const ContextStore = ({ children }) => {
  const [movieData, dispatch] = useReducer(dataHandle, []);
  const newWishlist = (data) => {
    const wishlist = {
      type: "wishlist",
      payload: {
        data,
      },
    };
    dispatch(wishlist);
  };
  return (
    <movieContext.Provider value={{ movieData, newWishlist }}>
      {children}
    </movieContext.Provider>
  );
};

export default ContextStore;

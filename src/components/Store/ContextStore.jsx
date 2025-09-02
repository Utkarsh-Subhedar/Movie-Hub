import React, { createContext, useReducer } from "react";

export const movieContext = createContext({
  movieData: [],
  newWishlist: () => {},
});
const dataHandle = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "wishlist": {
      const targetId = String(payload.data.id);

      const exists = state.some((m) => String(m.id) === targetId);

      let newMovieData;
      if (exists) {
        newMovieData = state.filter((m) => String(m.id) !== targetId);
      } else {
        newMovieData = [...state, payload.data];
      }

      localStorage.setItem("wishlistArray", JSON.stringify(newMovieData));
      return newMovieData;
    }
    default:
      return state;
  }
};
const init = () => {
  try {
    const saved = localStorage.getItem("wishlistArray");
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : []; // ✅ always return array
  } catch {
    return [];
  }
};
const ContextStore = ({ children }) => {
  const [movieData, dispatch] = useReducer(dataHandle, [], init);
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

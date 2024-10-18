import React, { createContext, useState } from "react";
import useFetch from "../custom_hook/useFetch";

const DetailsContext = createContext();
const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState(null);

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

export { DetailsProvider, DetailsContext };

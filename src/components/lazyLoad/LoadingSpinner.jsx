import React from "react";
import { ColorRing } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="absolute top-1/2 right-1/2 -translate-y-1/2">
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e2e8f0", "#94a3b8"]}
      />
    </div>
  );
};

export default LoadingSpinner;

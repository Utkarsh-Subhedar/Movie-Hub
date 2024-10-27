import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NoPoster from "@/assets/Img/no-poster.png";

import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
  return <LazyLoadImage className={className} effect="blur" src={src} />;
};

export default Img;

import axios from "axios";
import React, { useEffect, useState } from "react";

const usePost = (props) => {
  const post = async () => {
    try {
      const response = await axios.post(`/movie/${props.movieId}/rating`, {
        value: props.rating,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    post();
  }, [props]);
};

export default usePost;

import React from "react";

const Links = ({ url, name }) => {
  return (
    <li>
      <a href={url} className="hover:text-sky-700">
        {name}
      </a>
    </li>
  );
};

export default Links;

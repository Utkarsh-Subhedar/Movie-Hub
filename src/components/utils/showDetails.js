import { useNavigate } from "react-router";

export const showDetails = (navigate, id) => {
  navigate(`/Details/${id}`);
};

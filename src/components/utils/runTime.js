export const movieRuntime = (data) => {
  const movieHours = Math.floor(data?.runtime / 60);
  const movieMinutes = data?.runtime % 60;
  return `${movieHours}h${" "}${movieMinutes > 0 ? `${movieMinutes}m` : ""}`;
};

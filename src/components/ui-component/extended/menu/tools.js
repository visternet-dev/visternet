export const checkActiveItem = ({ path = "", pathname = "" }) => {
  if (path[0] === "/") return path === pathname;
  return path === pathname.slice(1);
};

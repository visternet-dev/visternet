export const checkActiveItem = ({ url = "", pathname = "" }) => {
  if (url[0] === "/") return url === pathname;
  return url === pathname.slice(1);
};

import useScreen from "hooks/useScreen";

import MenuDesktop from "./desktop";
import MenuMobile from "./mobile";

function CustomMenu({ data }) {
  const { tablet } = useScreen();

  if (tablet) return <MenuMobile data={data} />;
  return <MenuDesktop data={data} />;

  
}

export default CustomMenu;

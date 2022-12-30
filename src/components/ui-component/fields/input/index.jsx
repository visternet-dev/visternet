import { useEffect, useRef } from "react";

import InputStyle from "./style";

function CustomInput(props) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) ref?.current?.setAttribute("dir", "auto");
  }, [ref]);

  return <InputStyle inputRef={ref} {...props} />;
}

export default CustomInput;

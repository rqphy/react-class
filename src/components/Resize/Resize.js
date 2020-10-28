import { useEffect, useState } from "react";

function Resize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return <div>{width}px</div>;
}

export default Resize;

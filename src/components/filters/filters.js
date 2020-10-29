import { useState } from "react";

function Filters() {
  const [title, setTitle] = useState("foo");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <div>
      <input tpye="text" value={title} onChange={handleChange} />
    </div>
  );
}

export default Filters;

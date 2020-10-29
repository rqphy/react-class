import { useState } from "react";

function Filters(props) {
  const { title, handleChange } = props;

  return (
    <div>
      <input tpye="text" value={title} onChange={handleChange} />
    </div>
  );
}

export default Filters;

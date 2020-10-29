import { useRef, useEffect } from "react";

function Filters(props) {
  const { categories, category, title, handleFilterChange, published } = props;
  const inputRef = useRef(null);
  console.log(inputRef.current);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div>
      <input
        name="title"
        tpye="text"
        value={title}
        onChange={handleFilterChange}
        ref={inputRef}
      />
      <select name="category" value={category} onChange={handleFilterChange}>
        <option value=""></option>
        {categories.map((cat) => (
          <option value={cat.id} key={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>
      <label>
        All :
        <input
          type="radio"
          name="published"
          value=""
          onChange={handleFilterChange}
          checked={published === ""}
        />
      </label>
      <label>
        Published :
        <input
          type="radio"
          name="published"
          value="published"
          onChange={handleFilterChange}
          checked={published === "published"}
        />
      </label>
      <label>
        Draft :
        <input
          type="radio"
          name="published"
          value="draft"
          onChange={handleFilterChange}
          checked={published === "draft"}
        />
      </label>
    </div>
  );
}

export default Filters;

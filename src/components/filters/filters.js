function Filters(props) {
  const { categories, category, title, handleFilterChange } = props;

  return (
    <div>
      <input
        name="title"
        tpye="text"
        value={title}
        onChange={handleFilterChange}
      />
      <select name="category" value={category} onChange={handleFilterChange}>
        <option value=""></option>
        {categories.map((cat) => (
          <option value={cat.id} key={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;

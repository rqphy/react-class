const { getDefaultNormalizer } = require("@testing-library/react");

function Container(props) {
  const { children } = props;

  return (
    <div>
      Container
      {children}
    </div>
  );
}

export default Container;

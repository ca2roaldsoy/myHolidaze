import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DropDownResult({ name, idx }) {
  // create a path that links to detail page of establishment
  const path = "establishment/" + idx;

  return (
    <Link to={path} className="search__results--item">
      {name}
    </Link>
  );
}

DropDownResult.propTypes = {
  name: PropTypes.string.isRequired,
  idx: PropTypes.string.isRequired,
};

export default DropDownResult;

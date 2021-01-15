import React from "react";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";

function CheckDate({ checkIn, checkOut, backToTop }) {
  // check if check out is later than check in

  if (checkOut < checkIn) {
    return (
      <>
        {backToTop()}
        <Alert variant="danger" role="alert">
          <Alert.Heading>Warning</Alert.Heading>
          <p>You are trying to check out before checking in.</p>
        </Alert>
      </>
    );
  }
  return null;
}

CheckDate.propTypes = {
  checkIn: PropTypes.instanceOf(Date).isRequired,
  checkOut: PropTypes.instanceOf(Date).isRequired,
  backToTop: PropTypes.func.isRequired,
};

export default CheckDate;

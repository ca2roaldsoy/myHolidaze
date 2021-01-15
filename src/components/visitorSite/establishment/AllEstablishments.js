import React from "react";
import Map from "../../../images/icons/map_v1.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Image
import InfoIcon from "../../../images/icons/information.png";

// react bootstrap
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AllEstablishments({
  id,
  image,
  name,
  maxGuests,
  selfCatering,
  price,
  lat,
  lng,
}) {
  let discountPrice = Math.ceil((price * 70) / 100 - 5); // calculate new price after discount
  let roomsLeft = Math.ceil(maxGuests / 3); // calculate avaiable rooms left

  // calculate discount in percent
  let decrease = price - discountPrice; // decrease amount
  let discount = Math.ceil((decrease / price) * 100); // find percentage

  // Discounts
  function updatePrice() {
    if (price < 100) {
      return (
        <>
          <Card.Text className="establishment__price--discount">
            Save: {discount}&#37;
          </Card.Text>
          <Card.Text className="establishment__price--old">
            NOK {price}
          </Card.Text>
          <Card.Text className="establishment__price--new">
            <strong>NOK {discountPrice}</strong>
          </Card.Text>
        </>
      );
    }
    return (
      <Card.Text className="establishment__price--org">
        <strong>NOK {price}</strong>
      </Card.Text>
    );
  }

  // Display few rooms left
  function deal() {
    if (discountPrice < 50) {
      return (
        <div className="establishment__deal">
          <Card.Text>Hurry!</Card.Text>
          <Card.Text>
            There are only: <strong>{roomsLeft}</strong> room(s) left
          </Card.Text>
        </div>
      );
    }
  }

  return (
    <Card as="section" className="establishment">
      <Row>
        <Col sm={12} lg={5} className="establishment__img">
          <Card.Img src={image} alt={name} role="img" />
        </Col>

        <Col sm={8} md={6} lg={5}>
          <Card.Body>
            <Card.Title className="establishment__title" as="h3">
              {name}
            </Card.Title>

            <div className="establishment__badges">
              <Badge className="establishment__badges--maxGuests">
                Max Guests: {maxGuests}
              </Badge>

              <Badge className="establishment__badges--selfCatering">
                Self Catering: {selfCatering ? "Yes" : "No"}
              </Badge>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip>
                    <h6>Self Catering:</h6>
                    <p>
                      Whether or not guests have facilities for making their own
                      meals and cooking.
                    </p>
                  </Tooltip>
                }
              >
                <Image
                  src={InfoIcon}
                  alt="information icon"
                  fluid
                  className="img-responsive establishment__badges--infoIcon"
                />
              </OverlayTrigger>
            </div>

            {deal()}

            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip>
                  <p>
                    Latitude <br /> {lat}
                  </p>
                  <p>
                    Longitude <br /> {lng}
                  </p>
                </Tooltip>
              }
            >
              <Card.Img
                src={Map}
                alt="map icon"
                className="establishment__mapIcon"
              />
            </OverlayTrigger>
          </Card.Body>
        </Col>

        <Col sm={4} md={6} lg={2} className="establishment__price">
          {updatePrice()}
          <Link to={"establishment/" + id} className="establishment__btn--text">
            <Button role="button" className="establishment__btn">
              View
            </Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
}

AllEstablishments.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default AllEstablishments;

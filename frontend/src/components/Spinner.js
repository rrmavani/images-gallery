import React from "react";
import { Spinner as Loader } from "react-bootstrap";

const setSpinnerStyle = {
  position: "absolute",
  top: "calc(50% - 1rem)",
  left: "calc(50% - 1rem)",
};

const Spinner = () => (
  <Loader style={setSpinnerStyle} animation="border" variant="primary" />
);

export default Spinner;

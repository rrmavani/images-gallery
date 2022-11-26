import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "#eeeeee",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: "20rem", maxHeight: "4rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;

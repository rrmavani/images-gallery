import React from "react";
import { Button, Card, Nav, NavItem } from "react-bootstrap";

const ImageCard = ({ image, deleteImage, saveImage }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{" "}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        <Nav.Link href={image.user?.portfolio_url || ""} target="_blank">
          {image.user?.name || "No Auther Found"}
        </Nav.Link>
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;

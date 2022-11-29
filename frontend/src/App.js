import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Spinner from "./components/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

function App() {
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getSavedImages() {
      try {
        const res = await axios.get(`${API_URL}/images`);
        setImages(res.data || []);
        setLoading(false);
        toast.success("Saved Images Downloaded");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
    getSavedImages();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      setImages([{ ...res.data, title: word }, ...images]);
      toast.info(`New Image ${word.toUpperCase()} Found`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    setWord("");
  };
  const handleDeleteImage = async (id) => {
    try {
      const imageToBeDeleted = images.find((image) => image.id === id);
      if (imageToBeDeleted.saved) {
        const res = await axios.delete(`${API_URL}/images/${id}`);
        if (res.data?.deleted_id) {
          toast.warn(
            `Image ${images
              .find((image) => image.id === id)
              .title.toUpperCase()} was deleted`
          );
          setImages(images.filter((image) => image.id !== id));
        }
      } else {
        setImages(images.filter((image) => image.id !== id));
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;

    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
      if (res.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image
          )
        );
        toast.info(`Image ${imageToBeSaved.title.toUpperCase()} was saved`);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="App">
      <Header title="Images Gallery" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Search
            word={word}
            setWord={setWord}
            handleSubmit={handleSearchSubmit}
          />
          <Container className="mt-4">
            {images.length ? (
              <Row xs={1} md={2} lg={3}>
                {images.map((image, i) => {
                  return (
                    <Col key={i}>
                      <ImageCard
                        image={image}
                        deleteImage={handleDeleteImage}
                        saveImage={handleSaveImage}
                      />
                    </Col>
                  );
                })}
              </Row>
            ) : (
              <Welcome />
            )}
          </Container>
        </>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;

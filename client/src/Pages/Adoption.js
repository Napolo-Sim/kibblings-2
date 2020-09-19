import React, { useEffect, useState } from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBBtn,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";
import { BannerTron } from "../components/Jumbotron";
import { Forms } from "../components/Form";
import { Footer } from "../components/Footer";
import { PetCard } from "../components/Card";
import Btn from "../components/Button";
import "../components/Footer.css";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import AdoptionImage from "../components/Images/LandingAdoption2.mp4";

const Adoption = (e) => {
  const [petType, setPetType] = useState();
  const [petSize, setPetSize] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petLocation, setPetLocation] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [pets, setPet] = useState([]);

  let token = {};
  const getPets = (e) => {
    e.preventDefault();
    Axios.get("/users/apiToken")
      .then((response) => {
        token = response.data;
      })
      .then((res) => {
        Axios.get(
          `https://api.petfinder.com/v2/animals?${petType}${petBreed}${petSize}${petAge}${petGender}${petLocation}&page=1`,
          {
            headers: {
              Authorization: token.tokenType + " " + token.accessToken,
            },
          }
        ).then((res) => {
          setPet(res.data.animals);
          console.log(res.data.animals);
        });
      });
    document.getElementById("inlineForm").reset();
  };
  useEffect(() => {}, []);

  return (
    <>
      <BannerTron Title="Adoption Center" />

      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ padding: 0, width: "100%" }}>
              <MDBCol
                className="text-white text-center py-1 my-5"
                style={{
                  backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
                }}
              >
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  Find pets here!
                </MDBCardTitle>
                <video autoPlay muted className="d-block w-100">
                  <source src={AdoptionImage} type="video/mp4"></source>
                </video>
                <MDBCol className="py-5">
                  <p className="mx-5 mb-5">
                    Find adoptable pets here on our adoption page. Just type in
                    a pet type such as cat, dog, or even horse in the search bar
                    below and find a pet thats right for you!
                  </p>

                  <Form id="inlineForm" inline>
                    <Form.Label htmlFor="inlineFormInputName2" srOnly>
                      Pet Type
                    </Form.Label>
                    <Form.Control
                      className="mb-2 mr-sm-1"
                      id="inlineFormInputName2"
                      placeholder="dog,cat..."
                      htmlSize={13}
                      onChange={(e) => setPetType("type=" + e.target.value)}
                    />
                    <Form.Label htmlFor="inlineFormInputName2" srOnly>
                      Breed
                    </Form.Label>
                    <Form.Control
                      className="mb-2 mr-sm-1"
                      id="inlineFormInputName2"
                      placeholder="pug"
                      htmlSize={13}
                      onChange={(e) => setPetBreed("&breed=" + e.target.value)}
                    />

                    <Form.Label htmlFor="inlineFormInputName2" srOnly>
                      Size
                    </Form.Label>
                    <Form.Control
                      className="mb-2 mr-sm-1"
                      id="inlineFormInputName2"
                      placeholder="small"
                      htmlSize={13}
                      onChange={(e) => setPetSize("&size=" + e.target.value)}
                    />

                    <Form.Label htmlFor="inlineFormInputName2" srOnly>
                      Age
                    </Form.Label>
                    <Form.Control
                      className="mb-2 mr-sm-1"
                      id="inlineFormInputName2"
                      placeholder="baby,adult"
                      htmlSize={13}
                      onChange={(e) => setPetAge("&age=" + e.target.value)}
                    />

                    <Form.Label htmlFor="inlineFormInputName2" srOnly>
                      Gender
                    </Form.Label>
                    <Form.Control
                      className="mb-2 mr-sm-1"
                      id="inlineFormInputName2"
                      placeholder="female"
                      htmlSize={10}
                      onChange={(e) =>
                        setPetGender("&gender=" + e.target.value)
                      }
                    />

                    <Form.Label htmlFor="inlineFormInputName2" srOnly>
                      Location
                    </Form.Label>
                    <Form.Control
                      className="mb-2 mr-sm-1"
                      id="inlineFormInputName2"
                      placeholder="San Francisco, CA"
                      htmlSize={16}
                      onChange={(e) =>
                        setPetLocation("&location=" + e.target.value)
                      }
                    />
                    <Button
                      type="submit"
                      className="mb-2"
                      size="sm"
                      onClick={getPets}
                    >
                      🔎
                    </Button>
                  </Form>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          {pets.map((item) => {
            return (
              <MDBCol sm="6">
                <PetCard
                  image={
                    item.primary_photo_cropped === null
                      ? `https://angelinacountyhumanesociety.org/files/2019/03/1553127681886_feature2.png`
                      : `${item.primary_photo_cropped.medium}`
                  }
                  petName={item.name}
                  petBreed={
                    item.breeds.secondary === null
                      ? item.breeds.primary
                      : item.breeds.primary + " " + item.breeds.secondary
                  }
                  petDescription={item.description}
                >
                  <Btn
                    variant="primary"
                    text="View"
                    // better if opens a new tab
                    onClick={() => window.location.replace(`${item.url}`)}
                  />
                </PetCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
};
export default Adoption;

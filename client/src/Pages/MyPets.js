import React, { useState, useEffect } from "react";
import { Col, Row, Container, Form, Card } from "react-bootstrap";
import Btn from "../components/Button.js";
import { Forms } from "../components/Form";
import { PetCard, NewPetCard } from "../components/Card";
import { Footer } from "../components/Footer";
import { TabsDefault } from "../components/Tabs";
import Axios from "axios";
import { ModalCenter } from "../components/Modal";
import { MDBContainer, MDBRow } from "mdbreact";
import { BannerTron } from "../components/Jumbotron";

const MyPets = () => {
  const [petCollection, setPetCollection] = useState([]);

  const [lgShow, setLgShow] = useState(false);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [breed, setBreed] = useState();
  const [color, setColor] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  const [microchip, setMicrochip] = useState();
  const [vaccines, setVaccines] = useState([]);
  const [diet, setDiet] = useState([]);
  const [rabies, setRabies] = useState();

  const vaccineLabels = [
    "Rabies",
    "Distemper",
    "Hepatitis/Adenovirus",
    "Parvovirus",
    "Parainfluenza",
    "Bordetella",
    "Leptospirosis",
    "Lyme Disease",
    " Coronavirus",
    "Giardia",
    "Canine Infuenza H3N8",
  ];

  const allergens = [
    "Beef",
    "Dairy",
    "Wheat",
    "Eggs",
    "Chicken",
    "Lamb",
    "Soy",
  ];

  const handleChange = (e) => {
    const item = e.target.value;
    const isChecked = e.target.checked;
    isChecked === true
      ? setVaccines([...vaccines, item])
      : setVaccines([vaccines]);
  };

  const handleChange2 = (e) => {
    const item = e.target.value;
    const isChecked = e.target.checked;
    isChecked === true ? setDiet([...diet, item]) : setDiet([diet]);
  };

  const renderPets = async () => {
    await Axios.get("/users/all", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      setPetCollection(res.data);
    });
  };

  useEffect(() => {
    renderPets();
  }, []);

  return (
    <div className="body">
      <BannerTron Title="Browse Your Pets" />
      <MDBContainer>
        <MDBRow>
          {petCollection.map((item, index) => {
            return (
              <>
                <NewPetCard
                  key={index}
                  // Still need to implement user put in file feature
                  image={`https://angelinacountyhumanesociety.org/files/2019/03/1553127681886_feature2.png`}
                  petName={item.name}
                  petBreed={item.breed}
                >
                  <Container>
                    <ModalCenter
                      // size={"fluid"}
                      onClick={async () => {
                        let editedPet = {
                          name,
                          age,
                          weight,
                          breed,
                          color,
                          gender,
                          birthday,
                          microchip,
                          vaccines,
                          rabies,
                          diet,
                        };
                        await Axios.patch(
                          `/users/edit/${item._id}`,
                          editedPet,
                          {
                            headers: {
                              "x-auth-token": localStorage.getItem(
                                "auth-token"
                              ),
                            },
                          }
                        );
                        renderPets();
                      }}
                    >
                      <Container>
                        <Row>
                          <Col>
                            <Form>
                              <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder={item.name}
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </Form.Group>

                              <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder={item.age}
                                  onChange={(e) => setAge(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group controlId="weight">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder={item.weight}
                                  onChange={(e) => setWeight(e.target.value)}
                                />
                              </Form.Group>

                              <Form.Group controlId="breed">
                                <Form.Label>Breed</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder={item.breed}
                                  onChange={(e) => setBreed(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group controlId="color">
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder={item.color}
                                  onChange={(e) => setColor(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder={item.gender}
                                  onChange={(e) => setGender(e.target.value)}
                                >
                                  {/* <option>Male</option>
                  <option>Female</option> */}
                                </Form.Control>
                              </Form.Group>
                              <Form.Group controlId="birthday">
                                <Form.Label>Birthday</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder={item.birthday}
                                  onChange={(e) => setBirthday(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group controlId="microchip">
                                <Form.Label>Microchip</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder={item.microchip}
                                  onChange={(e) => setMicrochip(e.target.value)}
                                />
                              </Form.Group>
                            </Form>
                          </Col>

                          <Col>
                            <Form>
                              <Form.Label>Vaccines</Form.Label>
                              {vaccineLabels.map((vacc) => {
                                return (
                                  <div className="form-check">
                                    <br />
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value={vacc}
                                      onChange={handleChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck1"
                                    >
                                      {vacc}
                                    </label>
                                    <br />
                                  </div>
                                );
                              })}
                            </Form>
                          </Col>
                          <Col>
                            <Form>
                              <Form.Label>Allergies</Form.Label>
                              {allergens.map((allerg) => {
                                return (
                                  <div className="form-check">
                                    <br />
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value={allerg}
                                      onChange={handleChange2}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck1"
                                    >
                                      {allerg}
                                    </label>
                                    <br />
                                  </div>
                                );
                              })}
                            </Form>
                          </Col>
                        </Row>
                      </Container>
                    </ModalCenter>

                    <Btn
                      variant="danger"
                      text="🗑"
                      onClick={async () => {
                        await Axios.delete(`/users/remove/${item._id}`, {
                          headers: {
                            "x-auth-token": localStorage.getItem("auth-token"),
                          },
                        });
                        // reloads the page to update list(find way to improve)
                        renderPets();
                      }}
                    />
                  </Container>

                  <TabsDefault
                    age={"Age: " + item.age}
                    birthday={"Birthday: " + item.birthday}
                    weight={"Weight: " + item.weight}
                    breed={"Breed: " + item.breed}
                    gender={"Gender: " + item.gender}
                    color={"Color: " + item.color}
                    microchip={"Microchip: " + item.microchip}
                    rabies={"Rabies: " + item.rabies}
                    vaccines={item.vaccines.map((item) => {
                      return <ul>{"💉     " + item}</ul>;
                    })}
                    diet={item.diet.map((item) => {
                      return <ul>{"💉     " + item}</ul>;
                    })}
                  />
                </NewPetCard>
              </>
            );
          })}
        </MDBRow>
      </MDBContainer>

      <Footer />
    </div>
  );
};

export default MyPets;

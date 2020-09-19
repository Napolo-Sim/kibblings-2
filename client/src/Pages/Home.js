import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ModalCenter } from "../components/Modal";
import { Footer } from "../components/Footer";
import { AccordParent, AccordChild } from "../components/Accordion";
import { MDBJumbotron, MDBCol, MDBCardTitle } from "mdbreact";
import { BannerTron } from "../components/Jumbotron";
import {
  Button,
  Modal,
  Form,
  Row,
  Card,
  Container,
  Col,
  Carousel,
} from "react-bootstrap";

const Home = () => {
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
  const [allergies, setAllergies] = useState([]);
  const [rabies, setRabies] = useState();
  const [time, setDate] = useState();
  const [note, setNote] = useState();
  const [subject, setSubject] = useState();
  const [vetVisit, setVetVisit] = useState();
  const [grooming, setGrooming] = useState();

  const [displayName, setDisplayName] = useState();
  const [petCollection, setPetCollection] = useState([]);
  const [pets, setPet] = useState();
  const [reminders, setReminders] = useState([]);

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

  const renderPets = async () => {
    await Axios.get("/users/all", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      setPetCollection(res.data);
    });
  };

  const renderReminders = async () => {
    await Axios.get("/users/viewReminder", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      setReminders(res.data.reminders);
    });
  };

  let token = {};

  const submit = async (e) => {
    e.preventDefault();
    const newPet = {
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
    };

    await Axios.post("/users/addPet", newPet, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setLgShow(false);
  };

  const addReminder = async (e) => {
    e.preventDefault();
    const newReminder = {
      subject,
      note,
      time,
    };

    await Axios.post("/users/reminder", newReminder, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setLgShow(false);
    renderReminders();
  };

  const getName = async () => {
    const userRes = await Axios.get("/users/", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setDisplayName(userRes.data.displayName);
    console.log(userRes.data.displayName);
  };

  useEffect(() => {
    getName();
    renderPets();
    renderReminders();
    Axios.get("/users/apiToken")
      .then((response) => {
        token = response.data;
      })
      .then((res) => {
        Axios.get(`https://api.petfinder.com/v2/animals?type=dog&page=2`, {
          headers: {
            Authorization: token.tokenType + " " + token.accessToken,
          },
        }).then((res) => {
          setPet(res.data.animals[0]);
          console.log(res.data.animals[0]);
        });
      });
  }, []);
  return (
    <>
      <BannerTron Title={`Welcome ${displayName}!`} />

      <Container fluid style={{ minHeight: "80vh" }}>
        {/* <Jumbotron /> */}
        <Row className="mt-3 ml-5">
          <Col>
            <Button
              className="float-sm-rightt"
              // style={{ position: "absolute", right: "15rem" }}
              onClick={() => setLgShow(true)}
            >
              Add Pet
            </Button>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Carousel
              style={{
                width: "100%",
                height: "auto",
                // position: "absolute",
                // left: "5%",
              }}
            >
              {petCollection.map((item) => {
                return (
                  <Carousel.Item>
                    <Card>
                      <Card.Body>
                        <Card.Title>Pet Dashboard</Card.Title>
                        <img
                          style={{
                            width: "100%",
                            height: "15vw",
                            objectFit: "cover",
                          }}
                          src="https://etimg.etb2bimg.com/photo/75463378.cms"
                          alt="Card image"
                        />
                        {/* <Carousel.Caption> */}
                        <Row>
                          <Col>
                            <Card.Text>Pet:{item.name}</Card.Text>
                            <Card.Text>Pet Weight: {item.weight}</Card.Text>
                            <Card.Text>Birthday: {item.birthday}</Card.Text>
                            <Card.Text>Age: {item.age}</Card.Text>
                          </Col>

                          <Col>
                            <Card.Text>
                              Last Vet Visit: {item.vetVisit}
                            </Card.Text>
                            <Card.Text>
                              Last Grooming: {item.grooming}
                            </Card.Text>
                            <Card.Text>Vaccines: {item.vaccines}</Card.Text>
                          </Col>
                        </Row>
                        {/* <h3>{item.name}</h3>
                      <p>{item.breed}</p> */}
                        {/* </Carousel.Caption> */}
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                );
              })}
            </Carousel>
            {/* {petCollection.map((item) => {
              return (
                <Card>
                  <Card.Body>
                    <Card.Title>Pet Dashboard</Card.Title>
                    <Card.Img
                      style={{
                        width: "100%",
                        height: "15vw",
                        objectFit: "cover",
                      }}
                      src="https://etimg.etb2bimg.com/photo/75463378.cms"
                      alt="Card image"
                    />
                    {/* <Card.ImgOverlay> */}
            {/* <Card.Text> */}
            {/* <Card.Title>Pet Dashboard</Card.Title> */}

            {/* <Row>

              <Col>
                <Card.Text>Pet:{item.name}</Card.Text>
                <Card.Text>Pet Weight: {item.weight}</Card.Text>
                <Card.Text>Birthday: {item.birthday}</Card.Text>
                <Card.Text>Age: {item.age}</Card.Text>
              </Col>


              <Col>
                <Card.Text>Last Vet Visit: {item.vetVisit}</Card.Text>
                <Card.Text>Last Grooming: {item.grooming}</Card.Text>
                <Card.Text>Vaccines: {item.vaccines}</Card.Text>
              </Col>

            </Row> */}
            {/* </Card.Text> */}
            {/* </Card.ImgOverlay> */}
            {/* </Card.Body>

                </Card>
        )
      })} */}
          </Col>
        </Row>

        <Row className="mt-3 ml-5">
          <Col>
            <Carousel
              className="ml-5 mt-3"
              style={{
                width: "50%",
                height: "auto",
                // position: "absolute",
                left: "5%",
              }}
            >
              {petCollection.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      style={{ borderRadius: "5%" }}
                      src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{item.name}</h3>
                      <p>{item.breed}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>

          <Col>
            <Card border="info" style={{ width: "50%" }}>
              <Card.Title className="ml-2">Reminders</Card.Title>
              <ModalCenter size={"small"} onClick={addReminder}>
                <Form>
                  <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={"09/19/2020"}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={"Monthly vet visit"}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="note">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={"Check dog vaccines"}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </ModalCenter>
              <AccordParent>
                {reminders.map((item, index) => {
                  return (
                    <AccordChild
                      eventKey={`${index}`}
                      subject={item.subject}
                      content={item.note}
                      time={item.time}
                      onClick={async () => {
                        await Axios.delete(
                          `/users/deleteReminder/${item._id}`,
                          {
                            headers: {
                              "x-auth-token": localStorage.getItem(
                                "auth-token"
                              ),
                            },
                          }
                        );
                        renderReminders();
                      }}
                    />
                  );
                })}
              </AccordParent>
            </Card>
          </Col>
        </Row>

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Fill out the form below to add your pet
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div className="ml-4 mr-4">
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="eg. Buddy"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="eg. 5"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="weight">
                  <Form.Label>Weight</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="eg. 10lbs"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="breed">
                  <Form.Label>Breed</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="eg. Dachshund"
                    onChange={(e) => setBreed(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="color">
                  <Form.Label>Color</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="eg. Black"
                    onChange={(e) => setColor(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="eg. Male"
                    onChange={(e) => setGender(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="birthday">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="eg. 9/18/2020"
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="microchip">
                  <Form.Label>Microchip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="eg. 111-00-111"
                    onChange={(e) => setMicrochip(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="rabies">
                  <Form.Label>Rabies</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="eg. 111-00-11"
                    onChange={(e) => setRabies(e.target.value)}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="btn btn-primary mb-3"
                  onClick={submit}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};
export default Home;

import React from "react";
import { Button, Form, FormControl, Container, Row } from "react-bootstrap";
import "../components/Footer.css";

export const Forms = (props) => {
  return (
    <Container>
      <Form inline>
        <FormControl
          type="text"
          placeholder={props.placeholder}
          className={props.className}
          onChange={props.onChange}
        />
        <Button className="col-md-3" type="submit" onClick={props.onClick}>
          {props.btnSubmitText}
        </Button>
      </Form>
    </Container>
  );
};

export const PetForm = () => {
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
  return (
    <Form>
      <div className="ml-4 mr-4">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="eg. Buddy" />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="eg. 5" />
        </Form.Group>
        <Form.Group controlId="weight">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" placeholder="eg. 10lbs" />
        </Form.Group>

        <Form.Group controlId="breed">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="eg. Dachshund" />
        </Form.Group>
        <Form.Group controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="eg. Black" />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select">
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="birthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="text" placeholder="eg. 9/18/2020" />
        </Form.Group>
        <Form.Group controlId="microchip">
          <Form.Label>Microchip</Form.Label>
          <Form.Control type="text" placeholder="eg. 111-00-111" />
        </Form.Group>
        <Form.Group controlId="vaccines">
          <Form.Label>Vaccines</Form.Label>

          {vaccineLabels.map((vacc) => {
            return (
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  {vacc}
                </label>
              </div>
            );
          })}
        </Form.Group>
        <Form.Group controlId="allergies">
          <Form.Label>Allergies</Form.Label>
          <Form.Control type="text" placeholder="eg. Penicillin" />
        </Form.Group>
        <Form.Group controlId="rabies">
          <Form.Label>Rabies</Form.Label>
          <Form.Control type="text" placeholder="eg. 111-00-11" />
        </Form.Group>

        <Button type="submit" className="btn btn-primary mb-3">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export const AdoptionTestFrame = () => {
  return (
    <Form>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>
      <div className="form-group row">
        <label for="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" for="gridRadios1">
                First radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" for="gridRadios2">
                Second radio
              </label>
            </div>
            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="option3"
                disabled
              />
              <label className="form-check-label" for="gridRadios3">
                Third disabled radio
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="form-group row">
        <div className="col-sm-2">Checkbox</div>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            <label className="form-check-label" for="gridCheck1">
              Example checkbox
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </div>
    </Form>
  );
};

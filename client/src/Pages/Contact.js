import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { Footer } from "../components/Footer";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7d4dnwg",
        "template_k4841h6",
        e.target,
        `user_Dq7qYS52K7lXKbw2C4Wv5`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contact Kibblings
        </h2>
        <p className="text-center w-responsive mx-auto pb-5">
          Our customer Service is here to provide Help and Support for your
          adoption search. Please contact us now!
        </p>
        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5">
            <form onSubmit={sendEmail}>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-name"
                      label="Your name"
                      name="name"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-email"
                      label="Your email"
                      name="email"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-subject"
                      label="Subject"
                      name="subject"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="contact-message"
                      label="Your message"
                      name="message"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <button>Send</button>
            </form>
            <div className="text-center text-md-left"></div>
          </MDBCol>
          <MDBCol md="3" className="text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <MDBIcon
                  icon="map-marker-alt"
                  size="2x"
                  className="blue-text"
                />
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li>
                <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
                <p>petkibblings@gmail.com</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default ContactPage;

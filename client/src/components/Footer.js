import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { useHistory } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  const about = () => history.push("/about");
  const contact = () => history.push("/contact");
  const history = useHistory();
  return (
    // <div className="footer"
    // style={{ maxHeight: "10vh" }}
    // >
    <MDBFooter color="blue" className="font-small pt-4 mt-4 content ">
      <MDBContainer fluid className="text-center ">
        <MDBRow>
          <MDBCol className="column" md="4">
            <h5 className="title">ABOUT US</h5>
            <ul>
              <li className="list-unstyled">
                <p onClick={about}>About</p>
              </li>
              <li className="list-unstyled"></li>
              <li className="list-unstyled">
                <p onClick={contact}>Contact Us</p>
              </li>
            </ul>
          </MDBCol>

          <MDBCol className="column" md="3">
            <h5 className="title">PET CARE TOPICS</h5>
            <ul>
              <li className="list-unstyled ">
                <a href="https://www.youtube.com/watch?v=Tn3lZE0rRBs&t=1s">
                  Dog Care
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=IKR6FPerXes">
                  Cat Care
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=Yzv0gXqoCkc&t=1s">
                  All Pets Care
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol className="column" md="3">
            <h5 className="title">CONTACT DEVELOPERS</h5>
            <ul>
              <li className="list-unstyled ">
                <a href="https://www.linkedin.com/in/shakila-marando-33432515/">
                  Shakila Marando
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/napoleon-vuong-08b189192/">
                  Napoleon Simmaly
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/myhkas-nallas-15980416a/">
                  Myhkas Nallas
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/alvaro-centeno/">
                  Alvaro Centeno
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href=""> Kibblings.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    // </div>
  );
};

// export default Footer;

export const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

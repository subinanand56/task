import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React , { useState }from "react";
import { Button, Card, Container, Image, Row, Col } from "react-bootstrap";
import MyImage from "./assets/1.png";
import Image1 from "./assets/2.png";
import Image2 from "./assets/3.png";
import Image3 from "./assets/4.png";

import { IoMdClose } from "react-icons/io";
function CloseButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="close-button-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <IoMdClose  className={`close-icon ${hovered ? 'rotate-circle' : ''}`} />
    </div>
  );
}

function App() {
  const handleCloseClick = () => {
    
  };
  return (
    <div className="App">
      <Container>
        <div className="container">
        <CloseButton onClick={handleCloseClick} />
          <h4 style={{ color: "white", fontWeight: "10" }}>
            Epic Games: An American Video Game And Software Developer
            <br /> And Publisher Based In Cary, North Carolina.
          </h4>
          <Image src={MyImage} fluid />

          <div className="para">
            <p
              style={{
                color: "white",
                fontWeight: "10",
                marginTop: "40px",
                marginBottom: "30px",
              }}
            >
              Create, play, and battle with friends for free in Fortnite. Be the
              last player standing in Battle Royale and Zero Build, experience a
              concert or live event, or discover over a million creator made
              games, including racing, parkour, zombie survival, and more. Each
              Fortnite island has an individual age rating so you can find the
              one that's right for you and your friends. Find it all in
              Fortnite.. Drop In.
            </p>
          </div>
          <div>
            <Button variant="light">View Website</Button>
          </div>

          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ marginTop: "80px", marginBottom: "70px" }}
          >
            <Row xs={1} md={3} className="g-4">
              <Col>
                <Card style={{ backgroundColor: "black" }}>
                  <Card.Img variant="top" src={Image1} />
                  <Card.Body>
                    <Card.Text style={{ color: "white" }}>
                      Some quick example text for Card 1
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: "black" }}>
                  <Card.Img variant="top" src={Image2} />
                  <Card.Body>
                    <Card.Text style={{ color: "white" }}>
                      Some quick example text for Card 2
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ backgroundColor: "black" }}>
                  <Card.Img variant="top" src={Image3} />
                  <Card.Body>
                    <Card.Text style={{ color: "white" }}>
                      Some quick example text for Card 3
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <div>
            <h4 style={{ color: "white", fontWeight: "10" }}>
              Our Contribution
            </h4>
            <p
              style={{
                color: "white",
                fontWeight: "10",
                marginTop: "40px",
                marginBottom: "30px",
              }}
            >
              Our core offering extends beyond mere profit generation; we
              emphasize the growth and active involvement of our user <br />
              community. Collaborating with us represents an investment, rather
              than a mere expenditure. Our dedication to providing <br />
              distinctive digital interactions guarantees unparalleled benefits
              for our clientele.
            </p>

            <div className="d-flex justify-content-center">
              <Container
                className="d-flex justify-content-center align-items-center"
                style={{ marginTop: "80px", marginBottom: "70px" }}
              >
                <Row xs={1} md={3} className="g-4">
                  <Col>
                    <Card style={{ backgroundColor: "black" }}>
                      <Card.Body>
                        <Card.Title
                          style={{
                            color: "white",
                            fontWeight: "400",
                            fontSize: "50px",
                          }}
                        >
                          5 M
                        </Card.Title>
                        <Card.Text style={{ color: "white" }}>
                          Daily User <br /> Engagements
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ backgroundColor: "black" }}>
                      <Card.Body>
                        <Card.Title
                          style={{
                            color: "white",
                            fontWeight: "400",
                            fontSize: "50px",
                          }}
                        >
                          $500K
                        </Card.Title>
                        <Card.Text style={{ color: "white" }}>
                          Revenue Surge for an <br /> Platform
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ backgroundColor: "black" }}>
                      <Card.Body>
                        <Card.Title
                          style={{
                            color: "white",
                            fontWeight: "400",
                            fontSize: "50px",
                          }}
                        >
                          10X
                        </Card.Title>
                        <Card.Text style={{ color: "white", fontSize: "15px" }}>
                          ROAS on all our marketing <br /> campaigns
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="footer">
              <h4 style={{ color: "white", fontWeight: "10" }}>
                Interested In Delving Deeper Into The Project?
              </h4>
              <p
                style={{
                  color: "white",
                  fontWeight: "10",
                  marginTop: "40px",
                  marginBottom: "30px",
                }}
              >
                If you'd like to explore further details about our initiatives
                or any of our <br /> affiliated brands, don't hesitate to
                connect. You can reach out to us via <br /> email at{" "}
                <span className="highlight">hello@abc.com</span> or give us a
                call at <span className="highlight">+91 480 20802730</span>.
              </p>
              <div>
                <Button variant="dark" style={{ marginRight: "40px" }}>
                  Ring Us on Skype
                </Button>
                <Button variant="light">Contact Us</Button>
              </div>
              <div className="copyright p-3" style={{
                    
                  }}>
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "100px",
                  }}
                >
                  &copy; Your Company Name. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;

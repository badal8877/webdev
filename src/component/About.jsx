// This react library that is important
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// image import from local
import image1 from "../assets/image/image1.jpg";
import image2 from "../assets/image/image1.jpg";
import image3 from "../assets/image/image1.jpg";
import image4 from "../assets/image/image1.jpg";

// this is working
import { Row, Col } from "react-bootstrap";
  

function About() {
     
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "50%" }}>
        <h5>About BSPTCL</h5>
        <p>
          Bihar State Power Transmission Company Limited, a subsidiary company
          of Bihar State Power (Holding) Company Limited, is a wholly owned
          corporate entity incorporated under the Companies Act 1956 on 1st Nov,
          2012 after restructuring of erstwhile Bihar State Electricity Board.
          Presently the company is carrying on intra-state transmission and
          wheeling of electricity under license issued by the Bihar Electricity
          Regulatory Commission. The company is also discharging the functions
          of State Load Dispatch Center (SLDC). BSPTCL operates a transmission
          network of 12182 km of 132 kV lines and 5103 km of 220 kV lines as
          well as 152 no. of EHV sub-stations with 25640 MVA transformation
          capacity. The company is operating through its 5 transmission zones
          i.e. Patna, Muzaffarpur, Bhagalpur, Gaya & Koshi, 15 transmission
          circles and 31 transmission divisions In order to increase the
          evacuation capacity, BSPTCL is implementing large number of
          sub-station and transmission line projects. BSPTCL is also working
          towards installation of Gas Insulated Sub-Station, Sub-Station
          Automation System and High Capacity Conductors in transmission lines.
          BSPTCL has also undertaken various projects of augmentation,
          renovation and modernization of existing Grids and Transmission Lines.
          To ensure stable and uninterrupted power supply to the people of
          state, company has taken up projects for connecting its GSS to
          multiple sources of power and making them N-1 compliant. All the GSSs
          and Transmission Lines are on GIS map. The State Load Dispatch Center
          has the latest technology of real time data control and communication.
          Besides continual technical up-gradation, the company lays emphasis on
          imbibing required skills in its people and therefore it has invested
          in creating training infrastructure. It has recently established a
          “Power Training Center” at Gaurichak, Patna, where employees and
          students are trained on various power system protection and equipment
          testing techniques. 'BSPTCL: The Life Line of Bihar' is committed to
          the goal of Quality Power to all.
        </p>
        button for 
        <div className="text-center">
          <Button variant="primary">Read More</Button>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <Row>
          <Col xs={6} md={6}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={6}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={6}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={image4} />
              <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;

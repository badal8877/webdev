import Card from "react-bootstrap/Card";
import { useState } from "react";
import  "./AboutNew.css"
import { CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";
import image from "../assets/image/image2.jpg";
import image2 from "../assets/image/image1.jpg"
import Button from "react-bootstrap/Button";

function AboutNew() {
  const [showText, setShowText] = useState([false, false, false, false]);

  const handleClick = (index) => {
    const newShowText = [...showText];
    newShowText[index] = !newShowText[index];
    setShowText(newShowText);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "50%", padding: "20px" }}>
        <h1>About Section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <div className="text-center">
          <Button variant="primary">Read More</Button>
        </div>
      </div>
      <div style={{ width: "50%", padding: "20px" }}>
        <div className="row p-1" style={{ margin: "0 10px" }}>
          <div className="col-md-3" style={{ margin: "0 10px" }}>
            <Card style={{ width: "13rem" }}>
              <CardImg
                variant="top"
                src={image2}
                onClick={() => handleClick(0)}
              />
              <CardBody className="p-0">
                {showText[0] && (
                  <>
                    <CardTitle>About</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </>
                )}
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3" style={{ margin: "0 50px" }}>
            <Card style={{ width: "13rem" }}>
              <CardImg
                variant="top"
                src={image}
                onClick={() => handleClick(1)}
              />
              <CardBody className="p-0">
                {showText[1] && (
                  <>
                    <CardTitle>About</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </>
                )}
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="row p-1" style={{ margin: "0 10px" }}>
  <div className="col-md-3" style={{ margin: "0 10px" }}>
    <Card style={{ width: "13rem" }}>
      <CardImg variant="top" src={image} onClick={() => handleClick(0)} />
      <CardBody className="p-0">
        {showText[0] && (
          <>
            <CardTitle>About</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </>
        )}
      </CardBody>
    </Card>
  </div>
  <div className="col-md-3" style={{ margin: "0 50px" }}>
    <Card style={{ width: "13rem" }}>
      <CardImg variant="top" src={image} onClick={() => handleClick(1)} />
      <CardBody className="p-0">
        {showText[1] && (
          <>
            <CardTitle>About</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </>
        )}
      </CardBody>
    </Card>
  </div>
</div>
      </div>
    </div>
  );
}

export default AboutNew;

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo/logo.png";
import "./TopNav.css";

function TopNav() {
  return (
    <div className="top-nav-container ">
      <div className="logo-container">
        <Navbar expand="lg" className="top-nav">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-text">
            बिहार राज्य पावर ट्रांसमिशन कंपनी लिमिटेड
            <br />
            <span className="english-text">
              Bihar State Power Transmission Company Limited
            </span>
            <br />
            <span className="brand-text1">
              (A Government of Bihar Undertaking)
            </span>
          </span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
      </div>
      <div className="nav-container">
        <div className="upper-right">
          <Navbar>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="lower-right">
          <Navbar>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default TopNav;

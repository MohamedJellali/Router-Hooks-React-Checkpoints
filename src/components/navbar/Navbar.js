import React from "react";
import ReactStars from "react-rating-stars-component";
import {
  Button,
  NavDropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbarapp({ setSearchmovie, setSearchrate }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">MEDFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div>
            <h6>Search Movie by Name </h6>
          </div>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Movie by name"
              className="mr-sm-2"
              onChange={(e) => setSearchmovie(e.target.value)}
            />
          </Form>
          <div>
            <h6>Search Movie by rating </h6>
          </div>
          <ReactStars
            count={5}
            onChange={(e) => setSearchrate(e)}
            size={24}
            starColor="#ffd700"
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarapp;

import React, { useState } from "react";
import { Container, Row, Navbar, Nav, Form } from "react-bootstrap";

const MainNavbar = ({ searchFood }) => {
  const [searchVlue, setSearchValue] = useState("");

  const foodSearch = (e) => {
    e.preventDefault();
    searchFood(searchVlue);
    setSearchValue("");
  };
  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color"> مطعم MLAHFF </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث ..."
                className="mx-2"
                onChange={(e) => {
                  return setSearchValue(e.target.value);
                }}
                value={searchVlue}
              />
              <button onClick={(e) => foodSearch(e)} className="btn-search">
                {" "}
                بحث{" "}
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default MainNavbar;

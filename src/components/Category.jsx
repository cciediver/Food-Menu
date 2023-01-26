import React from "react";
import { Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";

const Category = ({ filter, newarray }) => {
  const searchFoodCat = (cat) => {
    filter(cat);
  };
  console.log(newarray);
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <Zoom>
          {newarray.length >= 1 ? (
            newarray.map((cat, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => searchFoodCat(cat)}
                    className="btn mx-2"
                    style={{ border: "1px solid #b45b35" }}
                  >
                    {cat}
                  </button>
                </div>
              );
            })
          ) : (
            <h2> لا توجد اصناف اليوم </h2>
          )}
        </Zoom>
      </Col>
    </Row>
  );
};

export default Category;

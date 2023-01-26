import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal/Fade";

const FoodList = ({ foods }) => {
  return (
    <Row>
      {foods.length >= 1 ? (
        foods.map((item, index) => {
          return (
            <Col sm="12" className="mb-3" key={index}>
              <Card
                className="d-flex flex-row"
                style={{ backgroundColor: "#F8F8F8" }}
              >
                <Card.Img
                  className="img-item"
                  variant="top"
                  src={item.imgUrl}
                  alt="breakfast"
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between ">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-description">{item.desc}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h2 className="text-center"> لايوجد أصناف </h2>
      )}
    </Row>
  );
};

export default FoodList;

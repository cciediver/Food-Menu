import { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./components/Category";
import Header from "./components/Header";
import MainNavbar from "./components/Navbar";
import FoodList from "./components/FoodList";
import { items } from "./data";

function App() {
  const [foods, setFoods] = useState(items);

  /*
Filter by unique category 
*/

  const newarray = [
    "الكل",
    ...new Set(
      items.map((cat) => {
        return cat.category;
      })
    ),
  ];
  /* Filter Food by Category*/
  const filterFoodCategory = (cat) => {
    if (cat === "الكل") {
      setFoods(items);
    } else {
      const filteredFoodList = items.filter((el) => el.category === cat);
      setFoods(filteredFoodList);
    }
  };

  /* Search Food by SearchForm*/
  const searchFood = (word) => {
    if (word !== "") {
      const filteredFoodList = items.filter((el) => el.title === word);
      setFoods(filteredFoodList);
    }
  };

  return (
    <Fragment>
      <MainNavbar searchFood={searchFood} />
      <Container>
        <Header />
        <Category filter={filterFoodCategory} newarray={newarray} />
        <FoodList foods={foods} />
      </Container>
    </Fragment>
  );
}

export default App;

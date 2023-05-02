import { useState } from "react";
import Buttons from "./Components/Buttons";
import Products from "./Components/Products";
import productsData from "./ProductsData";
import SearchFilter from "./Components/SearchFilter";

const categories = ["All", "Bottomwaer", "Topwaer", "Jackets", "Watches"];

function App() {
  const [category, setCategory] = useState("All");
  const [text, setText] = useState("");

  let productsOfCategory =
    category === "All"
      ? productsData
      : productsData.filter((product) => product.category === category);

  let filterdProducts = text
    ? productsOfCategory.filter((product) =>
        product.description.toLowerCase().includes(text)
      )
    : productsOfCategory;

  const handleChangeCategory = (category: string) => {
    console.log(category);
    setCategory(category);
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-primary mb-3 text-center">
          PRODUCT FILTER AND SEARCH
        </h1>
      </div>

      <div className="mb-3  d-flex justify-content-center">
        <SearchFilter doSomthing={(text) => setText(text)}></SearchFilter>
      </div>
      <div className="mb-4 d-flex justify-content-center">
        <Buttons
          onClick={handleChangeCategory}
          categories={categories}
        ></Buttons>
      </div>

      <Products products={filterdProducts}></Products>
    </div>
  );
}

export default App;

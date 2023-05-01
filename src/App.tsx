import Products from "./Components/Products";

function App() {
  const products = [
    {
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3861.jpg?auto=webp&quality=75&width=980&dpr=2",
      description: "Jeans",
      price: "23",
    },
    {
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3861.jpg?auto=webp&quality=75&width=980&dpr=2",
      description: "Jeans 2",
      price: "30",
    },
    {
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3899-nocap.jpg?auto=webp&quality=75&width=980&dpr=2",
      description: "Jeans 3",
      price: "40",
    },
    {
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3861.jpg?auto=webp&quality=75&width=980&dpr=2",
      description: "Jeans",
      price: "23",
    },
    {
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3861.jpg?auto=webp&quality=75&width=980&dpr=2",
      description: "Jeans 2",
      price: "30",
    },
    {
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3899-nocap.jpg?auto=webp&quality=75&width=980&dpr=2",
      description: "Jeans 3",
      price: "40",
    },
    {
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3861.jpg?auto=webp&quality=75&width=980&dpr=2",
      description: "Jeans 2",
      price: "30",
    },
    {
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3899-nocap.jpg?auto=webp&quality=75&width=980&dpr=2",
      description: "Jeans 3",
      price: "40",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-primary mb-3 text-center">
        PRODUCT FILTER AND SEARCH
      </h1>
      <Products products={products}></Products>
    </div>
  );
}

export default App;

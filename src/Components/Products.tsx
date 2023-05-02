import Card from "./Card";
import "./Card.css";

interface ProductCard {
  img: string;
  description: string;
  price: string;
}

interface Props {
  products: ProductCard[];
}

const Products = ({ products }: Props) => {
  return (
    <div className="row row-cols-4 ">
      {products.map((product) => {
        return (
          <div className="col mb-2">
            <Card product={product}></Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

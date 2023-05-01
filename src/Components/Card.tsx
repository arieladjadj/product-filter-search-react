interface ProductCard {
  img: string;
  description: string;
  price: string;
}

interface Props {
  product: ProductCard;
}

const Card = ({ product }: Props) => {
  return (
    <div className="bg-white card p-0">
      <img className="card-img-top" src={product.img} alt="" />
      <div className="card-body">
        <h5 className="card-title">{product.description}</h5>
        <p className="card-text">{"$" + product.price}</p>
      </div>
      {/* Description */}
      {/* Price */}
    </div>
  );
};

export default Card;

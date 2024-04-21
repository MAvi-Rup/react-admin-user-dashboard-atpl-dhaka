import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`${product.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover rounded-t-lg sm:h-96"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-gray-800 font-bold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

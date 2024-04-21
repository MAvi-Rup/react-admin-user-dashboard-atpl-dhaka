import { useParams } from "react-router-dom";
import products from "../../data/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-gray-800 font-bold text-xl">${product.price}</p>
    </div>
  );
};

export default ProductDetails;

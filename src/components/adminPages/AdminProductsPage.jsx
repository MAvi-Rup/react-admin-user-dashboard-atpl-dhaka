import products from "../../data/products.json";
import ProductCard from "../userPages/ProductCard";

const AdminProductsPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Products</h2>
        <div className="flex space-x-2">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Add Product
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Delete Product
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Update Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AdminProductsPage;

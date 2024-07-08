import { useRouter } from 'next/router';
import { Product } from '@/constant/types'; // Define your Product type in a separate file
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '@/redux/cartSlice';

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === parseInt(id as string));
  const dispatch = useDispatch();

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="container mx-auto p-4">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md" />
      <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
      <p className="mt-1 text-gray-500">${product.price}</p>
      <div className="mt-4 flex items-center">
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Add to Cart
        </button>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

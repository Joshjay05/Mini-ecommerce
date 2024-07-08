import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { addToWishlist } from '@/redux/wishlistSlice';
import { IoHeart, IoCart } from 'react-icons/io5';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  showWishlistButton?: boolean;
  showAddToCartButton?: boolean;
  showViewDetailsLink?: boolean;
  customActions?: React.ReactNode;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showWishlistButton = true,
  showAddToCartButton = true,
  showViewDetailsLink = true,
  customActions,
  onAddToCart,
  onAddToWishlist,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleAddToWishlist = () => {
    if (onAddToWishlist) {
      onAddToWishlist(product);
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
      <p className="mt-1 text-gray-500">${product.price}</p>
      <div className="mt-4 flex items-center justify-between">
        {showWishlistButton && (
          <button onClick={handleAddToWishlist} className="text-red-500 hover:text-red-700">
            <IoHeart size={24} />
          </button>
        )}
        {showViewDetailsLink && (
          <Link href={`/product/${product.id}`}>
            <a className="text-blue-500 hover:text-blue-700">View Details</a>
          </Link>
        )}
        {showAddToCartButton && (
          <button onClick={handleAddToCart} className="text-green-500 hover:text-green-700">
            <IoCart size={24} />
          </button>
        )}
        {customActions && <div>{customActions}</div>}
      </div>
    </div>
  );
};

export default ProductCard;

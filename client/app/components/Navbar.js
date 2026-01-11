import Link from 'next/link';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 mb-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-900">
          ANIX<span className="text-blue-500">.LK</span>
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/cart" className="relative text-gray-600 hover:text-blue-500 text-xl">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              0
            </span>
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-blue-500 text-xl">
            <FaUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { IconBrandSafari, IconHome, IconShoppingCart } from '@tabler/icons-react';
import useCartStore from '@/store/cart';

function SideTabs() {
  const cart = useCartStore((state) => state.cart);

  const tabItems = [
    { label: 'Home', icon: <IconHome stroke={2} />, link: '/' },
    {
      label: 'Explore',
      icon: <IconBrandSafari stroke={2} />,
      link: '/explore',
    },
    { label: 'Saved', icon: <IconHome stroke={2} />, link: '/saved' },
    {
      label: 'Cart',
      icon: <IconShoppingCart stroke={2} />,
      link: '/cart',
      badge: (
        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {cart.length}
        </span>
      ),
    },
    { label: 'Selling', icon: <IconHome stroke={2} />, link: '/selling' },
    { label: 'Profile', icon: <IconHome stroke={2} />, link: '/profile' },
    {
      label: 'Purchase History',
      icon: <IconHome stroke={2} />,
      link: '/purchase-history',
    },
    { label: 'Contact Us', icon: <IconHome stroke={2} />, link: '/contact' },
    { label: 'Settings', icon: <IconHome stroke={2} />, link: '/settings' },
  ];

  return (
    <nav className="pt-2">
      <ul>
        {tabItems.map((item, index) => (
          <li key={index} className="relative flex items-center">
            <a
              href={item.link}
              className="relative flex justify-between flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6 sm:my-2 transition-all duration-300"
              style={{ width: 'calc(100% - 1rem)' }}
            >
              <div className="flex">
                <span className="inline-flex justify-center items-center ml-5 text-lg sm:text-xl">
                  {item.icon}
                </span>
                <span className="ml-6 text-sm sm:text-md lg:text-lg tracking-wide truncate font-semibold">
                  {item.label}
                </span>
              </div>
              <div>{item.badge}</div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideTabs;

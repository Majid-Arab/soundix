import MobileFooter from '@/components/Header/MobileFooter';
import { Category } from '@/components/Home/Category';
import { Product } from '@/components/Home/Product';

function Home() {
  return (
    <div>
      <Product />
      {/* <ProductCarousel /> */}
      {/* <ProductList /> */}
      <Category />
      <MobileFooter />
    </div>
  );
}

export default Home;

import { Category } from '@/components/Home/Category';
import { Product } from '@/components/Home/Product';

function Home() {
  return (
    <div>
      <Product />
      {/* <ProductCarousel /> */}
      {/* <ProductList /> */}
      <Category />
    </div>
  );
}

export default Home;

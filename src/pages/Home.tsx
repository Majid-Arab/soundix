import { ProductList } from '@/components/Home/ProductList';
import { Category } from '@/components/Home/Category';
import { Product } from '@/components/Home/Product';
import { CardsCarousel } from '@/components/Home/ProductCarousel';

function Home() {
  return (
    <div>
      <Product />
      {/* <CardsCarousel /> */}
      {/* <ProductList /> */}
      <Category />
    </div>
  );
}

export default Home;

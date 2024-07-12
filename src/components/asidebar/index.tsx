import FeaturedCard from './featuredCard';
import ProductTable from './productTable';
import TableHead from './tableHead';

function AsideBar() {
  return (
    <div className="flex flex-col">
      <FeaturedCard />
      <TableHead />
      <ProductTable />
    </div>
  );
}

export default AsideBar;

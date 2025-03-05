import ProductsTable from './ProductsTable';

export default function DashboardProductsTemplate() {
  return (
    <div className=''>
      <div>
        <h2 className='text-xl font-semibold'>نمایش محصولات</h2>
      </div>
      <ProductsTable />
    </div>
  );
}

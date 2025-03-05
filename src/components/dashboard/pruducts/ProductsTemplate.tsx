import ProductsTable from './ProductsTable';

export default function DashboardProductsTemplate() {
  return (
    <div className='m-0 mt-2 rounded-lg border p-0 md:m-4 md:p-4'>
      <div className='p-2 md:p-4'>
        <h2 className='text-xl font-semibold'>نمایش محصولات</h2>
      </div>
      <ProductsTable />
    </div>
  );
}

import { AiOutlineDelete } from 'react-icons/ai';
import ProductsDeleteButton from './ProductsDeleteButton';
import { getAllProducts } from '@/actions/product-action';
import { ToastContainer } from 'react-toastify';

export default async function ProductsTable() {
  const { products, error } = await getAllProducts();
  if (error) return <p className='text-red-600'>محصولی یافت نشد!</p>;
  return (
    <div className='p-4'>
      <ToastContainer />
      <table className='w-full table-auto'>
        <thead>
          <tr>
            <th className='border-b border-gray-200 p-4 text-right'>ردیف</th>
            <th className='border-b border-gray-200 p-4 text-right'>عنوان</th>
            <th className='border-b border-gray-200 p-4 text-right'>قیمت</th>
            <th className='border-b border-gray-200 p-4 text-right'> عملیات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td className='border-b border-gray-200 p-4 text-gray-500'>
                  {index}
                </td>
                <td
                  className='border-b border-gray-200 p-4 text-gray-500'
                  title={product.name}
                >
                  {product.name.slice(0, 30)}
                  {' ...'}
                </td>
                <td className='border-b border-gray-200 p-4 text-gray-500'>
                  {product.price}
                </td>
                <td className='border-b border-gray-200 p-4 text-gray-500'>
                  <ProductsDeleteButton dataId={product.id}>
                    <AiOutlineDelete size={20} color='red' />
                  </ProductsDeleteButton>
                  <a className='cursor-pointer'></a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

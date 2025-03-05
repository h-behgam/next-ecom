import ClientButton from '@/components/front/client-button';
import { AiOutlineDelete } from 'react-icons/ai';

export default function ProductsTable() {
    const deleteHandler = async (id:number):Promise<void> => {
        
    }
  return (
    <div className='p-4'>
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
          <tr>
            <td className='border-b border-gray-200 p-4 text-gray-500'>
              Witchy Woman
            </td>
            <td className='border-b border-gray-200 p-4 text-gray-500'>
              The Eagles
            </td>
            <td className='border-b border-gray-200 p-4 text-gray-500'>1972</td>
            <td className='border-b border-gray-200 p-4 text-gray-500'>
                <ClientButton disabled={false} onClick={() => { deleteHandler(1111) }}><AiOutlineDelete size={20}color='red' /></ClientButton>
              <a className='cursor-pointer'></a>
            </td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

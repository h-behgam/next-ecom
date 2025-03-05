import { createProduct } from '@/actions/product-action';
import CustomInput from '@/components/front/custom-input'
import SubmitFormButton from '@/components/front/submit-form-button'

export default function AddForm() {
  const formHandler = async (formData:FormData) => { 
    'use server'
    const {error} = await createProduct(formData)
    if (!error) return       
   }
  return (
    <div className="">
      <form action={formHandler}>
      <div className="mb-6">
        <CustomInput name={'name'} type='string' labelTitle='نام محصول' labalName='name'/>
      </div>
      <div className="mb-6">
        <CustomInput name={'enName'} type='string' labelTitle='نام انگلیسی محصول' labalName='enName'/>
      </div>
      <div className="mb-6">
        <CustomInput name={'description'} type='string' labelTitle='توضیحات' labalName='description'/>
      </div>
      <div className="mb-6">
        <CustomInput name={'image'} type='string' labelTitle='آدرس عکس آدرس نمونه: "/assets/images/product2.webp"' labalName='image'/>
      </div>
      <div className="mb-6">
        <CustomInput name={'price'} type='string' labelTitle='قیمت' labalName='price'/>
      </div>
      <div className="mb-6">
        <CustomInput name={'stock'} type='string' labelTitle='موجودی' labalName='stock'/>
      </div>
      <div className="mb-6">
        <CustomInput name={'rate'} type='string' labelTitle='امتیاز' labalName='rate'/>
      </div>
      <div className="mb-6">
        <CustomInput name={'features'} type='string' labelTitle='ویژگی ها' labalName='features'/>
      </div>
      <div className="mt-10">
        <SubmitFormButton classname={'rounded-md bg-slate-500 w-full'}>ثبت</SubmitFormButton>
      </div>
    </form>
    </div>
  )
}

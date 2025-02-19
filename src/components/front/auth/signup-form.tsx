import Link from "next/link";
import CustomInput from "../custom-input";
import ClientButton from "../client-button";

export default function SignupTemplate() {
    const formHandler = async (formData: FormData) => {}

  return (
    <div className='mx-auto w-full max-w-md'>
    <div className='mb-6 text-center'>
      <h2 className='text-3xl font-bold'>Create an account</h2>
      <p>Enter your information to get started</p>
    </div>
    <form className='' action={formHandler}>
      <div className='mb-2 p-1'>
        <CustomInput
          name='name'
          type='text'
          placeholder='Name'
          labalName='name'
          labelTitle='Name'
          autoComplete='autoComplete'
        />
      </div>
      <div className='mb-2 p-1'>
        <CustomInput
          name='username'
          type='text'
          placeholder='Username'
          labalName='username'
          labelTitle='Username'
          autoComplete='autoComplete'
        />
      </div>
      <div className='mb-2 p-1'>
        <CustomInput
          name='email'
          type='text'
          placeholder='Email'
          labalName='email'
          labelTitle='Email'
          autoComplete='autoComplete'
        />
      </div>
      <div className='mb-2 p-1'>
        <CustomInput
          name='password'
          type='text'
          placeholder='Password'
          labalName='password'
          labelTitle='Password'
        />
      </div>
      <div className='mb-2 p-1'>
        <CustomInput
          name='confirmPassword'
          type='text'
          placeholder='Confirm Password'
          labalName='confirmPassword'
          labelTitle='Confirm Password'
        />

      </div>
      <div>
        <ClientButton disabled={false}>Sign up</ClientButton>
      </div>
    </form>
    <p className='mt-4 text-center'>
      Already have an account? <Link href={'/signin'}>Login</Link>{' '}
    </p>
  </div>
  )
}

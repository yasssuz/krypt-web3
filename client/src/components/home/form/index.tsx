import { useState } from "react";

import Input from "../../common/input";
import Loader from "../../common/loader";

const Form = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (): void => {};

  return (
    <form
      className='p-5 sm:w-96  w-full flex flex-col justify-start items-center blue-glassmorphism'
      onSubmit={handleSubmit}
    >
      <Input
        placeholder='Address To'
        name='addressTo'
        id='addressTo'
        type='text'
        step='0.0001'
        onChange={() => console.log("hello")}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
      />
      <Input
        placeholder='Amount (ETH)'
        name='amount'
        id='amount'
        type='number'
        onChange={() => console.log("hello")}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
      />
      <Input
        placeholder='Keyword (Gif)'
        name='keyword'
        id='keyword'
        type='text'
        onChange={() => console.log("hello")}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
      />
      <Input
        placeholder='Enter Message'
        name='message'
        id='message'
        type='text'
        onChange={() => console.log("hello")}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
      />

      <div className='h-[1px] w-full bg-gray-400 my-2' />
      {isLoading ? (
        <Loader />
      ) : (
        <button
          type='submit'
          className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'
        >
          {" "}
          Send Now
        </button>
      )}
    </form>
  );
};

export default Form;

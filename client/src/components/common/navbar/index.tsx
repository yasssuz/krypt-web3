import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = (): void => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className='z-[2] relative w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img
          src='/assets/logo.png'
          alt='krypt web3'
          className='w-32 cursor-pointer'
        />
      </div>
      <nav className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Market", "Exchange", "Tutorials", "Wallets"].map(
          (title: string, index: number) => (
            <a key={index} href='#' className='mx-4 cursor-pointer'>
              {title}
            </a>
          )
        )}
        <a
          href='#'
          className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'
        >
          Login
        </a>
      </nav>
      <button className='flex relative' onClick={handleIsOpen}>
        {isOpen ? (
          <AiOutlineClose
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
          />
        )}
      </button>
      {isOpen && (
        <>
          <nav className='fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <button className='flex relative right-auto' onClick={handleIsOpen}>
              <AiOutlineClose
                fontSize={28}
                className='text-white md:hidden cursor-pointer'
              />
            </button>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (title: string, index: number) => (
                <a
                  key={index}
                  href='#'
                  className='mx-4 cursor-pointer my-2 text-lg block'
                >
                  {title}
                </a>
              )
            )}
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;

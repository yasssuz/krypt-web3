import { useState } from "react";

import Form from "../form";

import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const Hero = (): JSX.Element => {
  const handleConnectWallet = (): void => {};

  return (
    <section className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between mf:p-20 py-12 px4'>
        <div className='flex flex-1 justify-start flex-col mf:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Send Crypto
            <br /> across the world
          </h1>
          <p className='text-left mt-5 text-white font-light mf:w-9/12 w-11/12 text-base'>
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypt
          </p>
          <button
            type='button'
            onClick={handleConnectWallet}
            className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bt] text-white text-base font-semibold'
          >
            Connect Wallet
          </button>
          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <span className='rounded-tl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
              Reliability
            </span>
            <span className='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
              Secure
            </span>
            <span className='rounded-tr-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
              Ethereum
            </span>
            <span className='rounded-bl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
              Web 3.0
            </span>
            <span className='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
              Low fees
            </span>
            <span className='rounded-br-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
              Blockchain
            </span>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                  <SiEthereum fontSize={21} color='#fff' />
                </div>
                <BsInfoCircle fontSize={17} color='#fff' />
              </div>
              <div>
                <p className='text-white font-light text-sm'>0x71C...d8976F</p>
                <p className='text-white font-semibold text-lg mt-1'>
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Hero;

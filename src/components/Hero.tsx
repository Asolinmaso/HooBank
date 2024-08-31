import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-[86rem] mx-auto md:mx-0 md:ml-auto px-6 md:px-0  flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0">
          <div className="bg-black bg-opacity-50 px-4 py-2 rounded-full w-max mb-4">
            <p className="text-xs sm:text-sm text-teal-400 font-semibold">20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
          </div>
          <div className="relative mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Next
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400">
              Generation
            </h1>
            <div className="absolute top-0 right-0 transform translate-x-0 md:translate-x-2 -translate-y-2 md:translate-y-4">
              <button className="bg-transparent border-2 h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] border-teal-400 text-teal-400 rounded-full font-semibold flex flex-col items-center justify-center">
                <div className='flex gap-2'>
                  <div className="text-xs sm:text-sm md:text-base">Get</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10H7a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm md:text-base">Started</div>
              </button>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Payment Method.
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-8">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
          </p>
        </div>
        <div className="flex w-full md:w-1/2 justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/hero_img.png" // Update with the correct path
            alt="Hero Image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export const CardDealSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        <div className="flex flex-col justify-center py-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Find a better card deal <br /> in few easy steps.
          </h2>
          <p className="text-base sm:text-lg md:text-base lg:text-lg text-gray-400 mb-6 md:mb-8">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
          </p>
          <div className="w-full">
            <button className="bg-teal-400 text-gray-900 px-6 py-3 rounded-md font-semibold w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/cardDeal.svg"
            alt="Online Analysis"
            width={400} 
            height={400} 
            className="object-contain md:max-w-full lg:max-w-[500px]" 
          />
        </div>
      </div>
    </section>
  );
}

// components/CardDealSection.js
import Image from 'next/image';

export const CardDealSection = ()=> {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="flex flex-col py-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Find a better card deal <br /> in few easy steps.
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-8">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
          </p>
          <div className='w-full'>
          <button className="bg-teal-400 text-gray-900 px-6 py-3 rounded-md font-semibold w-full sm:w-auto">
            Get Started
          </button>
          </div>
        </div>

        <div className="">
          
          <Image
              src="/cardDeal.svg" // Replace with correct image path
              alt="Online Analysis"
              width={500}
              height={500}
            />
        </div>
      </div>
    </section>
  );
}

// components/FeatureSection.js
import Image from 'next/image';

export const FeatureSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            You do the business, <br /> we’ll handle the money.
          </h2>
          <p className="text-base sm:text-lg mb-8">
            With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money. But with hundreds of credit cards on the market...
          </p>
          <div className="w-full sm:w-[75%] md:w-[50%]">
            <button className="bg-teal-400 text-gray-900 px-4 py-3 rounded-md font-semibold w-full">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-6 md:w-full">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full">
              <Image
                src="/Star.svg" // Update with the correct path
                alt="Star Icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Rewards</h4>
              <p className="text-gray-300">
                The best credit cards offer some tantalizing combinations of promotions and prizes.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3 rounded-md" style={{ background: 'linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #42475B 95.11%' }}>
            <div className="p-3 rounded-xl">
              <Image
                src="/Shield.svg" // Update with the correct path
                alt="Shield Icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold">100% Secured</h4>
              <p className="text-gray-300">
                We take proactive steps to make sure your information and transactions are secure.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full">
              <Image
                src="/Send.svg" // Update with the correct path
                alt="Send Icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Balance Transfer</h4>
              <p className="text-gray-300">
                A balance transfer credit card can save you a lot of money in interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/BrandSection.js
import Image from 'next/image';

export const BrandSection = () =>  {
  return (
    <section className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
        <div className="grayscale hover:grayscale-0 transition duration-300">
          <Image
            src="/airbnb.svg" // Update with your logo path
            alt="Airbnb Logo"
            width={140}
            height={60}
            className="mx-auto"
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition duration-300">
          <Image
            src="/binance.svg" // Update with your logo path
            alt="Binance Logo"
            width={140}
            height={60}
            className="mx-auto"
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition duration-300">
          <Image
            src="/Coinbase.svg" // Update with your logo path
            alt="Coinbase Logo"
            width={140}
            height={60}
            className="mx-auto"
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition duration-300">
          <Image
            src="/dropbox.svg" // Update with your logo path
            alt="Dropbox Logo"
            width={140}
            height={60}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

// components/TestimonialsSection.js
import Image from 'next/image';

export const TestimonialsSection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0 w-full md:w-[40%]">
            What people are saying about us
          </h2>
          <div className="text-sm sm:text-base text-[#FFFFFFB2] w-full md:w-[40%]">
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="text-teal-400 text-5xl md:text-6xl">“</div>
              <p className="text-gray-300 mt-4 mb-6 text-sm sm:text-base">
                Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <Image
                src="/Image-3.svg" // Replace with the correct path
                alt="Herman Jensen"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-white font-semibold text-sm sm:text-base">Herman Jensen</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Founder & Leader</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="text-teal-400 text-5xl md:text-6xl">“</div>
              <p className="text-gray-300 mt-4 mb-6 text-sm sm:text-base">
                Money makes your life easier. If you're lucky to have it, you're lucky.
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <Image
                src="/Image.svg" // Replace with the correct path
                alt="Steve Mark"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-white font-semibold text-sm sm:text-base">Steve Mark</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Founder & Leader</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="text-teal-400 text-5xl md:text-6xl">“</div>
              <p className="text-gray-300 mt-4 mb-6 text-sm sm:text-base">
                It is usually people in the money business, finance, and international trade that are really rich.
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <Image
                src="/Image-2.svg" // Replace with the correct path
                alt="Kenn Gallagher"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-white font-semibold text-sm sm:text-base">Kenn Gallagher</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Founder & Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

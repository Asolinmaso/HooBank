export const ServiceCTA =() => {
    return (
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto rounded-xl p-8 flex flex-col md:flex-row justify-between items-center" style={{ background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)' }}>
          <div className="pl-5">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let’s try our service now!
            </h2>
            <p className="text-gray-300 md:w-[70%]">
              Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-teal-400 text-gray-900 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </section>
    );
  }
  

import Image from 'next/image';

export const BillingSection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <Image
            src="/PaymentMethod.svg" // Update with the correct path
            alt="Hero Image"
            width={500}
            height={500}
            className="object-contain"
          />
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4">Easily control your billing & invoicing.</h2>
          <p className="text-gray-400 mb-6">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
            aliporttitor integer platea placerat.
          </p>
          <div className="flex space-x-4">
            <Image src="/Applestore.svg" alt="App Store" width={150} height={50} />
            <Image src="/GooglePlay.svg" alt="Google Play" width={150} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
}

// components/MetricsSection.js
export const MetricsSection = () => {
    return (
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center text-white gap-8">
          <div className="text-center flex md:flex-row flex-col items-center gap-2 md:gap-4">
            <h3 className="text-4xl font-bold">3800+</h3>
            <p className="text-teal-400">USER ACTIVE</p>
          </div>
          <div className="text-center flex md:flex-row flex-col items-center gap-2 md:gap-4">
            <h3 className="text-4xl font-bold">230+</h3>
            <p className="text-teal-400">TRUSTED BY COMPANY</p>
          </div>
          <div className="text-center flex md:flex-row flex-col items-center gap-2 md:gap-4">
            <h3 className="text-4xl font-bold">$230M+</h3>
            <p className="text-teal-400">TRANSACTION</p>
          </div>
        </div>
      </section>
    );
  }
  
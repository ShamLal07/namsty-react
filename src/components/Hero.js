const Hero = () => {
    return (
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/food-hub.webp')",
        }}
      >
        <div className="bg-gray-900 bg-opacity-50 max-w-screen-xl mx-auto">
          <div className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center p-6 ">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left text-white">
              <h1 className="text-4xl font-bold mb-4">
                Crave Delicious Food? 🍔🍕
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Discover the best meals and get them delivered to your doorstep
                in no time. Order from your favorite restaurants now!
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                  Get Started
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
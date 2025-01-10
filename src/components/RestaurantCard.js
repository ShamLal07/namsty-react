export const RestaurantCard = ({ product }) => {
    return (
        <div className="res-card w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 sm:max-w-sm">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg transform transition-all duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-4 space-y-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate hover:text-gray-600 transition-all duration-300 text-left">
                    {product.title}
                </h2>
                <h3 className="text-md sm:text-lg md:text-xl text-gray-700 font-medium text-left">
                    ${product.price}
                </h3>
                <h4 className="text-xs sm:text-sm md:text-md text-gray-600 text-left">
                    Category: <span className="font-semibold">{product.category}</span>
                </h4>
                <p className="text-sm text-gray-500 text-left line-clamp-4">
                    {product.description}
                </p>
                <div className="flex items-center text-yellow-500 text-xs sm:text-sm md:text-md text-left">
                    <span className="font-semibold">Rating:</span>
                    <span className="ml-1">{product.rating.rate} ⭐</span>
                    <span className="ml-2 text-gray-500">({product.rating.count} reviews)</span>
                </div>
                <div className="mt-4">
                    <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm sm:text-base">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

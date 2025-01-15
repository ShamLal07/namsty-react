import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";

const Body = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
<<<<<<< Updated upstream
    const [loading, setLoading] = useState(true);
=======
    const [searchTxt, setSearchTxt] = useState("");
>>>>>>> Stashed changes

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setAllProducts(data);
            setFilteredProducts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const filterTopRated = () => {
        const filtered = allProducts.filter((product) => product.rating.rate > 4);
        setFilteredProducts(filtered);
    };

    const sortAlphabetically = () => {
        const sorted = [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title));
        setFilteredProducts(sorted);
    };

    const resetProducts = () => {
        setFilteredProducts(allProducts);
        setSearchTxt(""); // Clear the search field when resetting
    };

<<<<<<< Updated upstream
=======
    const searchProduct = (e) => {
        const searchValue = e.target.value;
        setSearchTxt(searchValue);

        if (searchValue.trim()) {
            const filtered = allProducts.filter((product) =>
                product.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(allProducts); // Reset to all products if the input is cleared
        }
    };

    const filterSearch = () => {
        if (!searchTxt.trim()) {
            alert("Please enter a search Product.");
            return;
        }

        const filtered = allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTxt.toLowerCase())
        );
        setFilteredProducts(filtered);

        if (filtered.length === 0) {
            alert("No products found.");
        }
    };

>>>>>>> Stashed changes
    return (
        <div className="body">
            <div className="filter m-5 text-center">
                <div className="btn-wrapper flex gap-5 justify-center flex-wrap">
                    <button
                        className="bg-emerald-800 text-white text-sm p-3 radius text-center mx-6 uppercase"
                        onClick={filterTopRated}
                    >
                        Top Rated Products
                    </button>
                    <button
                        className="bg-emerald-800 text-white text-sm p-3 radius text-center mx-6 uppercase"
                        onClick={sortAlphabetically}
                    >
                        A to Z
                    </button>
                    <button
                        className="bg-emerald-800 text-white text-sm p-3 radius text-center mx-6 uppercase"
                        onClick={resetProducts}
                    >
                        Reset All Products
                    </button>
<<<<<<< Updated upstream
=======
                    <div className="search_btn flex items-center border-2 border-indigo-500 rounded-lg p-2 bg-white relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none placeholder-gray-400"
                            value={searchTxt}
                            onChange={searchProduct}
                        />
                        <button
                            className="text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition"
                            onClick={filterSearch}
                        >
                            Search
                        </button>
                    </div>
>>>>>>> Stashed changes
                </div>
            </div>
            <div className="res-card-container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between my-8 gap-4 px-5">
                {loading
                    ? Array.from({ length: 8 }).map((_, index) => (
                          <div
                              key={index}
                              className="w-full bg-gray-200 shadow rounded-lg p-4 animate-pulse"
                          >
                              <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                              <div className="h-5 bg-gray-300 rounded w-1/2 mb-2"></div>
                              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                          </div>
                      ))
                    : filteredProducts.map((product) => (
                          <RestaurantCard key={product.id} product={product} />
                      ))}
            </div>
        </div>
    );
};

export default Body;

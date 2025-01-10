const Header = () => {
   return (
       <header className=" bg-gradient-to-r from-indigo-600 to-purple-700 sticky top-0 z-50 bg-white shadow-lg ">
        <div className="header-wrapper flex justify-between items-center p-4 shadow-lg max-w-screen-xl mx-auto">
            <div className="logo flex items-center space-x-4">
                <img src={"/logo.png"} alt="Logo" className="w-16 object-contain rounded-full border-4 border-white h-full "/>
                <span className="text-white text-2xl font-semibold tracking-wide">Food Hub</span>
            </div>
            <ul className="flex items-center gap-8 text-sm uppercase font-medium text-white space-x-6 hidden lg:flex">
                <li>
                    <a href="#" className="hover:text-gray-200 transition-all duration-300">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-200 transition-all duration-300">About</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-200 transition-all duration-300">Contact</a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-200 transition-all duration-300">Cart</a>
                </li>
            </ul>
            <div className="account flex items-center gap-4">
                <img 
                    src="/profile.webp" 
                    alt="Account Avatar" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover cursor-pointer hover:scale-110 transition-all duration-300" 
                />
                <span className="text-white font-medium cursor-pointer hover:text-gray-200 transition-all duration-300">Account</span>
            </div>
        </div>
       
       </header>
   );
};

export default Header;

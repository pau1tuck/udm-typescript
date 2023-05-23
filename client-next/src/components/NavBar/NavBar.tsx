const NavBar: React.FC = () => {
    return (
        <div className="flex items-center justify-between flex-wrap mb-5 lg:p-4 sm:pr-5 xl:pr-6">
            <div className="w-full block flex-grow lg:flex lg:w-auto lg:items-center">
                <div className="lg:flex-grow">
                    <div className="flex justify-end font-body text-lg font-medium">
                        <button className="inline-block mt-4 lg:mt-0 mr-2 px-4 py-2 leading-none text-lg text-gray-200 hover:text-white">
                            Log In
                        </button>
                        <button className="inline-block mt-4 lg:mt-0 px-4 py-2 leading-none rounded bg-blue-700 text-lg text-white text-blue hover:bg-blue-800">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

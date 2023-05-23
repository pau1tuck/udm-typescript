const NavBar: React.FC = () => {
    return (
        <div className="flex justify-end p-4 font-standard text-lg">
            <button className="inline-block mr-2 px-4 py-2 text-gray-200 hover:text-white">
                Log In
            </button>
            <button className="inline-block px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800">
                Sign Up
            </button>
        </div>
    );
};

export default NavBar;

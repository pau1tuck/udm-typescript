const Page: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Page;

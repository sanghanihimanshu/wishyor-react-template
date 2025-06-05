const Otp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">OTP Verification</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                        Verify
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Otp
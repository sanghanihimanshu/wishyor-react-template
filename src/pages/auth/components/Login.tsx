
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded shadow">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 mt-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
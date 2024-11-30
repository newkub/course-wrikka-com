export default function Buy() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Get Started Today</h1>
        <div className="bg-gray-800 rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="plan" className="block text-sm font-medium mb-2">
                Select Plan
              </label>
              <select
                id="plan"
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              >
                <option>Starter - Free</option>
                <option>Pro - $29/mo</option>
                <option>Enterprise - Custom</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Continue to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

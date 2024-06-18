export function Homechild1() {
    return (
      <div className="flex justify-between items-center h-28 w-[1240px] mx-auto px-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
          <p className="text-gray-600">Here are your stats for today</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white border border-gray-300 p-2 rounded-md shadow-sm hover:bg-gray-100">
            <input type="date" className="outline-none" />
          </button>
          <button className="bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-600">
            + Create Invoice
          </button>
        </div>
      </div>
    );
  }
  
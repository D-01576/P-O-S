export function Homechild1() {
  return (
      <div className="flex flex-col md:flex-row justify-between p-4 items-center h-42 w-full max-w-[1240px] mx-auto px-4 ">
          <div className=" flex items-center flex-col md:block mb-4 md:mb-0">
              <h2 className="text-sm font-semibold text-gray-800 md:text-xl">Overview</h2>
              <p className="text-xs text-gray-600 md:text-sm">Here are your stats for today</p>
          </div>
          <div className="text-xs flex items-center justify-center space-x-4 space-y-2 space-y-0">
              <button className="h-8 bg-white border border-gray-300 p-2 rounded-md shadow-sm hover:bg-gray-100 flex items-center">
                  <input type="date" className="outline-none" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-600">
                  + Create Invoice
              </button>
          </div>
      </div>
  );
}

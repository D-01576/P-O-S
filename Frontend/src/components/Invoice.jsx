import React from 'react';

const InvoiceForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label className="block text-gray-700">Choose Client</label>
          <div className="flex">
            <select className="flex-1 px-4 py-2 border rounded-lg">
              <option>Select Client</option>
              {/* Add client options here */}
            </select>
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">+ New Client</button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Choose Project</label>
          <div className="flex">
            <select className="flex-1 px-4 py-2 border rounded-lg">
              <option>Select Project</option>
              {/* Add project options here */}
            </select>
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">+ New Project</button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Invoice Frequency</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option>Once</option>
            {/* Add more frequency options here */}
          </select>
        </div>

        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default InvoiceForm;

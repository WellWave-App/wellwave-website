import React from 'react';

const SuccessPage: React.FC = () => {
  const items = Array(10).fill({
    title: 'Title',
    reward: 150,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6 px-4">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 rounded-md shadow">
          <h1 className="text-xl font-bold text-gray-800">ความสำเร็จ ทั้งหมด 10 ความสำเร็จ</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            + เพิ่มความสำเร็จ
          </button>
        </header>

        {/* Search and Tabs */}
        <div className="mt-6 bg-white p-4 rounded-md shadow">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="ค้นหา"
              className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-md"
            />
          </div>
          <nav className="mt-4 flex space-x-4 border-b">
            <button className="text-blue-600 border-b-2 border-blue-600 px-4 py-2">
              ทั้งหมด
            </button>
            <button className="text-gray-600 hover:text-blue-600 px-4 py-2">เหรียญรางวัล</button>
            <button className="text-gray-600 hover:text-blue-600 px-4 py-2">สถิติ</button>
          </nav>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow p-4 flex items-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0"></div>
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-gray-600">
                  รางวัลที่จะได้รับ: <span className="text-yellow-500">🪙 {item.reward}</span>
                </p>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                ...
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <footer className="mt-6 flex justify-center">
          <nav className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">1</button>
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">2</button>
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">3</button>
            <span className="px-3 py-1">...</span>
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">20</button>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default SuccessPage;

import React from 'react';

const RewardPage: React.FC = () => {
  const randomBoxData = Array(5).fill({ name: '15 EXP', rate: '10%' });
  const exchangeData = [
    { name: '1 Gem', condition: '15 EXP', balance: '10/99' },
    { name: '10 Gem', condition: '150 EXP', balance: '10/99' },
    { name: '20 Gem', condition: '300 EXP', balance: '10/99' },
    { name: '200 Gem', condition: '3000 EXP', balance: '10/99' },
    { name: '1000 Gem', condition: '1500 EXP', balance: '10/99' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-700">เพิ่มข้อมูล / ของรางวัล</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          ออกจากระบบ
        </button>
      </header>

      <main className="container mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <div className="text-gray-600 mb-4">
          เพิ่มข้อมูล &gt; <span className="font-semibold">ของรางวัล</span>
        </div>

        {/* Rewards Section */}
        <section className="bg-white rounded-md shadow p-4">
          <h2 className="text-lg font-semibold mb-4">ของรางวัลทั้งหมด</h2>
          <div className="flex items-center gap-4">
            {/* Reward Cards */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-yellow-100 rounded-md flex items-center justify-center">
                <span className="text-yellow-500 text-xl font-bold">EXP</span>
              </div>
              <div className="w-16 h-16 bg-purple-100 rounded-md flex items-center justify-center">
                <span className="text-purple-500 text-xl font-bold">Gem</span>
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                <span className="text-gray-500 text-xl font-bold">อื่นๆ</span>
              </div>
            </div>
            {/* Add Button */}
            <button className="w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold flex items-center justify-center hover:bg-blue-600">
              +
            </button>
          </div>
        </section>

        {/* Random Box Table */}
        <section className="mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">กล่องสุ่ม</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              + เพิ่มกล่องสุ่ม
            </button>
          </div>
          <div className="bg-white rounded-md shadow mt-4 p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b text-left px-4 py-2">ชื่อ</th>
                  <th className="border-b text-left px-4 py-2">อัตราการเกิด</th>
                </tr>
              </thead>
              <tbody>
                {randomBoxData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border-b px-4 py-2">{item.name}</td>
                    <td className="border-b px-4 py-2">{item.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="mt-4 flex justify-center">
              <nav className="flex space-x-2">
                <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">1</button>
                <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">2</button>
                <span>...</span>
                <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">20</button>
              </nav>
            </div>
          </div>
        </section>

        {/* Exchange Table */}
        <section className="mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">แลกเปลี่ยน</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              + เพิ่มแลกเปลี่ยน
            </button>
          </div>
          <div className="bg-white rounded-md shadow mt-4 p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b text-left px-4 py-2">ชื่อ</th>
                  <th className="border-b text-left px-4 py-2">เงื่อนไขการแลก</th>
                  <th className="border-b text-left px-4 py-2">ยอดคงเหลือ</th>
                </tr>
              </thead>
              <tbody>
                {exchangeData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border-b px-4 py-2">{item.name}</td>
                    <td className="border-b px-4 py-2">{item.condition}</td>
                    <td className="border-b px-4 py-2">{item.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="mt-4 flex justify-center">
              <nav className="flex space-x-2">
                <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">1</button>
                <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">2</button>
                <span>...</span>
                <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">20</button>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RewardPage;

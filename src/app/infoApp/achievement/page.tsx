import React from 'react';
import Image from "next/image";

const ArticlesPage: React.FC = () => {
  const items = Array(10).fill({
    title: 'Title',
    views: 30,
    description: 'รายละเอียดเนื้อหาของความสำเร็จแบบย่อๆ เพื่อแสดงในรายการความสำเร็จ...',
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">


      <div className="rounded-lg p-6 bg-white  shadow-md">
        <p className="text-gray-600 text-sm pb-3 flex items-center">
          เพิ่มข้อมูล
          <span style={{ margin: '0 8px' }}> &gt; </span> {/* สำหรับลูกศร ">" */}
          <Image
            src="/asset/achieve.svg"
            alt="fire"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-black">ความสำเร็จ</span>
        </p>

        <div className="flex justify-between items-center mb-6" ><h1 className="text-xl font-bold text-gray-800">ความสำเร็จ ทั้งหมด 10 ความสำเร็จ</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + เพิ่มความสำเร็จ
          </button></div>
        <div className="flex items-center border-b">
          <nav className="flex space-x-4 px-4 py-2">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600">ทั้งหมด</button>
            <button className="text-gray-600 hover:text-blue-600">เหรียญรางวัล</button>
            <button className="text-gray-600 hover:text-blue-600">สถิติ</button>

          </nav>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 max-h-[350px] overflow-y-auto">
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



        <footer className="flex justify-between items-center mt-6">
          {/* ข้อความ "แสดง 1-10 จาก X รายการ" ชิดซ้าย */}
          <p className="text-gray-600 text-sm">แสดง 1-10 จาก {items.length} รายการ</p>

          {/* ปุ่มเลขหน้า (pagination) ชิดขวา */}
          <div className="flex space-x-2 ml-auto">
            {[1, 2, 3, 4, 5].map((page) => (
              <button key={page} className={`py-1 px-3 rounded-lg ${page === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                {page}
              </button>
            ))}
            <button className="py-1 px-3 bg-gray-200 text-gray-600 rounded-lg">...</button>
          </div>
        </footer>

      </div>
    </div>


  );
};

export default ArticlesPage;

import React from 'react';

const ArticlesPage: React.FC = () => {
  const articles = Array(5).fill({
    title: 'Title',
    views: 30,
    description: 'รายละเอียดเนื้อหาของบทความแบบย่อๆ เพื่อแสดงในรายการบทความ...',
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">


      <div className="rounded-lg p-6 bg-white  shadow-md">

        <div className="flex justify-between items-center mb-6" ><h1 className="text-xl font-bold text-gray-800">บทความ ทั้งหมด 10 บทความ</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + เพิ่มบทความ
          </button></div>
        <div className="flex items-center border-b">
          <nav className="flex space-x-4 px-4 py-2">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600">ทั้งหมด</button>
            <button className="text-gray-600 hover:text-blue-600">โรคความดันโลหิตสูง</button>
            <button className="text-gray-600 hover:text-blue-600">โรคเบาหวาน</button>
            <button className="text-gray-600 hover:text-blue-600">โรคไขมันในเลือดสูง</button>
            <button className="text-gray-600 hover:text-blue-600">โรคอ้วน</button>
            <button className="text-gray-600 hover:text-blue-600">อื่น ๆ</button>
          </nav>
        </div>
        <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex items-start bg-white  rounded-lg shadow hover:shadow-lg"
            >
              {/* รูปภาพหรือไอคอนด้านซ้าย */}
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-l-lg">
                {/* ใส่ไอคอนหรือภาพ */}

              </div>

              {/* เนื้อหา */}
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mt-4">{article.title}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  {/* ปุ่มหมวดหมู่ */}
                  <span className="bg-blue-600 text-white text-xs font-sans px-4 py-1 rounded">
                    หมวด
                  </span>
                  <p className="text-sm text-gray-500">ยอดผู้เข้าชม {article.views} ครั้ง</p>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{article.description}</p>
              </div>

              {/* ปุ่มเพิ่มเติม */}
              <button className="px-4 py-2 text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 12h.01M12 12h.01M18 12h.01"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <footer className="flex justify-between items-center mt-6">
          {/* ข้อความ "แสดง 1-10 จาก X รายการ" ชิดซ้าย */}
          <p className="text-gray-600 text-sm">แสดง 1-10 จาก {articles.length} รายการ</p>

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

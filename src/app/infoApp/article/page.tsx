import React from 'react';

const ArticlesPage: React.FC = () => {
  const articles = Array(10).fill({
    title: 'Title',
    views: 30,
    description: 'รายละเอียดเนื้อหาของบทความแบบย่อๆ เพื่อแสดงในรายการบทความ...',
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">บทความ ทั้งหมด 10 บทความ</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + เพิ่มบทความ
          </button>
        </header>
        <div className="bg-white rounded shadow-md">
          <div className="flex items-center border-b">
            <nav className="flex space-x-4 px-4 py-2">
              <button className="text-blue-600 font-semibold border-b-2 border-blue-600">ทั้งหมด</button>
              <button className="text-gray-600 hover:text-blue-600">โรงแรมแนะนำ</button>
              <button className="text-gray-600 hover:text-blue-600">โรงแรมยอดนิยม</button>
              <button className="text-gray-600 hover:text-blue-600">โรงแรมในเมือง</button>
              <button className="text-gray-600 hover:text-blue-600">อื่น ๆ</button>
            </nav>
          </div>
          <div className="p-4 space-y-4">
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-4 rounded shadow hover:shadow-md"
              >
                <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                <div className="ml-4 flex-grow">
                  <h2 className="text-lg font-bold">{article.title}</h2>
                  <p className="text-sm text-gray-500">ยอดผู้เข้าชม {article.views} ครั้ง</p>
                  <p className="text-sm text-gray-600">{article.description}</p>
                </div>
                <button className="ml-4 text-gray-500 hover:text-gray-700">
                  ...
                </button>
              </div>
            ))}
          </div>
        </div>
        <footer className="flex justify-center mt-6">
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

export default ArticlesPage;

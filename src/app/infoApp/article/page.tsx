"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FileUpload from "../../components/upload";

const ArticlesPage: React.FC = () => {
  const articles = Array(5).fill({
    title: 'Title',
    views: 30,
    description: 'รายละเอียดเนื้อหาของบทความแบบย่อๆ เพื่อแสดงในรายการบทความ...',
  });
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  // const [amount, setAmount] = useState(1);
  // const [duration, setDuration] = useState(3);
  // const [sortedData, setSortedData] = useState<Task[]>(taskData);
  // const [sortConfig, setSortConfig] = useState<{ column: keyof Task | null; direction: number }>({
  //   column: null,
  //   direction: 0, // 0: default, 1: ascending, 2: descending
  // });

  return (
    <div className="top-0 px-28 py-6 bg-gray-100 min-h-screen font-sans">


      <div className="rounded-lg p-6 mt-16 h-[600px] mt bg-white  shadow-md">
        <p
          className="text-gray-600 text-sm pb-3 flex items-center cursor-pointer group"
          onClick={() => router.back()} // ย้อนกลับ
        >
          <span className="hover:underline inline-flex items-center group-hover:text-black">
            เพิ่มข้อมูล</span>
          <span style={{ margin: "0 8px" }}> &gt; </span>
          <Image
            src="/asset/article.svg"
            alt="article"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-black">บทความ</span>

        </p>


        <div className="flex justify-between items-center mb-6" ><h1 className="text-xl font-bold text-gray-800">บทความ ทั้งหมด 10 บทความ</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setIsOpen(true)}>
            + เพิ่มบทความ
          </button> {/* Popup */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
              <div className="bg-white rounded-lg shadow max-w-[600px] w-full max-h-[600px] p-6 m-18">                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-semibold">เพิ่มบทความ</h2>
                  <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                    ✖
                  </button>
                </div>

                {/* Form ใน Popup */}
                <div className="mt-4 space-y-4  max-h-[500px] overflow-y-auto  scrollbar-custom pr-2 ">

                  <label className="block text-gray-700">ชื่อบทความ</label>
                  <input type="text" className="w-full border rounded p-2" placeholder="ชื่อบทความ" />
                  <label className="block text-gray-700">ประเภทบทความ</label>
                  <select className="w-full border rounded p-2 ">
                    <option>บทความปรับนิสัย</option>

                    <option>เควส</option>
                  </select>


                  <label className="block text-gray-700">รายละเอียด</label>
                  <input type="text" className="w-full border rounded p-2" placeholder="รายละเอียด" />

                  <label className="block text-gray-700">รูปภาพบทความ</label>

                  <FileUpload />


                  {/* ปุ่ม */}
                  <div className="flex justify-end gap-2 mt-4">
                    <button onClick={() => setIsOpen(false)} className="px-4 py-2 text-gray-500 hover:text-gray-700">
                      ยกเลิก
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}</div>
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
        <div className="p-4 space-y-4 max-h-[350px] overflow-y-auto scrollbar-custom pr-2">
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

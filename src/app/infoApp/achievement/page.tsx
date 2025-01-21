"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import FileUpload from "../../components/upload";
import { IoMdTrash } from "react-icons/io";

const ArticlesPage: React.FC = () => {
  const items = Array(10).fill({
    title: 'Title',
    views: 30,
    description: 'รายละเอียดเนื้อหาของความสำเร็จแบบย่อๆ เพื่อแสดงในรายการความสำเร็จ...',
  });
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  // const [duration, setDuration] = useState(3);
  const [levels, setLevels] = useState([
    { level: 1, duration: 1 }, // เริ่มต้นด้วยระดับ 1
  ]);
  // const [duration, setDuration] = useState(1);

  // ฟังก์ชันเพิ่มระดับใหม่
  const addLevel = () => {
    const newLevel = { level: levels.length + 1, duration: 1 }; // ระดับใหม่
    setLevels([...levels, newLevel]); // เพิ่มระดับใหม่
  };

  // ฟังก์ชันลบระดับ
  const deleteLevel = (levelToDelete: number) => {
    setLevels(levels.filter(level => level.level !== levelToDelete));
  };

  // ฟังก์ชันอัพเดต duration สำหรับระดับต่างๆ
  const handleDurationChange = (index: number, value: number) => {
    const updatedLevels = levels.map((lvl, i) =>
      i === index ? { ...lvl, duration: value } : lvl
    );
    setLevels(updatedLevels);
  };
  return (
    <div className="top-0 px-28 py-6 p-6 bg-gray-100 min-h-screen font-sans">


      <div className="rounded-lg p-6 mt-16 h-[600px] bg-white  shadow-md">
        <p
          className="text-gray-600 text-sm pb-3 flex items-center cursor-pointer group"
          onClick={() => router.back()} // ย้อนกลับ
        >
          <span className="hover:underline inline-flex items-center group-hover:text-black">
            เพิ่มข้อมูล</span>
          <span style={{ margin: "0 8px" }}> &gt; </span>
          <Image
            src="/asset/achieve.svg"
            alt="article"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-black">ความสำเร็จ</span>

        </p>


        <div className="flex justify-between items-center mb-6" ><h1 className="text-xl font-bold text-gray-800">ความสำเร็จ ทั้งหมด 10 ความสำเร็จ</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setIsOpen(true)}>
            + เพิ่มความสำเร็จ
          </button>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
              <div className="bg-white rounded-lg shadow max-w-[600px] w-full max-h-[600px] p-6 m-18">                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-semibold">เพิ่มความสำเร็จ</h2>
                  <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                    ✖
                  </button>
                </div>

                {/* Form ใน Popup */}
                <div className="mt-4 space-y-4  max-h-[500px] overflow-y-auto  scrollbar-custom pr-2 ">

                  <label className="block text-gray-700">ชื่อความสำเร็จ</label>
                  <input type="text" className="w-full border rounded p-2" placeholder="ชื่อความสำเร็จ" />
                  <label className="block text-gray-700">รางวัล</label>
                  <div className="flex gap-2">
                    <select className="border rounded p-2">
                      <option>Gem</option>
                      <option>EXP</option>
                    </select>
                    <input type="number" className=" w-full border rounded p-2 " placeholder="จำนวน" />
                  </div>

                  <label className="block text-gray-700">เกณฑ์การเลื่อนขั้น</label>


                  {/* แสดงระดับทั้งหมดที่มี */}
                  {levels.map((level, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      {/* ส่วนของระดับ และปุ่มลบ (ไอคอนถังขยะ) */}
                      <div className="flex justify-between items-center gap-2">
                        <label className="block text-gray-700">ระดับที่ {level.level}</label>
                        {/* ปุ่มลบ (ไอคอนถังขยะ) */}
                        <button
                          onClick={() => deleteLevel(level.level)}
                          className="text-gray-600 hover:text-gray-600 rounded p-2 border border-gray-300"
                        >
                          <IoMdTrash size={24} />
                        </button>
                      </div>

                      {/* ส่วนของการกรอกข้อมูลสำหรับระดับ */}
                      <FileUpload />
                      <div className="flex gap-2 items-center">
                        <select className="border rounded p-2">
                          <option>Gem</option>
                          <option>EXP</option>
                        </select>
                        <select className="border rounded p-2">
                          <option>Gem</option>
                          <option>EXP</option>
                        </select>
                        <div className="flex items-center w-full">
                          <input
                            type="number"
                            value={level.duration}
                            onChange={(e) => handleDurationChange(index, parseInt(e.target.value) || 1)}
                            min="1"
                            className="w-full rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <span className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">วัน</span>
                        </div>
                      </div>
                    </div>

                  ))}

                  {/* ปุ่ม */}
                  <div className="flex justify-between mt-4">
                    <button onClick={addLevel} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      + เพิ่มระดับ
                    </button>
                    <div className="flex gap-2">
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
            </div>
          )}</div>
        <div className="flex items-center border-b">
          <nav className="flex space-x-4 px-4 py-2">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600">ทั้งหมด</button>
            <button className="text-gray-600 hover:text-blue-600">เหรียญรางวัล</button>
            <button className="text-gray-600 hover:text-blue-600">สถิติ</button>

          </nav>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 max-h-[360px] overflow-y-auto  scrollbar-custom pr-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow p-4 mb-2 mt-2 flex items-center hover:shadow-lg transition"
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

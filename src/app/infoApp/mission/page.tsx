"use client";
import { Task } from "@mui/icons-material";
import React, { useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ใช้ next/navigation ใน App Router
import FileUpload from "../../components/upload";
interface Task {
  name: string;
  category: string;
  reward: number;
  successRate: string;
  participants: string;
  status: string;
}

const taskData: Task[] = [
  { name: "ภารกิจ", category: "ออกกำลังกาย", reward: 150, successRate: "50%", participants: "10/99 คน", status: "เฉยๆ" },
  { name: "ภารกิจ", category: "ออกกำลังกาย", reward: 200, successRate: "75%", participants: "20/99 คน", status: "สดใส" },
  { name: "ภารกิจ", category: "พักผ่อน", reward: 300, successRate: "90%", participants: "50/99 คน", status: "ท้อแท้" },
  { name: "ภารกิจ", category: "พักผ่อน", reward: 300, successRate: "90%", participants: "50/99 คน", status: "กดดัน" },
  { name: "ภารกิจ", category: "พักผ่อน", reward: 300, successRate: "90%", participants: "50/99 คน", status: "พอใจ" },
  { name: "ภารกิจ", category: "ออกกำลังกาย", reward: 150, successRate: "50%", participants: "10/99 คน", status: "เฉยๆ" },
  { name: "ภารกิจ", category: "ออกกำลังกาย", reward: 200, successRate: "75%", participants: "20/99 คน", status: "สดใส" },
  { name: "ภารกิจ", category: "พักผ่อน", reward: 300, successRate: "90%", participants: "50/99 คน", status: "ท้อแท้" },
  { name: "ภารกิจ", category: "พักผ่อน", reward: 300, successRate: "90%", participants: "50/99 คน", status: "กดดัน" },
  { name: "ภารกิจ", category: "พักผ่อน", reward: 300, successRate: "90%", participants: "50/99 คน", status: "พอใจ" },
];



const TaskPage = () => {
  const [amount, setAmount] = useState(1);
  const [duration, setDuration] = useState(3);
  const [sortedData, setSortedData] = useState<Task[]>(taskData);
  const [sortConfig, setSortConfig] = useState<{ column: keyof Task | null; direction: number }>({
    column: null,
    direction: 0, // 0: default, 1: ascending, 2: descending
  });
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleSort = (column: keyof Task) => {
    // กำหนดลำดับที่ต้องการสำหรับความรู้สึก
    const feelingsOrder = ['กดดัน', 'ท้อแท้', 'เฉยๆ', 'พอใจ', 'สดใส'];

    setSortConfig((prev) => {
      const newDirection = prev.column === column ? (prev.direction + 1) % 3 : 1;
      const sorted = [...sortedData].sort((a, b) => {
        if (newDirection === 0) return 0; // Default (No Sort)
        if (typeof a[column] === "number") {
          return newDirection === 1
            ? (a[column] as number) - (b[column] as number)
            : (b[column] as number) - (a[column] as number);
        }

        // กรณีที่ column เป็นความรู้สึก
        if (column === "status") {
          const indexA = feelingsOrder.indexOf(a[column]);
          const indexB = feelingsOrder.indexOf(b[column]);

          return newDirection === 1
            ? indexA - indexB
            : indexB - indexA;
        }

        // สำหรับกรณีอื่น ๆ ใช้ localeCompare
        return newDirection === 1
          ? String(a[column]).localeCompare(String(b[column]), 'th')
          : String(b[column]).localeCompare(String(a[column]), 'th');
      });

      setSortedData(sorted);
      return { column, direction: newDirection };
    });
  };


  const getIcon = (column: keyof Task) => {
    if (sortConfig.column !== column) return <FaSort className="inline" />;
    if (sortConfig.direction === 1) return <FaSortUp className="inline" />;
    if (sortConfig.direction === 2) return <FaSortDown className="inline" />;
    return <FaSort className="inline" />;
  };




  return (

    <div className="top-0 px-28 py-6 bg-gray-100 min-h-screen font-sans">
      <div className="bg-white shadow rounded-lg p-6 mt-16 h-[600px] flex flex-col">
        <p
          className="text-gray-600 text-sm pb-3 flex items-center cursor-pointer group"
          onClick={() => router.back()} // ย้อนกลับ
        >
          <span className="hover:underline inline-flex items-center group-hover:text-black">
            เพิ่มข้อมูล</span>
          <span style={{ margin: "0 8px" }}> &gt; </span>
          <Image
            src="/asset/fire.svg"
            alt="fire"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-black">ภารกิจ</span>

        </p>



        <div className="flex justify-between items-center mb-6" ><h1 className="text-xl font-bold text-gray-800">ข้อมูลภารกิจ ทั้งหมด {taskData.length} รายการ</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setIsOpen(true)}>
            + เพิ่มภารกิจ
          </button> {/* Popup */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
              <div className="bg-white rounded-lg shadow  max-h-[600px]  p-6 m-18 ">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-semibold">เพิ่มภารกิจ</h2>
                  <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                    ✖
                  </button>
                </div>

                {/* Form ใน Popup */}
                <div className="mt-4 space-y-4  max-h-[500px] overflow-y-auto  scrollbar-custom pr-2 ">
                  <label className="block text-gray-700">ประเภทภารกิจ</label>
                  <select className="w-full border rounded p-2 ">
                    <option>ภารกิจปรับนิสัย</option>

                    <option>เควส</option>
                  </select>

                  <label className="block text-gray-700">ชื่อภารกิจ</label>
                  <input type="text" className="w-full border rounded p-2" placeholder="ชื่อภารกิจ" />

                  {/* หมวดหมู่ */}
                  <label className="block text-gray-700">หมวดหมู่</label>

                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 cursor-pointer peer-checked:bg-blue-100">
                      <input type="radio" name="category" />
                      ออกกำลังกาย
                    </label>

                    <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 cursor-pointer peer-checked:bg-blue-100">
                      <input type="radio" name="category" />
                      รับประทานอาหาร
                    </label>

                    <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 cursor-pointer peer-checked:bg-blue-100">
                      <input type="radio" name="category" />
                      พักผ่อน
                    </label>
                  </div>
                  <label className="block text-gray-700">หมวดหมู่รอง</label>
                  <select className="w-full border rounded p-2 ">
                    <option  >หมวดหมู่รอง</option>
                    <option>การเดิน</option>

                    <option>การวิ่ง</option>
                  </select>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Left section */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">จำนวน</label>
                      <div className="flex">
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(parseInt(e.target.value) || 1)}
                          min="1"
                          className="w-full rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <select
                          className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option>วัน</option>
                          <option>เดือน</option>
                          <option>ปี</option>
                        </select>
                      </div>
                    </div>

                    {/* Right section */}
                    <div className="flex-1">

                      <label className="block text-sm font-medium text-gray-700 mb-2">ระยะเวลาการก่อ</label>
                      <div className="flex items-center ">
                        <input
                          type="number"
                          value={duration}
                          onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                          min="1"
                          className="w-full rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <span className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">วัน</span>
                      </div>
                    </div>


                  </div>

                  <label className="block text-gray-700">รายละเอียด</label>
                  <input type="text" className="w-full border rounded p-2" placeholder="รายละเอียด" />

                  {/* รางวัล */}
                  <label className="block text-gray-700">รางวัล</label>
                  <div className="flex gap-2">
                    <select className="border rounded p-2">
                      <option>Gem</option>
                      <option>EXP</option>
                    </select>
                    <input type="number" className=" w-full border rounded p-2 " placeholder="จำนวน" />
                  </div>
                  <label className="block text-gray-700">รูปภาพภารกิจ</label>

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
        <div className="relative">
          <input
            type="text"
            placeholder="ค้นหา"
            className="rounded-lg bg-gray-100 px-10 py-2 w-full max-w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </span>
        </div>

        <div className="overflow-auto scrollbar-custom flex-grow mt-4 max-h-[400px]">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr className="text-left text-gray-600">
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("name")}>
                  ชื่อภารกิจ {getIcon("name")}
                </th>
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("category")}>
                  หมวดหมู่ {getIcon("category")}
                </th>
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("reward")}>
                  ของรางวัล {getIcon("reward")}
                </th>
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("successRate")}>
                  อัตราความสำเร็จ {getIcon("successRate")}
                </th>
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("participants")}>
                  จำนวนคนทำสำเร็จ {getIcon("participants")}
                </th>
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("status")}>
                  ความรู้สึก {getIcon("status")}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((task, index) => (
                <tr key={index} className="text-sm text-gray-700">
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">OP</div>
                      <span>{task.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">{task.category}</td>
                  <td className="py-2 px-8 border-b">{task.reward}</td>
                  <td className="py-2 px-14 border-b">{task.successRate}</td>
                  <td className="py-2 px-14 border-b">{task.participants}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`py-0.5 px-3 rounded text-sm border 
                ${task.status === "กดดัน" ? "bg-red-100 text-red-600 border-red-600" : ""}
                ${task.status === "ท้อแท้" ? "bg-orange-100 text-orange-600 border-orange-600" : ""}
                ${task.status === "เฉยๆ" ? "bg-yellow-100 text-yellow-600 border-yellow-600" : ""}
                ${task.status === "พอใจ" ? "bg-green-100 text-green-500 border-green-500" : ""}
                ${task.status === "สดใส" ? "bg-green-200 text-green-700 border-green-700" : ""}
              `}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="pt-8 flex justify-between items-center mt-auto">
          <p className="text-gray-600 text-sm">แสดง 1-10 จาก {taskData.length} รายการ</p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button key={page} className={`py-1 px-3 rounded-lg ${page === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                {page}
              </button>
            ))}
            <button className="py-1 px-3 bg-gray-200 text-gray-600 rounded-lg">...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;

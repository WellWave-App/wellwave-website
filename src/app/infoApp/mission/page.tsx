"use client";
import { Task } from "@mui/icons-material";
import React, { useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import Image from "next/image";

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

// const getStatusColor = (status: string) => {
//   switch (status) {
//     case "กำลัง":
//       return "warning";
//     case "ใกล้สำเร็จ":
//       return "error";
//     case "พอใช้":
//       return "secondary";
//     case "สำเร็จ":
//       return "success";
//     default:
//       return "default";
//   }
// };

const TaskPage = () => {
  const [sortedData, setSortedData] = useState<Task[]>(taskData);
  const [sortConfig, setSortConfig] = useState<{ column: keyof Task | null; direction: number }>({
    column: null,
    direction: 0, // 0: default, 1: ascending, 2: descending
  });

  const handleSort = (column: keyof Task) => {
    setSortConfig((prev) => {
      const newDirection = prev.column === column ? (prev.direction + 1) % 3 : 1;
      const sorted = [...sortedData].sort((a, b) => {
        if (newDirection === 0) return 0; // Default (No Sort)
        if (typeof a[column] === "number") {
          return newDirection === 1 ? (a[column] as number) - (b[column] as number) : (b[column] as number) - (a[column] as number);
        }
        return newDirection === 1 ? String(a[column]).localeCompare(String(b[column])) : String(b[column]).localeCompare(String(a[column]));
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
  // const getSortIcon = (column: keyof Task) => {
  //   if (sortConfig.column !== column) return <UnfoldMore fontSize="small" />;
  //   return sortConfig.direction === 1 ? <ArrowUpward fontSize="small" /> : sortConfig.direction === 2 ? <ArrowDownward fontSize="small" /> : <UnfoldMore fontSize="small" />;
  // };

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      <div className="bg-white shadow rounded-lg p-6 h-[600px] flex flex-col">
        <p className="text-gray-600 text-sm pb-3 flex items-center">
          เพิ่มข้อมูล
          <span style={{ margin: '0 8px' }}> &gt; </span> {/* สำหรับลูกศร ">" */}
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + เพิ่มบทความ
          </button></div>
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

        <div className="overflow-auto flex-grow mt-4 max-h-[400px]">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white"> {/* กำหนด sticky และ top-0 ให้แถวหัวข้อคงที่ */}
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
                ${task.status === "พอใจ" ? "bg-green-100 text-green-600 border-green-600" : ""}
                ${task.status === "สดใส" ? "bg-green-100 text-green-700 border-green-700" : ""}
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

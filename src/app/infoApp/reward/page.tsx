"use client";
import { Task } from "@mui/icons-material";
import React, { useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import Image from "next/image";

interface Task {
  name: string;

  successRate: string;

}

const taskData: Task[] = [
  { name: "ของรางวัล", successRate: "50%" },
  { name: "ของรางวัล", successRate: "10%" },
  { name: "ของรางวัล", successRate: "80%" },
  { name: "ของรางวัล", successRate: "70%" },
  { name: "ของรางวัล", successRate: "22%" },
];


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
          return newDirection === 1 ? (a[column] as number) - (b[column] as unknown as number) : (b[column] as unknown as number) - (a[column] as number);
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
    <div className="p-6 bg-gray-100 h-screen font-sans">
      <div className="bg-white shadow rounded-lg p-6 flex flex-col h-full overflow-y-auto flex-grow">
        <p className="text-gray-600 text-sm pb-3 flex items-center">
          เพิ่มข้อมูล
          <span style={{ margin: '0 8px' }}> &gt; </span> {/* สำหรับลูกศร ">" */}
          <Image
            src="/asset/reward.svg"
            alt="fire"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-black">ของรางวัล</span>
        </p>


        <div className="flex justify-between items-center mb-2" ><h1 className="text-xl font-bold text-gray-800">ของรางวัลทั้งหมด</h1>
        </div>
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
          <button className="w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold flex items-center justify-center hover:bg-blue-600">
            +
          </button>
        </div>
        <div className="flex justify-between items-center mb-2" ><h1 className="text-xl font-bold text-gray-800">กล่องสุ่ม</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + เพิ่มกล่องสุ่ม
          </button></div>
        <div className="overflow-auto flex-grow  max-h-[400px]">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white"> {/* กำหนด sticky และ top-0 ให้แถวหัวข้อคงที่ */}
              <tr className="text-left text-gray-600">
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("name")}>
                  ชื่อของรางวัล {getIcon("name")}
                </th>

                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("successRate")}>
                  อัตราความสำเร็จ {getIcon("successRate")}
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
                  <td className="py-2 px-14 border-b">{task.successRate}</td>

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
        {/* gem */}
        <div className="flex justify-between items-center mb-2" ><h1 className="text-xl font-bold text-gray-800">แลกเปลี่ยน</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + เพิ่มกล่องสุ่ม
          </button></div>
        <div className="overflow-auto flex-grow  ">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white"> {/* กำหนด sticky และ top-0 ให้แถวหัวข้อคงที่ */}
              <tr className="text-left text-gray-600">
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("name")}>
                  ชื่อของรางวัล {getIcon("name")}
                </th>

                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("successRate")}>
                  อัตราความสำเร็จ {getIcon("successRate")}
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
                  <td className="py-2 px-14 border-b">{task.successRate}</td>

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

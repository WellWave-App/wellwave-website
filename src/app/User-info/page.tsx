"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface UserData {
  id: number;
  name: string;
  category: string;
  successRate: number;
  lastActive: string;
  status: string;
}

const usersData: UserData[] = [
  { id: 1, name: "ฟ้า [#UID450293]", category: "โรคอ้วน", successRate: 87, lastActive: "23 ตุลาคม 2567", status: "ใช้งานต่อเนื่อง 36 วัน" },
  { id: 2, name: "มะลิ [#UID450294]", category: "โรคเบาหวาน", successRate: 76, lastActive: "21 ตุลาคม 2567", status: "ไม่ได้ใช้งาน 14 วัน" },
  { id: 3, name: "ปอ [#UID450295]", category: "โรคอ้วน", successRate: 92, lastActive: "22 ตุลาคม 2567", status: "ใช้งานต่อเนื่อง 12 วัน" },
  { id: 4, name: "ดาว [#UID450296]", category: "โรคอ้วน", successRate: 68, lastActive: "20 ตุลาคม 2567", status: "ไม่ได้ใช้งาน 8 วัน" },
];

const TableWithSort = () => {
  const router = useRouter(); // ใช้ useRouter
  const [sortedUsers, setUsers] = useState(usersData);
  const [sortState, setSortState] = useState({
    column: null as keyof UserData | null,
    direction: 0, // 0: default, 1: ascending, 2: descending
  });

  const handleSort = (column: keyof UserData) => {
    setSortState((prevState) => {
      const newDirection = prevState.column === column ? (prevState.direction + 1) % 3 : 1;

      const sortedData = [...sortedUsers].sort((a, b) => {
        if (newDirection === 0) return 0;
        if (a[column] < b[column]) return newDirection === 1 ? -1 : 1;
        if (a[column] > b[column]) return newDirection === 1 ? 1 : -1;
        return 0;
      });

      setUsers(sortedData);
      return { column, direction: newDirection };
    });
  };

  const getIcon = (column: keyof UserData) => {
    if (sortState.column !== column) return <FaSort className="inline" />;
    if (sortState.direction === 1) return <FaSortUp className="inline" />;
    if (sortState.direction === 2) return <FaSortDown className="inline" />;
    return <FaSort className="inline" />;
  };

  // ฟังก์ชันสำหรับกดแล้วไปหน้า user detail
  const handleRowClick = (id: number) => {
    router.push(`/user/${id}`); // ไปที่ `/user/[id]`
  };

  return (
    <div className="p-6 top-0 px-28 py-6 bg-gray-100 min-h-screen font-sans">
      <div className="bg-white shadow rounded-lg p-6 mt-16 h-[600px] flex flex-col">
        <h1 className="text-xl font-bold text-gray-800 mb-4">ข้อมูลผู้ใช้ ทั้งหมด {usersData.length} คน</h1>

        <div className="overflow-auto flex-grow">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="py-2 px-4 border-b text-left cursor-pointer" onClick={() => handleSort("name")}>
                  ชื่อผู้ใช้ {getIcon("name")}
                </th>
                <th className="py-2 px-4 border-b text-left cursor-pointer" onClick={() => handleSort("category")}>
                  หมวดหมู่ {getIcon("category")}
                </th>
                <th className="py-2 px-4 border-b text-left cursor-pointer" onClick={() => handleSort("successRate")}>
                  อัตราความสำเร็จ {getIcon("successRate")}
                </th>
                <th className="py-2 px-4 border-b text-left cursor-pointer" onClick={() => handleSort("lastActive")}>
                  ใช้งานล่าสุด {getIcon("lastActive")}
                </th>
                <th className="py-2 px-4 border-b text-left cursor-pointer" onClick={() => handleSort("status")}>
                  สถานะ {getIcon("status")}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 transition"
                  onClick={() => handleRowClick(user.id)} // เมื่อกด ให้ไปที่หน้ารายละเอียด
                >
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.category}</td>
                  <td className="py-2 px-4 border-b">{user.successRate}%</td>
                  <td className="py-2 px-4 border-b">{user.lastActive}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`py-1 px-2 rounded-lg text-sm ${user.status.includes("ไม่ได้") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                        }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableWithSort;

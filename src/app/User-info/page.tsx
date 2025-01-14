import React from "react";

interface UserData {
  id: number;
  name: string;
  category: string;
  successRate: number;
  lastActive: string;
  status: string;
}

const users: UserData[] = [
  { id: 1, name: "ฟ้า [#UID450293]", category: "โรคอ้วน", successRate: 87, lastActive: "23 ตุลาคม 2567", status: "ใช้งานต่อเนื่อง 36 วัน" },
  { id: 2, name: "ฟ้า [#UID450293]", category: "โรคอ้วน", successRate: 87, lastActive: "23 ตุลาคม 2567", status: "ใช้งานต่อเนื่อง 36 วัน" },
  { id: 3, name: "ฟ้า [#UID450293]", category: "โรคอ้วน", successRate: 87, lastActive: "23 ตุลาคม 2567", status: "ไม่ได้ใช้งาน 14 วัน" },
  { id: 4, name: "ฟ้า [#UID450293]", category: "โรคอ้วน", successRate: 87, lastActive: "23 ตุลาคม 2567", status: "ไม่ได้ใช้งาน 8 วัน" },
];

const Home: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
<div className="bg-white shadow rounded-lg p-6 h-[600px] flex flex-col">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-lg font-semibold">ข้อมูลผู้ใช้ ทั้งหมด 120 คน</h1>
    
  </div>
  <div className="relative">
  <input
    type="text"
    placeholder="ค้นหา"
    className="rounded-lg bg-gray-100 px-10 py-2 w-full max-w-full focus:outline-none focus:ring focus:ring-blue-300"
  />
  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
      />
    </svg>
  </span>
</div>


  
  <div className="overflow-auto flex-grow mt-4">
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-left text-gray-600 bg-white">
          <th className="py-2 px-4 border-b">ชื่อผู้ใช้</th>
          <th className="py-2 px-4 border-b">หมวดหมู่</th>
          <th className="py-2 px-4 border-b">อัตราความสำเร็จ</th>
          <th className="py-2 px-4 border-b">ใช้งานล่าสุด</th>
          <th className="py-2 px-4 border-b">สถานะ</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            className={`text-sm text-gray-700`}
          >
            <td className="py-2 px-4 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                  OP
                </div>
                <span>{user.name}</span>
              </div>
            </td>
            <td className="py-2 px-4 border-b">{user.category}</td>
            <td className="py-2 px-4 border-b">
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 rounded-lg h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-lg"
                    style={{ width: `${user.successRate}%` }}
                  ></div>
                </div>
                <span>{user.successRate}%</span>
              </div>
            </td>
            <td className="py-2 px-4 border-b">{user.lastActive}</td>
            <td className="py-2 px-4 border-b">
              <span
                className={`py-1 px-2 rounded-lg text-sm ${
                  user.status.includes("ไม่ได้")
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
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
  <div className="flex justify-between items-center mt-auto">
    <p className="text-gray-600 text-sm">แสดง 1-10 จาก 120 รายการ</p>
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`py-1 px-3 rounded-lg ${
            page === 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {page}
        </button>
      ))}
      <button className="py-1 px-3 bg-gray-200 text-gray-600 rounded-lg">
        ...
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;

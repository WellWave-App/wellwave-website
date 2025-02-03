"use client";
import React, { useEffect, useState } from "react";

import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FileUpload from "../../components/upload";


interface Box {
  name: string;
  successRate: string;

}

const boxData: Box[] = [
  { name: "ของรางวัล", successRate: "50%" },
  { name: "ดีด", successRate: "10%" },
  { name: "กกก", successRate: "80%" },
  { name: "ของรางวัล", successRate: "70%" },
  { name: "ของรางวัล", successRate: "22%" },
];

interface Exchange {
  name: string;
  successRate: string;
  exchangeAmount: number;  // เก็บแค่ตัวเลข
  exchangeType: string;   // เก็บประเภท (EXP/Gem)
  exchangeCriteria?: string; // (optional) เก็บ string เต็ม เผื่อต้องใช้แสดงผล
}

const exchangeData: Exchange[] = [
  {
    name: "ของรางวัล A",
    successRate: "50%",
    exchangeAmount: 100,
    exchangeType: "EXP",
    exchangeCriteria: "100 EXP"
  },
  {
    name: "ของรางวัล B",
    successRate: "10%",
    exchangeAmount: 50,
    exchangeType: "EXP",
    exchangeCriteria: "50 EXP"
  }, {
    name: "ของรางวัล B",
    successRate: "10%",
    exchangeAmount: 50,
    exchangeType: "EXP",
    exchangeCriteria: "50 EXP"
  }, {
    name: "ของรางวัล ก",
    successRate: "10%",
    exchangeAmount: 50,
    exchangeType: "EXP",
    exchangeCriteria: "50 EXP"
  }, {
    name: "ของรางวัล d",
    successRate: "10%",
    exchangeAmount: 50,
    exchangeType: "EXP",
    exchangeCriteria: "622 EXP"
  },
  // ... อื่นๆ
];
const TaskPage = () => {
  const [activeTab, setActiveTab] = useState<"randomBox" | "exchange">("randomBox");
  const [sortedData, setSortedData] = useState<Box[] | Exchange[]>(boxData);
  const [sortConfig, setSortConfig] = useState<{ column: keyof Box | keyof Exchange | null; direction: number }>({
    column: null,
    direction: 0,
  });

  useEffect(() => {
    setSortedData(activeTab === "randomBox" ? boxData : exchangeData);
  }, [activeTab]);


  const handleSort = (column: keyof Box | keyof Exchange) => {
    setSortConfig((prev) => {
      const newDirection = prev.column === column ? (prev.direction + 1) % 3 : 1;

      const sorted = [...sortedData].sort((a, b) => {
        if (newDirection === 0) return 0;

        const aValue = a[column as keyof typeof a];
        const bValue = b[column as keyof typeof b];

        // จัดการกับ exchangeCriteria
        if (column === 'exchangeCriteria') {
          // แปลง string เป็นตัวเลข โดยตัดเอาแต่ตัวเลขออกมา
          const aNum = parseInt((aValue as string)?.match(/\d+/)?.[0] || '0');
          const bNum = parseInt((bValue as string)?.match(/\d+/)?.[0] || '0');
          return newDirection === 1 ? aNum - bNum : bNum - aNum;
        }

        // จัดการกับ successRate
        if (column === 'successRate') {
          const aNum = parseFloat(aValue as string);
          const bNum = parseFloat(bValue as string);
          return newDirection === 1 ? aNum - bNum : bNum - aNum;
        }

        // กรณีอื่นๆ ให้เรียงตาม string ตามปกติ
        return newDirection === 1
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      });

      setSortedData(sorted);
      return { column, direction: newDirection };
    });
  };

  const getIcon = (column: keyof Box | keyof Exchange) => {
    if (sortConfig.column !== column) return <FaSort className="inline" />;
    if (sortConfig.direction === 1) return <FaSortUp className="inline" />;
    if (sortConfig.direction === 2) return <FaSortDown className="inline" />;
    return <FaSort className="inline" />;
  };
  // const getSortIcon = (column: keyof Task) => {
  //   if (sortConfig.column !== column) return <UnfoldMore fontSize="small" />;
  //   return sortConfig.direction === 1 ? <ArrowUpward fontSize="small" /> : sortConfig.direction === 2 ? <ArrowDownward fontSize="small" /> : <UnfoldMore fontSize="small" />;
  // };
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isRandomBoxModalOpen, setIsRandomBoxModalOpen] = useState(false);
  const [isExchangeModalOpen, setIsExchangeModalOpen] = useState(false);
  return (
    <div className="top-0 px-28 py-6 bg-gray-100 h-screen font-sans">
      <div className="bg-white shadow rounded-lg p-6 mt-16 h-[600px] flex flex-col overflow-y-auto flex-grow">
        <p
          className="text-gray-600 text-sm pb-3 flex items-center cursor-pointer group"
          onClick={() => router.back()} // ย้อนกลับ
        >
          <span className="hover:underline inline-flex items-center group-hover:text-black">
            เพิ่มข้อมูล</span>
          <span style={{ margin: "0 8px" }}> &gt; </span>
          <Image
            src="/asset/reward.svg"
            alt="reward"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-black">ของรางวัล</span>

        </p>
        <div className="flex justify-between items-center mb-2" ><h1 className="text-xl font-bold text-gray-800">ของรางวัลทั้งหมด</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-28 h-28 bg-yellow-100 rounded-md flex items-center justify-center">
            <span className="text-yellow-500 text-xl font-bold">EXP</span>
          </div>
          <div className="w-28 h-28 bg-purple-100 rounded-md flex items-center justify-center">
            <span className="text-purple-500 text-xl font-bold">Gem</span>
          </div>
          <div className="w-28 h-28 bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-gray-500 text-xl font-bold">อื่นๆ</span>
          </div>
          <button className="w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold flex items-center justify-center hover:bg-blue-600" onClick={() => setIsOpen(true)}>
            +
          </button>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
              <div className="bg-white rounded-lg shadow max-w-[600px] w-full max-h-[600px] p-6 m-18">                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-semibold">เพิ่มของรางวัล</h2>
                  <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                    ✖
                  </button>
                </div>

                {/* Form ใน Popup */}
                <div className="mt-4 space-y-4  max-h-[500px] overflow-y-auto  scrollbar-custom pr-2 ">

                  <label className="block text-gray-700">รูปภาพของรางวัล</label>

                  <FileUpload />
                  <label className="block text-gray-700">ชื่อของรางวัล</label>
                  <input type="text" className="w-full border rounded p-2" placeholder="ชื่อของรางวัล" />



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
          )}
        </div>
        {/* แถบสลับระหว่าง "กล่องสุ่ม" และ "แลกเปลี่ยน" */}
        <div className="flex  mt-1  items-center">
          <div className="flex">
            <button
              className={`px-4 py-2 ${activeTab === "randomBox" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
              onClick={() => setActiveTab("randomBox")}
            >
              กล่องสุ่ม
            </button>
            <button
              className={`px-4 py-2 ml-4 ${activeTab === "exchange" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
              onClick={() => setActiveTab("exchange")}
            >
              แลกเปลี่ยน
            </button>
          </div>
          {/* ส่วนของปุ่มเพิ่ม */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-auto"
            onClick={() => activeTab === "randomBox"
              ? setIsRandomBoxModalOpen(true)
              : setIsExchangeModalOpen(true)}
          >
            + {activeTab === "randomBox" ? "เพิ่มเกณฑ์รางวัล" : "เพิ่มรายการแลกเปลี่ยน"}
          </button>

          {/* Modal สำหรับ Random Box */}
          {isRandomBoxModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow max-w-[600px] w-full max-h-[600px] p-6 m-18">
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-semibold">เพิ่มของรางวัล (Random Box)</h2>
                  <button onClick={() => setIsRandomBoxModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                    ✖
                  </button>
                </div>
                <div className="mt-4 space-y-4 max-h-[500px] overflow-y-auto scrollbar-custom pr-2">

                  <label className="block text-gray-700">ประเภทของรางวัล</label>
                  <select className="w-full border rounded p-2 ">
                    <option  >กล่องสุ่ม</option>
                    <option>แลกเปลี่ยน</option>
                  </select>
                  <label className="block text-gray-700">เกณฑ์การแลก</label>
                  <div className="flex gap-2">
                    <select className="border rounded p-2">
                      <option>Gem</option>
                      <option>EXP</option>
                    </select>
                    <input type="number" className=" w-full border rounded p-2 " placeholder="จำนวน" />
                  </div><label className="block text-gray-700">ของรางวัลที่จะได้รับ</label>
                  <div className="flex gap-2">
                    <select className="border rounded p-2">
                      <option>Gem</option>
                      <option>EXP</option>
                    </select>
                    <input type="number" className=" w-full border rounded p-2 " placeholder="จำนวน" />
                  </div>
                  <div className="flex-1">

                    <label className="block text-sm font-medium text-gray-700 mb-2">จำนวน</label>
                    <div className="flex items-center ">
                      <input
                        type="number"

                        min="1"
                        className="w-full rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <span className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">ชิ้น</span>
                    </div>
                  </div>



                  <div className="flex justify-end gap-2 mt-4">
                    <button onClick={() => setIsRandomBoxModalOpen(false)} className="px-4 py-2 text-gray-500 hover:text-gray-700">
                      ยกเลิก
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modal สำหรับ Exchange */}
          {isExchangeModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow max-w-[600px] w-full max-h-[600px] p-6 m-18">
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-semibold">เพิ่มรายการแลกเปลี่ยน</h2>
                  <button onClick={() => setIsExchangeModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                    ✖
                  </button>
                </div>

                <div className="mt-4 space-y-4 max-h-[500px] overflow-y-auto scrollbar-custom pr-2">
                  <label className="block text-gray-700">ประเภทของรางวัล</label>
                  <select className="w-full border rounded p-2 ">
                    <option  >กล่องสุ่ม</option>
                    <option>แลกเปลี่ยน</option>
                  </select>

                  <label className="block text-sm font-medium text-gray-700 mb-2">ของรางวัลที่จะได้รับ</label>
                  <div className="flex items-center ">
                    <input
                      type="number"

                      min="1"
                      className="w-full rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="rounded-r-md border border-l-0 border-gray-300 bg-white px-2 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">เปอร์เซนต์(%)</span>
                  </div>
                  <label className="block text-gray-700">ของรางวัลที่จะได้รับ</label>
                  <div className="flex gap-2">
                    <select className="border rounded p-2">
                      <option>Gem</option>
                      <option>EXP</option>
                    </select>
                    <input type="number" className=" w-full border rounded p-2 " placeholder="จำนวน" />
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <button onClick={() => setIsExchangeModalOpen(false)} className="px-4 py-2 text-gray-500 hover:text-gray-700">
                      ยกเลิก
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* แสดงเนื้อหาตามแท็บที่เลือก */}
        {activeTab === "randomBox" && (
          <div>
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-white">
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
        )}

        {activeTab === "exchange" && (
          <div>
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-white">
                <tr className="text-left text-gray-600">
                  <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("name")}>
                    ชื่อของรางวัล {getIcon("name")}
                  </th>
                  <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("exchangeCriteria")}>
                    เกณฑ์การแลก {getIcon("exchangeCriteria")}
                  </th>
                  <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("successRate")}>
                    อัตราความสำเร็จ {getIcon("successRate")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {(sortedData as Exchange[]).map((item, index) => (
                  <tr key={index} className="text-sm text-gray-700">
                    <td className="py-2 px-4 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">OP</div>
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-14 border-b">{item.exchangeCriteria}</td>
                    <td className="py-2 px-14 border-b">{item.successRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="pt-2 flex justify-between items-center ">
          <p className="text-gray-600 text-sm">แสดง 1-10 จาก {boxData.length} รายการ</p>
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

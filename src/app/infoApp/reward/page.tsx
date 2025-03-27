/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FileUpload from "../../components/upload";

interface ExpBooster {
  ITEM_ID: number;
  BOOST_MULTIPLIER: number;
  BOOST_DAYS: number;
}

interface GemExchange {
  ITEM_ID: number;
  GEM_REWARD: number;
}

interface MysteryBox {
  BOX_NAME: string;
  BOX_DESCRIPTION: string;
  PRICE_GEM: number;
  PRICE_EXP: number;
  IMAGE_URL: string | null;
  IS_ACTIVE: boolean;
}

interface Item {
  ITEM_ID: number;
  ITEM_TYPE: 'exp_boost' | 'gem_exchange';
  ITEM_NAME: string;
  DESCRIPTION: string;
  PRICE_GEM: number;
  PRICE_EXP: number;
  IMAGE_URL: string | null;
  RARITY: number;
  IS_ACTIVE: boolean;
  expBooster: ExpBooster | null;
  gemExchange: GemExchange | null;
  mysteryBoxes?: MysteryBox[];
}



const ShopItems = () => {
  const [activeTab, setActiveTab] = useState<"randomBox" | "exchange">("randomBox");
  const [duration, setDuration] = useState(0);
  const handleItemChange = (data: { itemType: string; gemValue?: number; boostPercentage?: number; boostDays?: number }) => {
    console.log("Selected Item Data:", data);
  };




  // Rest of the component remains the same



  const router = useRouter();
  const [isRandomBoxModalOpen, setIsRandomBoxModalOpen] = useState(false);
  const [isExchangeModalOpen, setIsExchangeModalOpen] = useState(false);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 1
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("accessToken");
      console.log("Token:", token);
      const url =
        activeTab === "randomBox"
          ? "http://localhost:3000/shop/items?filter=inBox&page=1&limit=10"
          : "http://localhost:3000/shop/items?filter=notInBox&page=1&limit=10";

      console.log("API Response:", url);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("API Response :", data);

        setItems(data.data || []);


      } catch (error) {
        setError('Failed to fetch items');

      };
    };

    fetchData();
  }, [activeTab]);
  useEffect(() => {
    console.log("Updated items:", items);
  }, [items]);

  const itemImages = {
    exp_boost: "/asset/boost.svg",
    gem_exchange: "/asset/Gem.svg",
    mystery_box: "/asset/boost.svg",
  };
  const Pagination = () => {
    const startItem = pagination.total > 0 ? (currentPage - 1) * 10 + 1 : 0;
    const endItem = Math.min(currentPage * 10, pagination.total);

    return (
      <footer className="fixed justify-between w-5/6 bottom-12 mb-2">
        <div className="flex justify-between items-center w-full">
          <p className="text-gray-600 text-sm">
            แสดง {startItem} - {endItem} จาก {pagination.total} รายการ
          </p>
          <div className="flex space-x-2 pr-4">
            {Array.from({ length: pagination.totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`py-1 px-3 rounded-lg transition-colors duration-200
                  ${currentPage === index + 1
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}

              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </footer>
    );
  };



  return (
    <div className="top-0 px-28 py-6 bg-gray-100 h-screen font-sans">
      <div className="bg-white shadow rounded-lg p-6 mt-16 h-[600px] flex flex-col ">
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
          <div className="w-36 h-36 rounded-xl flex flex-col items-center justify-center border border-gray-300">
            <Image
              src="/asset/EXP.svg"
              alt="EXP"
              width={64}
              height={64}
              className="mb-2" // เพิ่มช่องว่างระหว่างรูปภาพและข้อความ
            />
            <p >EXP</p>
          </div>
          <div className="w-36 h-36 rounded-xl flex flex-col items-center justify-center border border-gray-300">
            <Image
              src="/asset/GEM.svg"
              alt="GEM"
              width={56}
              height={56}
              className="mb-2" // เพิ่มช่องว่างระหว่างรูปภาพและข้อความ
            />
            <p >GEM</p>
          </div>
          <div className="w-36 h-36 rounded-xl flex flex-col items-center justify-center border border-gray-300">
            <Image
              src="/asset/boost.svg"
              alt="EXP"
              width={64}
              height={64}
              className="mb-2" // เพิ่มช่องว่างระหว่างรูปภาพและข้อความ
            />
            <p >Booster</p>
          </div>




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
              <div className="bg-white rounded-lg shadow max-w-[700px] w-full max-h-[600px] p-6 m-18">
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-semibold">เพิ่มเกณฑ์รางวัล</h2>
                  <button onClick={() => setIsRandomBoxModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                    ✖
                  </button>
                </div>
                <div className="mt-4 space-y-4 max-h-[500px] overflow-y-auto scrollbar-custom pr-2">


                  <label className="block text-gray-700">ของรางวัลที่จะได้รับ</label>
                  {/* <CustomSelect onChange={handleChange}
                  /> */}

                  <label className="block text-gray-700">ของรางวัลที่จะได้รับ</label>

                  <div className="flex items-center">
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      min="1"
                      className="flex-grow rounded-l-md border border-gray-300 text-center text-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="rounded-r-md border border-l-0 border-gray-300 bg-white px-5 py-1.5 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      เปอร์เซนต์ (%)
                    </span>
                  </div>


                  <div className="flex justify-end gap-2 mt-4">
                    <button onClick={() => setIsRandomBoxModalOpen(false)} className="px-4 py-2 text-gray-500 hover:text-gray-700">
                      ยกเลิก
                    </button>
                    <button
                      onClick={handleConfirm}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
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
              <div className="bg-white rounded-lg shadow max-w-[700px] w-full max-h-[900px] p-6 m-18">
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-semibold">เพิ่มของรางวัล (Random Box)</h2>
                  <button onClick={() => setIsExchangeModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                    ✖
                  </button>
                </div>
                <div className="mt-4 space-y-4 max-h-[900px] overflow-y-auto scrollbar-custom pr-2">

                  <label className="block text-gray-700">ของรางวัลที่จะได้รับ</label>
                  {/* <CustomSelect onChange={handleItemChange} /> */}
                  <label className="block text-gray-700">เกณฑ์การแลก</label>
                  <div className="flex gap-2">
                    <div className="flex items-center rounded p-2 border w-auto flex-shrink-0">
                      <Image
                        src="/asset/EXP.svg"
                        alt="EXP"
                        width={24}
                        height={24}
                        className="mr-2" // เพิ่มช่องว่างระหว่างรูปภาพและข้อความ
                      />
                      <p>EXP</p>
                    </div>

                    <input type="number" className="w-full border rounded p-2" placeholder="จำนวน" />
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
            <table className="w-full border-collapse overflow-y-auto flex-grow">
              <thead className="sticky top-0 bg-white">
                <tr className="text-left text-gray-600">
                  <th className="py-2 px-4 border-b cursor-pointer" >
                    ของรางวัลที่จะได้รับ
                  </th>
                  <th className="py-2 px-4 border-b cursor-pointer" >
                    อัตราการเกิด
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(items) &&
                  items.map((item) => (
                    item.mysteryBoxes?.map((box, index) => (
                      <tr key={`${item.ITEM_ID}-${index}`} className="text-sm text-gray-700">
                        <td className="py-2 px-4 border-b">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-3">



                              <Image src={itemImages[item.ITEM_TYPE] || "/asset/boost.svg"} alt={item.ITEM_TYPE} width={24} height={24} />


                              <span>{item.ITEM_TYPE === 'gem_exchange' && (
                                <p>{item.gemExchange?.GEM_REWARD} Gem</p>
                              )}
                                {item.ITEM_TYPE === 'exp_boost' && (
                                  <p>เพิ่ม EXP {item.expBooster?.BOOST_MULTIPLIER} เท่า เป็นจำนวน  {item.expBooster?.BOOST_DAYS} วัน</p>
                                )}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-2 px-14 border-b">{(item.RARITY * 100).toFixed(0)}%</td>
                        {/* <td className="py-2 px-14 border-b">{box.BOX_NAME}</td> */}
                        {/* <td className="py-2 px-14 border-b">{box.PRICE_GEM} Gems</td> */}
                      </tr>
                    ))
                  ))}




              </tbody>
            </table>
          </div>
        )}

        {activeTab === "exchange" && (
          <div>
            <table className="w-full border-collapse overflow-y-auto flex-grow">
              <thead className="sticky top-0 bg-white">
                <tr className="text-left text-gray-600">
                  <th className="py-2 px-4 border-b cursor-pointer" >
                    ของรางวัลที่จะได้รับ
                  </th>
                  <th className="py-2 px-4 border-b cursor-pointer" >
                    เกณฑ์การแลกเปลี่ยน
                  </th>

                </tr>
              </thead>
              <tbody>
                {Array.isArray(items) &&
                  items.map((item) => (
                    <tr key={item.ITEM_ID} className="text-sm text-gray-700">
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center space-x-3">



                          <Image src={itemImages[item.ITEM_TYPE] || "/asset/EXP.svg"} alt={item.ITEM_TYPE} width={24} height={24} />


                          <span>{item.PRICE_EXP}</span>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center space-x-2">
                          {item.PRICE_EXP > 0 ? (
                            <>
                              <Image src="/asset/EXP.svg" alt="EXP" width={24} height={24} />
                              <span>{item.PRICE_EXP} exp</span>
                            </>
                          ) : (
                            <>
                              <Image src="/asset/GEM.svg" alt="GEM" width={24} height={24} />
                              <span>{item.PRICE_GEM} Gems</span>
                            </>
                          )}
                        </div>

                      </td>

                    </tr>
                  ))}


              </tbody>
            </table>
          </div>
        )}
        <Pagination />

      </div>
    </div>
  );
};

export default ShopItems;

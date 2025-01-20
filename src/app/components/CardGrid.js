import Image from "next/image";
import { useRouter } from "next/navigation"; // แก้จาก "next/router"

export default function CardGrid() {
  const router = useRouter();

  const handleCardClick = (cardName) => {
    // นำทางไปยังหน้าตามการ์ดที่คลิก
    router.push(`/infoApp/${cardName}`);
  };
  return (
    <div className="container mx-auto p-6  flex flex-col font-sans text-black">
      {/* Grid Layout */}
      <div className="grid grid-cols-[repeat(3,_minmax(250px,_1fr))] gap-4">
        {" "}
        {/* การ์ดภารกิจ (ยาวลงมาเต็มพื้นที่ตามแถว) */}
        <div
          className="bg-white rounded-lg shadow-md p-6 row-span-2 flex flex-col space-y-4 h-[610px]  relative cursor-pointer"
          onClick={() => handleCardClick("mission")}
        >
          <h2 className="text-xl font-bold flex justify-start items-center mb-4 border-b-2 border-gray-300 pb-2 ">
            <Image
              src="/asset/fire.svg"
              alt="fire"
              width={32}
              height={32}
              className="mr-3"
            />
            <span>ภารกิจ</span>
            <span className="text-black text-lg ml-auto ">35</span>
          </h2>

          <ul className="space-y-2  flex flex-col justify-start">
            <li className="flex justify-between">
              <span className="text-gray-600">จำนวน</span>
            </li>
            <li className="flex justify-between">
              <span>ภารกิจประจำวัน</span>
              <strong className="text-right">35</strong>
            </li>
            <li className="flex justify-between">
              <span>ภารกิจท้าทาย</span>
              <strong className="text-right">35</strong>
            </li>
            <li className="flex justify-between pb-6 border-b-2 border-gray-300">
              <span>เควส</span>
              <strong className="text-right">35</strong>
            </li>
          </ul>

          <div className="mt-4 space-y-2 ">
            <li className="flex justify-between">
              <span className="text-gray-600">ล่าสุด</span>
            </li>
            <p className="flex justify-between">
              ชื่อภารกิจ
              <span className="text-blue-500 bg-blue-200 px-2 py-1 rounded ml-auto">
                หมวดหมู่
              </span>
            </p>
            <p className="flex justify-between">
              ชื่อภารกิจ
              <span className="text-blue-500 bg-blue-200 px-2 py-1 rounded ml-auto">
                หมวดหมู่
              </span>
            </p>

            <p className="flex justify-between">
              ชื่อภารกิจ
              <span className="text-blue-500 bg-blue-200 px-2 py-1 rounded ml-auto">
                หมวดหมู่
              </span>
            </p>
            <p className="flex justify-between">
              ชื่อภารกิจ
              <span className="text-blue-500 bg-blue-200 px-2 py-1 rounded ml-auto">
                หมวดหมู่
              </span>
            </p>
            <p className="flex justify-between">
              ชื่อภารกิจ
              <span className="text-blue-500 bg-blue-200 px-2 py-1 rounded ml-auto">
                หมวดหมู่
              </span>
            </p>
          </div>

          <p className="absolute bottom-5 right-0 mb-4 mr-4 text-sm text-gray-500">
            ดูเพิ่มเติม &gt;
          </p>
        </div>
        {/* Card 2 - บทความ */}
        <div
          className="bg-white rounded-lg shadow-md p-6 relative cursor-pointer"
          onClick={() => handleCardClick("article")}
        >
          <h2 className="text-xl font-bold flex justify-start items-center mb-4 border-b-2 border-gray-300 pb-2">
            <Image
              src="/asset/article.svg" // ใช้ path ที่สัมพันธ์กับโฟลเดอร์ public
              alt="fire"
              width={32}
              height={32}
              className="mr-3"
            />
            บทความ <span className="text-black text-lg ml-auto">35</span>
          </h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-600">จำนวน</span>
            </li>
            <li className="flex justify-between">
              โรคเบาหวาน <strong className="text-right">35</strong>
            </li>
            <li className="flex justify-between">
              โรคความดันโลหิตสูง <strong className="text-right">35</strong>
            </li>
            <li className="flex justify-between">
              โรคไขมันในเลือดสูง <strong className="text-right">35</strong>
            </li>
            <li className="flex justify-between">
              โรคอ้วน <strong className="text-right">35</strong>
            </li>
            <li className="flex justify-between">
              อื่นๆ <strong className="text-right">35</strong>
            </li>
          </ul>

          <p className="absolute bottom-0 right-0 mb-4 mr-4 text-sm text-gray-500">
            ดูเพิ่มเติม &gt;
          </p>
        </div>
        {/* Card 3 - ความสำเร็จ */}
        <div
          className="bg-white rounded-lg shadow-md p-6 relative cursor-pointer"
          onClick={() => handleCardClick("achievement")}
        >
          <h2 className="text-xl font-bold flex justify-start items-center mb-4 border-b-2 border-gray-300 pb-2">
            <Image
              src="/asset/achieve.svg" // ใช้ path ที่สัมพันธ์กับโฟลเดอร์ public
              alt="fire"
              width={32}
              height={32}
              className="mr-3"
            />
            ความสำเร็จ <span className="text-black text-lg ml-auto">35</span>
          </h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-600">จำนวน</span>
            </li>
            <li className="flex justify-between">
              เหรียญรางวัล <strong className="text-right">35</strong>
            </li>
            <li className="flex justify-between">
              สถิติ <strong className="text-right">35</strong>
            </li>
          </ul>
          <p className="absolute bottom-0 right-0 mb-4 mr-4 text-sm text-gray-500">
            ดูเพิ่มเติม &gt;
          </p>
        </div>
        {/* Card 4 - ของรางวัล */}
        <div
          className="bg-white rounded-lg shadow-md p-6 col-span-2 relative cursor-pointer"
          onClick={() => handleCardClick("reward")}
        >
          <h2 className="text-xl font-bold flex justify-start items-center mb-4 border-b-2 border-gray-300 pb-2">
            <Image
              src="/asset/reward.svg" // ใช้ path ที่สัมพันธ์กับโฟลเดอร์ public
              alt="fire"
              width={32}
              height={32}
              className="mr-3"
            />
            ของรางวัล <span className="text-black text-lg ml-auto">35</span>
          </h2>
          <ul className=" space-y-2">
            <li className="flex justify-between">
              <span className=" text-gray-600">จำนวน</span>
            </li>
            <li className="flex justify-between">
              กล่องสุ่ม <strong className="text-right">35</strong>
            </li>
            <li className="flex justify-between">
              แลกรางวัล <strong className="text-right">35</strong>
            </li>
          </ul>
          <p className="absolute bottom-0 right-0 mb-4 mr-4 text-sm text-gray-500">
            ดูเพิ่มเติม &gt;
          </p>
        </div>
      </div>
    </div>
  );
}

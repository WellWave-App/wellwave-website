export default function CardGrid() {
  return (
    <div className="container mx-auto p-6  flex flex-col">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow overflow-hidden">
        {/* การ์ดภารกิจ (ยาวลงมาเต็มพื้นที่ตามแถว) */}
        <div className="bg-white rounded-lg shadow-md p-6 row-span-2">
          <h2 className="text-lg font-bold flex items-center mb-4">
            ภารกิจ{" "}
            <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
              35
            </span>
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              ภารกิจประจำวัน <strong>35</strong>
            </li>
            <li>
              ภารกิจท้าทาย <strong>35</strong>
            </li>
            <li>
              เควส <strong>35</strong>
            </li>
          </ul>
          <div className="mt-4 space-y-2">
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
            <p>
              ชื่อภารกิจ <span className="text-blue-500">หมวดหมู่</span>
            </p>
          </div>
          <p className="mt-6 text-right text-sm text-gray-500">
            ดูเพิ่มเติม &gt;
          </p>
        </div>

        {/* Card 2 - บทความ */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold flex items-center mb-4">
            บทความ{" "}
            <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
              40
            </span>
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              โรคเบาหวาน <strong>35</strong>
            </li>
            <li>
              โรคความดันโลหิตสูง <strong>35</strong>
            </li>
            <li>
              โรคไขมันในเลือดสูง <strong>35</strong>
            </li>
          </ul>
        </div>

        {/* Card 3 - ความสำเร็จ */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold flex items-center mb-4">
            ความสำเร็จ{" "}
            <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
              53
            </span>
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              เหรียญรางวัล <strong>35</strong>
            </li>
            <li>
              สถิติ <strong>35</strong>
            </li>
          </ul>
        </div>

        {/* Card 4 - ของรางวัล */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-lg font-bold flex items-center mb-4">
            ของรางวัล{" "}
            <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
              15
            </span>
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              กล่องสุ่ม <strong>35</strong>
            </li>
            <li>
              แลกรางวัล <strong>35</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

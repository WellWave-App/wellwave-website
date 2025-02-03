// import React from "react";
"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProgressCircle from "../../components/widget/progressCircle";
import LineChartSample2 from "../../components/widget/lineChart";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

// import { useRouter } from "next/navigation";
interface Task {
    name: string;
    category: string;
    reward: number;
    successRate: string;
    participants: string;
    status: string;
}
const logsData = [
    { date: "2023-04-01", value: 70 },
    { date: "2023-04-02", value: 10 },
    { date: "2023-04-03", value: 52 },
];

const taskData: Task[] = [
    { name: "ภารกิจ", category: "ออกกำลังกาย", reward: 150, successRate: "50%", participants: "10/99 คน", status: "เฉยๆ" },
    { name: "ภารกิจ", category: "ออกกำลังกาย", reward: 200, successRate: "75%", participants: "20/99 คน", status: "สดใส" },
    { name: "ภารกิจ", category: "พักผ่อน", reward: 300, successRate: "90%", participants: "50/99 คน", status: "ท้อแท้" },
    { name: "ภารกิจ", category: "พักผ่อน", reward: 300, successRate: "90%", participants: "50/99 คน", status: "กดดัน" },
    { name: "ภารกิจ", category: "พักผ่อน", reward: 300, successRate: "90%", participants: "50/99 คน", status: "พอใจ" },
];
const UserDetailPage = ({ params }: { params: { id: string } }) => {
    // const router = useRouter();
    // const [activeTab, setActiveTab] = useState<"randomBox" | "exchange">("randomBox");
    // const articles = Array(5).fill({
    //     title: 'Title',
    //     views: 30,
    //     description: 'รายละเอียดเนื้อหาของบทความแบบย่อๆ เพื่อแสดงในรายการบทความ...',
    // });
    // Mock data
    const user = {
        id: params.id,
        name: 'ฟ้า',
        email: 'fahfah123456@gmail.com',
        password: 'Hahahaa',
        username: 'flsa@dksl5dv45s',
        gender: 'หญิง',
        age: 22,
        height: 153,
        weight: 53,
        scores: {
            points: 150,
            gems: 150,
            level: 16,
        },
        achievements: [
            { title: 'เหรียญทอง', level: 1 },
            { title: 'เหรียญเงิน', level: 2 },
            { title: 'เหรียญทองแดง', level: 3 },
        ],
        healthData: {
            steps: 153,
            bloodPressure: 153,
            cholesterolHDL: 53,
            cholesterolLDL: 53,
        },
        risks: ['โรคเบาหวาน', 'โรคความดันโลหิตสูง', 'โรคอ้วน', 'โรคไขมันในเลือดสูง'],
    };

    //     const getIcon = (column: keyof Task) => {
    //         if (sortConfig.column !== column) return <FaSort className="inline" />;
    //         if (sortConfig.direction === 1) return <FaSortUp className="inline" />;
    //         if (sortConfig.direction === 2) return <FaSortDown className="inline" />;
    //         return <FaSort className="inline" />;
    //       };
    // //   const [amount, setAmount] = useState(1);
    // //    const [duration, setDuration] = useState(3);
    //    const [sortedData, setSortedData] = useState<Task[]>(taskData);
    //    const [sortConfig, setSortConfig] = useState<{ column: keyof Task | null; direction: number }>({
    //      column: null,
    //      direction: 0, // 0: default, 1: ascending, 2: descending
    //    });
    // //    const router = useRouter();
    // //    const [isOpen, setIsOpen] = useState(false);
    //    const handleSort = (column: keyof Task) => {
    //      // กำหนดลำดับที่ต้องการสำหรับความรู้สึก
    //      const feelingsOrder = ['กดดัน', 'ท้อแท้', 'เฉยๆ', 'พอใจ', 'สดใส'];

    //      setSortConfig((prev) => {
    //        const newDirection = prev.column === column ? (prev.direction + 1) % 3 : 1;
    //        const sorted = [...sortedData].sort((a, b) => {
    //          if (newDirection === 0) return 0; // Default (No Sort)
    //          if (typeof a[column] === "number") {
    //            return newDirection === 1
    //              ? (a[column] as number) - (b[column] as number)
    //              : (b[column] as number) - (a[column] as number);
    //          }

    //          // กรณีที่ column เป็นความรู้สึก
    //          if (column === "status") {
    //            const indexA = feelingsOrder.indexOf(a[column]);
    //            const indexB = feelingsOrder.indexOf(b[column]);

    //            return newDirection === 1
    //              ? indexA - indexB
    //              : indexB - indexA;
    //          }

    //          // สำหรับกรณีอื่น ๆ ใช้ localeCompare
    //          return newDirection === 1
    //            ? String(a[column]).localeCompare(String(b[column]), 'th')
    //            : String(b[column]).localeCompare(String(a[column]), 'th');
    //        });

    //        setSortedData(sorted);
    //        return { column, direction: newDirection };
    //      });
    //    };

    //   return (
    //     <div className="container mx-auto p-6">
    //       <h1 className="text-xl font-bold">ข้อมูลผู้ใช้ #{user.id}</h1>
    //       <div className="grid grid-cols-2 gap-6">
    //         <div className="bg-white shadow-md p-6 rounded-lg">
    //           <h2 className="text-lg font-semibold">รายละเอียดผู้ใช้</h2>
    //           <p><strong>ชื่อ:</strong> {user.name}</p>
    //           <p><strong>Email:</strong> {user.email}</p>
    //           <p><strong>ชื่อผู้ใช้:</strong> {user.username}</p>
    //           <p><strong>เพศ:</strong> {user.gender}</p>
    //           <p><strong>อายุ:</strong> {user.age} ปี</p>
    //           <p><strong>ส่วนสูง:</strong> {user.height} ซม.</p>
    //           <p><strong>น้ำหนัก:</strong> {user.weight} กก.</p>
    //         </div>
    //         <div className="bg-white shadow-md p-6 rounded-lg">
    //           <h2 className="text-lg font-semibold">คะแนนและสะสม</h2>
    //           <p><strong>คะแนน:</strong> {user.scores.points}</p>
    //           <p><strong>อัญมณี:</strong> {user.scores.gems}</p>
    //           <p><strong>ระดับปัจจุบัน:</strong> {user.scores.level}</p>
    //         </div>
    //       </div>
    //       <div className="bg-white shadow-md p-6 rounded-lg mt-6">
    //         <h2 className="text-lg font-semibold">ภาวะเสี่ยง</h2>
    //         <div className="flex gap-2">
    //           {user.risks.map((risk, index) => (
    //             <span key={index} className="px-3 py-1 bg-red-200 rounded-full">{risk}</span>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="bg-white shadow-md p-6 rounded-lg mt-6">
    //         <h2 className="text-lg font-semibold">รางวัล</h2>
    //         <div className="flex gap-4">
    //           {user.achievements.map((achieve, index) => (
    //             <span key={index} className="px-4 py-2 bg-gray-300 rounded-lg">{achieve.title}</span>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };

    // const [amount, setAmount] = useState(1);
    //   const [duration, setDuration] = useState(3);
    const [sortedData, setSortedData] = useState<Task[]>(taskData);
    const [sortConfig, setSortConfig] = useState<{ column: keyof Task | null; direction: number }>({
        column: null,
        direction: 0, // 0: default, 1: ascending, 2: descending
    });
    //   const router = useRouter();
    //   const [isOpen, setIsOpen] = useState(false);
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


            <div className="rounded-lg p-6 mt-16 min-h-[200px] bg-white shadow-md">
                <p className="text-gray-600 text-sm pb-3 flex items-center cursor-pointer group">
                    <span className="hover:underline inline-flex items-center group-hover:text-black">
                        เพิ่มข้อมูล
                    </span>
                    <span style={{ margin: "0 8px" }}> &gt; </span>
                    <Image
                        src="/asset/article.svg"
                        alt="article"
                        width={16}
                        height={16}
                        className="mr-1"
                    />
                    <span className="text-black">ชื่อ [#UID45029{user.id}]</span>
                </p>

                <div className="grid grid-cols-2 gap-4">
                    {/* Content 1 (ครึ่งซ้าย) */}
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col mt-2 space-y-2 relative cursor-pointer border-2 border-gray-100">
                        <h2 className="text-lg font-semibold">รายละเอียดผู้ใช้</h2>
                        <div className="flex items-center space-x-3 pb-3 ">
                            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold mr-4">
                                OP
                            </div>
                            <div className="flex flex-col flex-grow">
                                <span className="text-xl font-bold">{user.name}</span>
                                <p>#UID45029{user.id}</p>
                            </div>
                            <span className="py-0.5 px-3 rounded text-sm border bg-green-100 text-green-500 border-green-500">
                                ใช้งานต่อเนื่อง 36 วัน
                            </span>
                        </div>
                        <div className="pb-2">
                            <table className="w-[150px]">
                                <tbody>
                                    <tr>
                                        <td className="text-gray-700">Email</td>
                                        <td className="pl-1 text-left">: {user.age}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-700">Password</td>
                                        <td className="pl-1 text-left">: {user.height}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center border-t pb-3 "></div>
                        <div className="grid grid-cols-2 gap-x-8 pb-3 ">
                            <div>
                                <p><span className="text-gray-700 mr-4">เพศ</span>: {user.gender}</p>
                                <p><span className="text-gray-700 mr-4">อายุ</span>: {user.age} ปี</p>
                            </div>
                            <div>
                                <p><span className="text-gray-700 mr-4">ส่วนสูง</span>: {user.height} ซม.</p>
                                <p><span className="text-gray-700 mr-4">น้ำหนัก</span>: {user.weight} กก.</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-t pb-3"></div>
                        <div className="pb-3">

                            <table className="w-[400px]">
                                <tbody>
                                    <tr>
                                        <td className="text-gray-700 pr-4">รอบเอว</td>
                                        <td className="pl-1">: {user.age} ซม.</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-700 pr-4">ความดันโลหิตขณะบีบตัว</td>
                                        <td className="pl-1">: {user.height} มิลลิเมตรปรอท</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-700 pr-4">ความดันโลหิตขณะคลายตัว</td>
                                        <td className="pl-1">: {user.weight} มิลลิเมตรปรอท</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-700 pr-4">คอเลสเตอรอลชนิดดี (HDL)</td>
                                        <td className="pl-1">: {user.weight} มก./ดล.</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-700 pr-4">คอเลสเตอรอลชนิดไม่ดี (LDL)</td>
                                        <td className="pl-1">: {user.weight} มก./ดล.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center border-t pb-3"></div>
                        <div className="flex space-x-2">
                            <div className="py-0.5 px-3 rounded  bg-green-100 text-green-500">โรคเบาหวาน</div>
                            <div className="py-0.5 px-3 rounded  bg-green-100 text-green-500">โรคความดันโลหิตสูง</div>
                            <div className="py-0.5 px-3 rounded  bg-green-100 text-green-500">โรคอ้วน</div>
                            <div className="py-0.5 px-3 rounded  bg-green-100 text-green-500">โรคไขมันในเลือดสูง</div>
                        </div>



                    </div>

                    {/* Content 2, 3, 4 (ครึ่งขวา แบ่งเป็น 3 ส่วนแนวตั้ง) */}
                    <div className="flex mt-2 flex-col gap-4">
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col border-2 border-gray-100 h-fit">
                            <h2 className="text-lg font-semibold  mb-4">คะแนนสะสม</h2>
                            <div className="pl-2 flex space-x-2 justify-start items-center">
                                <Image
                                    src="/asset/EXP.svg"
                                    alt="EXP"
                                    width={32}
                                    height={32}
                                    className="mr-1"
                                />
                                <p className="pr-3">150</p>
                                <Image
                                    src="/asset/Gem.svg"
                                    alt="Gem"
                                    width={32}
                                    height={32}
                                    className="mr-1"
                                />
                                <p className="pr-3">150</p>
                                <div className="flex justify-between items-center border-l pr-2"></div>
                                <Image
                                    src="/asset/daimonLeague.svg"
                                    alt="daimonLeague"
                                    width={32}
                                    height={32}
                                    className="mr-1"
                                />
                                <p>ระดับไดมอนด์ อันดับที่ 16</p>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg shadow p-6 flex flex-col border-2 border-gray-100">
                            <h2 className="text-lg font-semibold mb-4">ความสำเร็จภารกิจ</h2>
                            <div className="grid grid-cols-3 gap-4 space-x-2 ">
                                <div className="place-items-center">
                                    <ProgressCircle percentage={87} />
                                </div>

                                <div>
                                    <p className="text-gray-700 text-left">ประเภทภารกิจ</p>
                                    <div className="relative pl-5 flex justify-between items-center">
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl">•</span>
                                        <p className="ml-1">ภารกิจประจำวัน</p>
                                        <span className="text-right">80 %</span>
                                    </div>
                                    <div className="relative pl-5 flex justify-between items-center">
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl">•</span>
                                        <p className="ml-1">ภารกิจปรับนิสัย</p>
                                        <span className="text-right">80 %</span>
                                    </div>
                                    <div className="relative pl-5 flex justify-between items-center">
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl">•</span>
                                        <p className="ml-1">เควส</p>
                                        <span className="text-right">80 %</span>
                                    </div>
                                </div>


                                <div>
                                    <p className="text-gray-700 text-left">หมวดหมู่</p>
                                    <div className="relative pl-5 flex justify-between items-center">
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl">•</span>
                                        <p className="ml-1">ภารกิจประจำวัน</p>
                                        <span className="text-right">80 %</span>
                                    </div>
                                    <div className="relative pl-5 flex justify-between items-center">
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl">•</span>
                                        <p className="ml-1">ภารกิจปรับนิสัย</p>
                                        <span className="text-right">80 %</span>
                                    </div>
                                    <div className="relative pl-5 flex justify-between items-center">
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl">•</span>
                                        <p className="ml-1">เควส</p>
                                        <span className="text-right">80 %</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col border-2 border-gray-100">
                            <h2 className="text-lg font-semibold mb-4">ความสำเร็จ</h2>
                            <div className="grid grid-cols-5 gap-4 space-x-2 ">
                                <div className="place-items-center">
                                    <Image
                                        src="/asset/achievement/one.svg"
                                        alt="daimonLeague"
                                        width={64}
                                        height={64}
                                        className="mr-1"
                                    />
                                    <p className="pt-4">ชื่อรางวัล</p></div>
                                <div className="place-items-center">
                                    <Image
                                        src="/asset/achievement/one.svg"
                                        alt="daimonLeague"
                                        width={64}
                                        height={64}
                                        className="mr-1"
                                    />
                                    <p className="pt-4">ชื่อรางวัล</p></div>
                                <div className="place-items-center">
                                    <Image
                                        src="/asset/achievement/one.svg"
                                        alt="daimonLeague"
                                        width={64}
                                        height={64}
                                        className="mr-1"
                                    />
                                    <p className="pt-4">ชื่อรางวัล</p></div>
                                <div className="place-items-center">
                                    <Image
                                        src="/asset/achievement/one.svg"
                                        alt="daimonLeague"
                                        width={64}
                                        height={64}
                                        className="mr-1"
                                    />
                                    <p className="pt-4">ชื่อรางวัล</p></div>
                                <div className="place-items-center">
                                    <Image
                                        src="/asset/achievement/one.svg"
                                        alt="daimonLeague"
                                        width={64}
                                        height={64}
                                        className="mr-1"
                                    />
                                    <p className="pt-4">ชื่อรางวัล</p></div>

                            </div>
                        </div>
                    </div>



                </div>
                <h1 className="text-l font-bold mt-6">ประวัติสุขภาพ </h1>
                <div className="grid grid-cols-3 gap-4 mt-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="bg-white p-4 w-[360px] h-[300px] flex flex-col items-center rounded-lg shadow border-2 border-gray-100 text-left">
                            <p className="self-start w-full font-semibold text-gray-600">รอบเอว</p>
                            <LineChartSample2 logType={`logType-${index}`} logs={logsData} selectedPeriod={'selectedPeriod'} />
                        </div>

                    ))}
                </div>
                <h1 className="text-l font-bold mt-6">ประวัติทำภารกิจ </h1>
                <div className="mt-6"><table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-white">
                        <tr className="text-left text-gray-600">
                            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("name")}>
                                วันเดือนปี {getIcon("name")}
                            </th>
                            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("category")}>
                                ประเภทภารกิจ {getIcon("category")}
                            </th>
                            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("reward")}>
                                หมวดหมู่ {getIcon("reward")}
                            </th>
                            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("successRate")}>
                                รายละเอียด {getIcon("successRate")}
                            </th>
                            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("status")}>
                                สถานะ {getIcon("status")}
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

                <h1 className="text-l font-bold mt-6">ประวัติการบันทึกสุขภาพ</h1>
                <div className="mt-6"><table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-white">
                        <tr className="text-left text-gray-600">
                            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("name")}>
                                วันเดือนปี {getIcon("name")}
                            </th>
                            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("category")}>
                                ประเภทการบันทึก {getIcon("category")}
                            </th>

                            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("successRate")}>
                                รายละเอียด {getIcon("successRate")}
                            </th>
                            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort("status")}>
                                สถานะ {getIcon("status")}
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
                                <td className="py-2 px-14 border-b">{task.successRate}</td>
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
            </div>

        </div >

    );
};
export default UserDetailPage;

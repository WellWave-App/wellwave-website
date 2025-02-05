
"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FileUpload from "../../components/upload";

interface Disease {
  DISEASE_ID: number;
  TH_NAME: string;
  ENG_NAME: string;
}

interface Article {
  AID: number;
  TOPIC: string;
  ESTIMATED_READ_TIME: number;
  THUMBNAIL_URL: string;
  VIEW_COUNT: number;
  PUBLISH_DATE: string;
  diseases: Disease[];
}
const diseaseTabs = [
  { id: null, name: "ทั้งหมด" },
  { id: 1, name: "โรคเบาหวาน" },
  { id: 2, name: "โรคความดันโลหิตสูง" },
  { id: 3, name: "โรคไขมันในเลือดสูง" },
  { id: 4, name: "โรคอ้วน" },
  { id: 5, name: "อื่น ๆ" },
];
const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]); // Use the Article type here
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalArticles, setTotalArticles] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<number | null>(null);


  // Fetch articles from the API
  const fetchArticles = async (page: number) => {
    try {
      const response = await fetch(`http://localhost:3001/article/search?page=${page}&limit=10`);
      const data = await response.json();

      if (response.ok) {
        setArticles(data.data);
        setTotalArticles(data.meta.total);
        setLoading(false);
      } else {
        setError("Failed to fetch articles.");
        setLoading(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Error fetching articles.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const filteredArticles = selectedDiseaseId
    ? articles.filter((article) =>
      article.diseases.some((disease) => disease.DISEASE_ID === selectedDiseaseId)
    )
    : articles;

  return (
    <div className="top-0 px-28 py-6 bg-gray-100 min-h-screen font-sans">
      <div className="rounded-lg p-6 mt-16 h-[600px] bg-white shadow-md">
        <p
          className="text-gray-600 text-sm pb-2 flex items-center cursor-pointer group"
          onClick={() => router.back()} // Go back
        >
          <span className="hover:underline inline-flex items-center group-hover:text-black ">
            เพิ่มข้อมูล</span>
          <span style={{ margin: "0 8px" }}> &gt; </span>
          <Image
            src="/asset/article.svg"
            alt="article"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="text-black">บทความ</span>
        </p>

        <div className="flex justify-between items-center ">
          <h1 className="text-xl font-bold text-gray-800 ">
            บทความ ทั้งหมด {totalArticles} บทความ
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setIsOpen(true)}>
            + เพิ่มบทความ
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
            <div className="bg-white rounded-lg shadow max-w-[600px] w-full max-h-[600px] p-6 m-18">
              {/* Popup Header */}
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-lg font-semibold">เพิ่มบทความ</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                  ✖
                </button>
              </div>

              {/* Form Inside Popup */}
              <div className="mt-4 space-y-4  max-h-[500px] overflow-y-auto scrollbar-custom pr-2 ">
                <label className="block text-gray-700">ชื่อบทความ</label>
                <input type="text" className="w-full border rounded p-2" placeholder="ชื่อบทความ" />
                <label className="block text-gray-700">ประเภทบทความ</label>
                <select className="w-full border rounded p-2 ">
                  <option>บทความปรับนิสัย</option>
                  <option>เควส</option>
                </select>

                <label className="block text-gray-700">รายละเอียด</label>
                <input type="text" className="w-full border rounded p-2" placeholder="รายละเอียด" />

                <label className="block text-gray-700">รูปภาพบทความ</label>
                <FileUpload />

                {/* Buttons */}
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
        <div className="relative">
          <input
            type="text"
            placeholder="ค้นหา"
            className="rounded-lg bg-gray-100 px-10 py-2 w-full max-w-full focus:outline-none focus:ring focus:ring-blue-300 mt-2"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </span>
        </div>
        {/* Articles */}
        <div className="flex items-center">
          <nav className="flex space-x-4 px-4 py-1">
            {diseaseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDiseaseId(tab.id)}
                className={`text-sm font-semibold px-3 py-2  ${selectedDiseaseId === tab.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Loading and Error Handling */}
        {loading && <p>กำลังโหลดข้อมูล...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="p-4 space-y-4 max-h-[350px] overflow-y-auto scrollbar-custom pr-2">
          {filteredArticles.map((article: Article, index: number) => (
            <div key={index} className="flex items-start bg-white rounded-lg shadow hover:shadow-lg">
              {/* Thumbnail */}
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-l-lg">
                <Image
                  src={`http://localhost:3001${article.THUMBNAIL_URL}`}
                  alt="article-thumbnail"
                  width={128}
                  height={128}
                />
              </div>

              {/* Content */}
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mt-4">{article.TOPIC}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  {/* <span className="bg-blue-600 text-white text-xs font-sans px-4 py-1 rounded border border-red-600">
                    {article.diseases.length > 0
                      ? article.diseases.map(disease => disease.TH_NAME).join(", ")
                      : "ทั่วไป"}
                  </span> */}
                  <Image src="/asset/bookmark.svg" alt="article" width={16} height={16} />
                  <p className="text-sm text-blue-700">ยอดบุ๊กมาร์ก {article.VIEW_COUNT} ครั้ง</p>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{article.TOPIC}</p>
              </div>

              {/* More Button */}
              <button className="px-4 py-2 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <footer className="flex justify-between items-center mt-6">
          <p className="text-gray-600 text-sm">แสดง 1-{articles.length} จาก {totalArticles} รายการ</p>
          <div className="flex space-x-2 ml-auto">
            {Array.from({ length: Math.ceil(totalArticles / 10) }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`py-1 px-3 rounded-lg ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ArticlesPage;
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// // import FileUpload from "../../components/upload";

// interface Disease {
//   DISEASE_ID: number;
//   TH_NAME: string;
//   ENG_NAME: string;
// }

// interface Article {
//   AID: number;
//   TOPIC: string;
//   ESTIMATED_READ_TIME: number;
//   THUMBNAIL_URL: string;
//   VIEW_COUNT: number;
//   PUBLISH_DATE: string;
//   diseases: Disease[];
// }

// const diseaseTabs = [
//   { id: null, name: "ทั้งหมด" },
//   { id: 1, name: "โรคเบาหวาน" },
//   { id: 2, name: "โรคความดันโลหิตสูง" },
//   { id: 3, name: "โรคไขมันในเลือดสูง" },
//   { id: 4, name: "โรคอ้วน" },
// ];

// const ArticlesPage: React.FC = () => {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [totalArticles, setTotalArticles] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedDiseaseId, setSelectedDiseaseId] = useState<number | null>(null);
//   const router = useRouter();

//   // Fetch articles from API
//   const fetchArticles = async (page: number) => {
//     try {
//       const response = await fetch(`http://localhost:3001/article/search?page=${page}&limit=10`);
//       const data = await response.json();

//       if (response.ok) {
//         setArticles(data.data);
//         setTotalArticles(data.meta.total);
//       } else {
//         setError("Failed to fetch articles.");
//       }
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (error) {
//       setError("Error fetching articles.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchArticles(currentPage);
//   }, [currentPage]);

//   // กรองบทความตาม Disease ID ที่เลือก
//   const filteredArticles = selectedDiseaseId
//     ? articles.filter((article) =>
//       article.diseases.some((disease) => disease.DISEASE_ID === selectedDiseaseId)
//     )
//     : articles;

//   return (
//     <div className="top-0 px-28 py-6 bg-gray-100 min-h-screen font-sans">
//       <div className="rounded-lg p-6 mt-16 h-[600px] bg-white shadow-md">
//         <p
//           className="text-gray-600 text-sm pb-3 flex items-center cursor-pointer group"
//           onClick={() => router.back()}
//         >
//           <span className="hover:underline inline-flex items-center group-hover:text-black">
//             เพิ่มข้อมูล
//           </span>
//           <span style={{ margin: "0 8px" }}> &gt; </span>
//           <Image src="/asset/article.svg" alt="article" width={16} height={16} className="mr-1" />
//           <span className="text-black">บทความ</span>
//         </p>

//         {/* Disease Tabs */}
// <div className="flex items-center border-b">
//   <nav className="flex space-x-4 px-4 py-2">
//     {diseaseTabs.map((tab) => (
//       <button
//         key={tab.id}
//         onClick={() => setSelectedDiseaseId(tab.id)}
//         className={`text-sm font-semibold px-3 py-2 rounded ${selectedDiseaseId === tab.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"
//           }`}
//       >
//         {tab.name}
//       </button>
//     ))}
//   </nav>
// </div>

//         {/* Loading and Error Handling */}
//         {loading && <p>กำลังโหลดข้อมูล...</p>}
//         {error && <p className="text-red-500">{error}</p>}

//         {/* Article List */}
//         <div className="p-4 space-y-4 max-h-[350px] overflow-y-auto scrollbar-custom pr-2">
//           {filteredArticles.map((article: Article, index: number) => (
//             <div key={index} className="flex items-start bg-white rounded-lg shadow hover:shadow-lg">
//               {/* Thumbnail */}
//               <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-l-lg">
//                 <Image
//                   src={`http://localhost:3001${article.THUMBNAIL_URL}`}
//                   alt="article-thumbnail"
//                   width={128}
//                   height={128}
//                 />
//               </div>

//               {/* Content */}
//               <div className="ml-4 flex-grow">
//                 <h2 className="text-lg font-bold text-gray-800 mt-4">{article.TOPIC}</h2>
//                 <div className="flex items-center space-x-2 mt-1">
//                   {/* <span className="bg-blue-600 text-white text-xs font-sans px-4 py-1 rounded border border-red-600">
//                     {article.diseases.length > 0
//                       ? article.diseases.map(disease => disease.TH_NAME).join(", ")
//                       : "ทั่วไป"}
//                   </span> */}
//                   <Image src="/asset/bookmark.svg" alt="article" width={16} height={16} />
//                   <p className="text-sm text-blue-700">ยอดผู้เข้าชม {article.VIEW_COUNT} ครั้ง</p>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-2 line-clamp-2">{article.TOPIC}</p>
//               </div>

//               {/* More Button */}
//               <button className="px-4 py-2 text-gray-400 hover:text-gray-600">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <footer className="flex justify-between items-center mt-6">
//           <p className="text-gray-600 text-sm">แสดง 1-{filteredArticles.length} จาก {totalArticles} รายการ</p>
//           <div className="flex space-x-2 ml-auto">
//             {Array.from({ length: Math.ceil(totalArticles / 10) }, (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`py-1 px-3 rounded-lg ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ArticlesPage;

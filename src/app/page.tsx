// src/app/page.tsx (หน้าแรกที่ผู้ใช้จะเห็นคือหน้าเพิ่มข้อมูล)
"use client";

import React from 'react';
import CardGrid from "./components/CardGrid";
const Page: React.FC = () => {
  return (
    <div className="min-h-screen  bg-gray-100">
    {/* Main Content */}

  
    {/* <div className=" bg-gray-100"> */}
    <CardGrid />
    {/* </div> */}
  </div>
  );
};

export default Page;

"use client";

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center p-4 bg-blue-600 text-white border-b border-gray-300">
      {/* โลโก้ */}
      <div className="flex items-center mr-10">
        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-3" /> */}
      </div>
      
      {/* เมนู ชิดซ้าย */}
      <ul className="flex space-x-6 justify-start flex-grow">
        <li>
          <Link href="/" className="text-white font-bold text-lg">เพิ่มข้อมูล</Link>
        </li>
        <li>
          <Link href="/view-data" className="text-white font-bold text-lg">ดูข้อมูล</Link>
        </li>
      </ul>

      {/* ปุ่ม Logout */}
      <button
        className="px-6 py-2 text-lg font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600"
        onClick={() => alert('Logged out')}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

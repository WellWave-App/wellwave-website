"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname(); // ดึงเส้นทางปัจจุบัน

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center p-3 bg-white border-b border-gray-300 font-sans z-10">
      {/* โลโก้ */}
      <div className="flex items-center mr-10">
        <Image
          src="/wellwave.svg" // ใช้ path ที่สัมพันธ์กับโฟลเดอร์ public
          alt="Logo"
          width={50}
          height={50}
          className="mr-3"
        />
      </div>

      {/* เมนู ชิดซ้าย */}
      <ul className="flex space-x-6 justify-start flex-grow">
        <li>
          <Link
            href="/"
            className={`px-4 py-3 rounded-lg ${pathname === '/' ? 'bg-blue-100 text-blue-500' : 'text-gray-500'
              } font-bold text-sm`}
          >
            เพิ่มข้อมูล
          </Link>
        </li>
        <li>
          <Link
            href="/User-info"
            className={`px-4 py-3 rounded-lg ${pathname === '/User-info' ? 'bg-blue-100 text-blue-500' : 'text-gray-500'
              } font-bold text-sm`}
          >
            ข้อมูลผู้ใช้
          </Link>
        </li>
      </ul>

      {/* ปุ่ม Logout */}
      <button
        className="px-6 py-2 text-sm font-semi bg-white text-gray-500 border-2 border-gray-500 rounded-lg hover:bg-red-600 hover:text-white flex items-center justify-between"
        onClick={() => alert('Logged out')}
      >
        <span>ออกจากระบบ</span>
        <Image
          src="/asset/out.svg" // ใช้ path ที่สัมพันธ์กับโฟลเดอร์ public
          alt="fire"
          width={18}
          height={24}
          className="ml-3" // ให้ไอคอนมีระยะห่างจากข้อความ
        />
      </button>
    </nav>
  );
};

export default Navbar;

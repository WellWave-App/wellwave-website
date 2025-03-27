// components/TaskForm.tsx
import React, { useState } from 'react';
import FileUpload from "../../../components/upload";

interface TaskFormProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskForm: React.FC<TaskFormProps> = ({ setIsOpen }) => {
  const [amount, setAmount] = useState(1);
  const [duration, setDuration] = useState(3);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow max-h-[600px] p-6 m-18">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">เพิ่มภารกิจ</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
            ✖
          </button>
        </div>

        <div className="mt-4 space-y-4 max-h-[500px] overflow-y-auto scrollbar-custom pr-2">
          {/* Add all form fields here */}
          <label className="block text-gray-700">ประเภทภารกิจ</label>
          <select className="w-full border rounded p-2">
            <option>ภารกิจปรับนิสัย</option>
            <option>เควส</option>
          </select>

          {/* Amount and Duration */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">จำนวน</label>
              <div className="flex">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-full rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>วัน</option>
                  <option>เดือน</option>
                  <option>ปี</option>
                </select>
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">ระยะเวลาการก่อ</label>
              <div className="flex items-center">
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-full rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">วัน</span>
              </div>
            </div>
          </div>

          {/* Other form elements */}
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
  );
};

export default TaskForm;

import React from 'react';

interface AddExchangeProps {
  isExchangeModalOpen: boolean;
  setIsExchangeModalOpen: (isOpen: boolean) => void;
}

const AddExchange: React.FC<AddExchangeProps> = ({ isExchangeModalOpen, setIsExchangeModalOpen }) => {
  if (!isExchangeModalOpen) return null;

  return (
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
          <label className="block text-gray-700">เกณฑ์การแลก</label>
          <div className="flex gap-2">
            <div className="flex items-center rounded p-2 border w-auto flex-shrink-0">
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
  );
};

export default AddExchange;

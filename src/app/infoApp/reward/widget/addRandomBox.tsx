import React from 'react';
import CustomSelect from './customSelect';

interface AddRandomBoxProps {
  isRandomBoxModalOpen: boolean;
  setIsRandomBoxModalOpen: (isOpen: boolean) => void;
  onConfirm: () => void;
}

const AddRandomBox: React.FC<AddRandomBoxProps> = ({ isRandomBoxModalOpen, setIsRandomBoxModalOpen, onConfirm }) => {
  if (!isRandomBoxModalOpen) return null;

  return (
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
          {/* <CustomSelect /> */}
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={() => setIsRandomBoxModalOpen(false)} className="px-4 py-2 text-gray-500 hover:text-gray-700">
              ยกเลิก
            </button>
            <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRandomBox;

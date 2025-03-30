
import React, { useState } from 'react';
import FileUpload from '@/app/components/upload';

interface PopupProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    amount: number;
    setAmount: (amount: number) => void;
    duration: number;
    setDuration: (duration: number) => void;
}

const MissionPopup: React.FC<PopupProps> = ({ isOpen, setIsOpen, amount, setAmount, duration, setDuration }) => {
    if (!isOpen) return null;

    const [selectedType, setSelectedType] = useState<string>('ภารกิจปรับนิสัย'); // ใช้ติดตามประเภทที่เลือก
    const [isDaily, setIsDaily] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
    const [description, setDescription] = useState('');

    // ฟังก์ชันเพื่อส่งข้อมูลไปยัง API ตามประเภทภารกิจ

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };
    const handleSubCategoryChange = (subCategory: string) => {
        setSelectedSubCategory(subCategory);
    };
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('TITLE', title);
        formData.append('TRACKING_TYPE', 'duration');
        formData.append('DEFAULT_DAILY_MINUTE_GOAL', amount.toString());
        formData.append('DEFAULT_DAYS_GOAL', duration.toString());
        formData.append('DESCRIPTION', description);

        if (selectedCategory === 'exercise' && selectedSubCategory) {
            formData.append('EXERCISE_TYPE', selectedSubCategory);
        }
        // เพิ่มข้อมูลใน FormData ตามประเภท
        if (selectedType === 'ภารกิจประจำวัน') {
            formData.append('IS_DAILY', 'false'); // หากเป็นภารกิจประจำวัน
        }

        let url = '';
        if (selectedType === 'ภารกิจปรับนิสัย') {
            url = 'http://localhost:3000/habit';
            formData.append('CATEGORY', selectedCategory);
        } else if (selectedType === 'เควส') {
            url = 'http://localhost:3000/quest';
            formData.append('RELATED_HABIT_CATEGORY', selectedCategory);
        } else if (selectedType === 'ภารกิจประจำวัน') {
            url = 'http://localhost:3000/habit';
            formData.append('CATEGORY', selectedCategory);
        }
        console.log('Selected URL:', url);

        // ส่งข้อมูลไปยัง API
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('ส่งข้อมูลสำเร็จ');
                setIsOpen(false);
            } else {
                alert('เกิดข้อผิดพลาดในการส่งข้อมูล');
            }
        } catch (error) {
            alert('เกิดข้อผิดพลาด: ' + error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
            <div className="bg-white rounded-lg shadow max-h-[600px] p-6 m-18 ">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-lg font-semibold">เพิ่มภารกิจ</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                        ✖
                    </button>
                </div>

                {/* Form ใน Popup */}
                <div className="mt-4 space-y-4 max-h-[500px] overflow-y-auto scrollbar-custom pr-2 ">
                    <label className="block text-gray-700">ประเภทภารกิจ</label>
                    <select
                        className="w-full border rounded p-2 pr-8"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option>ภารกิจปรับนิสัย</option>
                        <option>ภารกิจประจำวัน</option>
                        <option>เควส</option>
                    </select>

                    <label className="block text-gray-700">ชื่อภารกิจ</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        placeholder="ชื่อภารกิจ"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // เก็บค่าใน state
                    />
                    {/* หมวดหมู่ */}
                    <label className="block text-gray-700">หมวดหมู่</label>
                    <div className="flex gap-4 mt-4">
                        <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
                            <input
                                type="radio"
                                name="category"
                                value="exercise"
                                checked={selectedCategory === 'exercise'}
                                onChange={() => handleCategoryChange('exercise')}
                            />
                            ออกกำลังกาย
                        </label>

                        <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
                            <input
                                type="radio"
                                name="category"
                                value="diet"
                                checked={selectedCategory === 'diet'}
                                onChange={() => handleCategoryChange('diet')}
                            />
                            รับประทานอาหาร
                        </label>

                        <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
                            <input
                                type="radio"
                                name="category"
                                value="sleep"
                                checked={selectedCategory === 'sleep'}
                                onChange={() => handleCategoryChange('sleep')}
                            />
                            พักผ่อน
                        </label>
                    </div>

                    {selectedCategory === 'exercise' && (
                        <div>
                            <label className="block text-gray-700 mt-4">หมวดหมู่รอง</label>
                            <select
                                className="w-full border rounded p-2"
                                onChange={(e) => handleSubCategoryChange(e.target.value)}
                            >
                                <option value="">หมวดหมู่รอง</option>
                                <option value="walking">การเดิน</option>
                                <option value="running">การวิ่ง</option>
                                <option value="cycling">การปั่นจักรยาน</option>
                                <option value="swimming">การว่ายน้ำ</option>
                                <option value="strength">ออกกำลังกายแบบแรงต้าน</option>
                                <option value="hiit">HIIT</option>
                                <option value="yoga">โยคะ</option>
                                <option value="other">อื่นๆ</option>
                            </select>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Left section */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">จำนวน</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(parseInt(e.target.value))}
                                    placeholder="30"
                                    className="w-full rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <span className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">นาที</span>
                            </div>
                        </div>

                        {/* Right section */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">ระยะเวลาการก่อ</label>
                            <div className="flex items-center ">
                                <input
                                    type="number"
                                    value={duration}
                                    onChange={(e) => setDuration(parseInt(e.target.value))}
                                    placeholder="30"
                                    className="w-full rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <span className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">วัน</span>
                            </div>
                        </div>
                    </div>

                    <label className="block text-gray-700">รายละเอียด</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        placeholder="รายละเอียด"
                        value={description} // value จาก state
                        onChange={(e) => setDescription(e.target.value)} // อัพเดตค่าของ description
                    />



                    {/* รางวัล */}
                    <label className="block text-gray-700">รางวัล</label>
                    <div className="flex gap-2">
                        <select className="border rounded p-2">
                            <option>Gem</option>
                            <option>EXP</option>
                        </select>
                        <input type="number" className="w-full border rounded p-2" placeholder="จำนวน" />
                    </div>

                    <label className="block text-gray-700">รูปภาพภารกิจ</label>
                    <FileUpload onFileSelect={() => { }} />

                    {/* ปุ่ม */}
                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={() => setIsOpen(false)} className="px-4 py-2 text-gray-500 hover:text-gray-700">
                            ยกเลิก
                        </button>
                        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            ยืนยัน
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionPopup;

 {isRandomBoxModalOpen && (
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
                  {/* <CustomSelect onChange={handleChange}
                  /> */}

                  <label className="block text-gray-700">ของรางวัลที่จะได้รับ</label>

                  <div className="flex items-center">
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      min="1"
                      className="flex-grow rounded-l-md border border-gray-300 text-center text-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="rounded-r-md border border-l-0 border-gray-300 bg-white px-5 py-1.5 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      เปอร์เซนต์ (%)
                    </span>
                  </div>


                  <div className="flex justify-end gap-2 mt-4">
                    <button onClick={() => setIsRandomBoxModalOpen(false)} className="px-4 py-2 text-gray-500 hover:text-gray-700">
                      ยกเลิก
                    </button>
                    <button
                      onClick={handleConfirm}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modal สำหรับ Exchange */}
          {isExchangeModalOpen && (
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
                  {/* <CustomSelect onChange={handleItemChange} /> */}
                  <label className="block text-gray-700">เกณฑ์การแลก</label>
                  <div className="flex gap-2">
                    <div className="flex items-center rounded p-2 border w-auto flex-shrink-0">
                      <Image
                        src="/asset/EXP.svg"
                        alt="EXP"
                        width={24}
                        height={24}
                        className="mr-2" // เพิ่มช่องว่างระหว่างรูปภาพและข้อความ
                      />
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
          )}
export default function Courses() {
  return (
    <div className="min-h-screen bg-black text-white pb-32">
      <main className="pt-24 px-4 container mx-auto max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          คอร์สเรียนทั้งหมด
        </h1>
        <p className="text-gray-400 text-center text-xl mb-16 max-w-3xl mx-auto">
          เรียนรู้และพัฒนาทักษะการเขียนโค้ดผ่านคอร์สที่ออกแบบมาสำหรับทุกระดับ
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">เริ่มต้นกับ Next.js</h3>
              <p className="text-gray-400 text-sm mb-4">
                เรียนรู้พื้นฐานของ Next.js และสร้างเว็บแอปพลิเคชันสมัยใหม่
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm">ผู้เริ่มต้น</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">12 บทเรียน</span>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-red-500/20 flex items-center justify-center">
              <span className="text-4xl">⚡</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">TypeScript ขั้นสูง</h3>
              <p className="text-gray-400 text-sm mb-4">
                เรียนรู้ TypeScript ขั้นสูงพร้อมแพทเทิร์นและแนวทางปฏิบัติที่ดีที่สุด
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm">ขั้นสูง</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">15 บทเรียน</span>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
              <span className="text-4xl">📊</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">การแสดงผลข้อมูลด้วยกราฟ</h3>
              <p className="text-gray-400 text-sm mb-4">
                สร้างการแสดงผลข้อมูลที่สวยงามและโต้ตอบได้ด้วย D3.js
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">ปานกลาง</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">10 บทเรียน</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

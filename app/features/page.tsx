"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

const features = [
  {
    id: "interactive",
    title: "เรียนรู้แบบโต้ตอบ",
    description: "ฝึกฝนทักษะผ่านแบบฝึกหัดแบบโต้ตอบ พร้อมผลลัพธ์แบบเรียลไทม์",
    icon: "material-symbols:code",
  },
  {
    id: "video",
    title: "วิดีโอคอร์ส",
    description: "เรียนรู้ผ่านวิดีโอคุณภาพสูง พร้อมคำอธิบายที่เข้าใจง่าย",
    icon: "material-symbols:play-circle",
  },
  {
    id: "docs",
    title: "เอกสารประกอบ",
    description: "เอกสารประกอบการเรียนที่ครบถ้วน พร้อมตัวอย่างโค้ด",
    icon: "material-symbols:document",
  },
  {
    id: "updates",
    title: "อัพเดทต่อเนื่อง",
    description: "เนื้อหาใหม่และการปรับปรุงสม่ำเสมอ ทันต่อเทคโนโลยี",
    icon: "material-symbols:update",
  },
  {
    id: "lifetime",
    title: "เรียนได้ตลอดชีพ",
    description: "จ่ายครั้งเดียว เข้าถึงได้ตลอดชีวิต ไม่มีค่าใช้จ่ายเพิ่มเติม",
    icon: "material-symbols:all-inclusive",
  },
  {
    id: "community",
    title: "ชุมชนนักพัฒนา",
    description: "เรียนรู้และแบ่งปันประสบการณ์ร่วมกับชุมชนนักพัฒนา",
    icon: "material-symbols:group",
  }
];

interface PopupProps {
  x: number;
  y: number;
}

function ImagePopup({ x, y }: PopupProps) {
  return (
    <div 
      className="fixed z-50 pointer-events-none"
      style={{ 
        left: `${x + 20}px`, 
        top: `${y - 100}px`,
        transform: 'scale(1)',
        opacity: 1,
        transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
      }}
    >
      <div className="w-[300px] h-[200px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
        <div className="w-full h-full relative">
          {/* Skeleton animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer" 
               style={{ backgroundSize: '200% 100%' }} />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const [popup, setPopup] = useState<PopupProps | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setPopup({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setPopup(null);
  };

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium leading-relaxed mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              ฟีเจอร์ที่คุณจะได้รับ
            </span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
            เรียนรู้อย่างมีประสิทธิภาพด้วยฟีเจอร์ที่ออกแบบมาเพื่อประสบการณ์การเรียนที่ดีที่สุด
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors group relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Icon icon={feature.icon} className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popup && <ImagePopup {...popup} />}
    </div>
  );
}

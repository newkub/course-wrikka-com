'use client';

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('Missing Stripe publishable key');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Pricing() {
  const [showModal, setShowModal] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleBuyNow = () => {
    setShowModal(true);
  };

  const handleConfirm = async () => {
    if (accepted && !loading) {
      try {
        setLoading(true);
        
        // Create Stripe Checkout Session
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const { sessionId, error } = await response.json();
        
        if (error) {
          console.error('Error:', error);
          return;
        }

        // Redirect to Stripe Checkout
        const stripe = await stripePromise;
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({ sessionId });
          if (error) {
            console.error('Stripe Redirect Error:', error);
          }
        }
      } catch (err) {
        console.error('Payment Error:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      <main className="container mx-auto px-6 py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            จ่ายรายปีถูกกว่า แต่จ่ายครั้งเดียวคุ้มกว่า
          </h1>
          <p className="text-gray-400 text-lg">
            แพ็คเกจรายปีจะเปิดให้สั่งซื้อต้นปี 2024 แต่ตอนนี้คุณสามารถซื้อแพ็คเกจตลอดชีพในราคาพิเศษได้เลย
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {/* Features List - Left Side */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="relative w-24 aspect-video bg-purple-500/10 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 animate-pulse" />
                </div>
                <span className="text-gray-300">เข้าถึงทุกคอร์สที่มีในปัจจุบัน</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-24 aspect-video bg-purple-500/10 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 animate-pulse" />
                </div>
                <span className="text-gray-300">คอร์สใหม่ที่จะเพิ่มในอนาคต</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-24 aspect-video bg-purple-500/10 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 animate-pulse" />
                </div>
                <span className="text-gray-300">แบบฝึกหัดแบบโต้ตอบทุกบทเรียน</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-24 aspect-video bg-purple-500/10 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 animate-pulse" />
                </div>
                <span className="text-gray-300">อัพเดทและปรับปรุงเนื้อหาสม่ำเสมอ</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-24 aspect-video bg-purple-500/10 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 animate-pulse" />
                </div>
                <span className="text-gray-300">เอกสารประกอบการเรียนครบถ้วน</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-24 aspect-video bg-purple-500/10 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 animate-pulse" />
                </div>
                <span className="text-gray-300">ตัวอย่างโค้ดและแนวทางการพัฒนา</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-24 aspect-video bg-purple-500/10 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 animate-pulse" />
                </div>
                <span className="text-gray-300">เรียนได้ไม่จำกัดจำนวนครั้ง</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-24 aspect-video bg-purple-500/10 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 animate-pulse" />
                </div>
                <span className="text-gray-300">รับการอัพเดทฟีเจอร์ใหม่ๆ ตลอด</span>
              </div>
            </div>
          </div>

          {/* Pricing Cards - Right Side */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-4">
              {/* Yearly Plan - Currently Unavailable */}
              <div className="border border-gray-700 rounded-xl p-6 bg-gray-900/50 opacity-50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">แพ็คเกจรายปี</h3>
                  <div className="text-lg font-bold text-gray-400">฿1,200<span className="text-sm">/ปี</span></div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  เหมาะสำหรับผู้ที่ต้องการเรียนรู้อย่างต่อเนื่อง
                </p>
                <button
                  type="button"
                  disabled
                  className="w-full bg-gray-700 text-gray-300 py-2 px-4 rounded-lg text-sm"
                >
                  เปิดให้ซื้อต้นปี 2024
                </button>
              </div>

              {/* Lifetime Plan - Currently Available with Special Price */}
              <div className="relative border border-purple-500 rounded-xl p-6 bg-purple-500/10">
                <div className="absolute -top-3 right-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                  ราคาพิเศษ! จากปกติ ฿3,500
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-purple-400">
                    แพ็คเกจตลอดชีพ
                  </h3>
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-400 line-through">฿3,500</div>
                    <div className="text-xl font-bold text-purple-400">฿1,200</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-6">จ่ายครั้งเดียว เข้าถึงตลอดชีพ</p>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition-colors text-white font-medium"
                >
                  ซื้อเลย
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-2xl max-w-md w-full p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold mb-4">ยืนยันการสั่งซื้อ</h3>
              
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={accepted}
                      onChange={(e) => setAccepted(e.target.checked)}
                    />
                    <div className="w-5 h-5 border-2 border-gray-600 rounded group-hover:border-purple-500 peer-checked:border-purple-500 peer-checked:bg-purple-500 transition-all" />
                    <svg
                      className={`absolute w-3 h-3 pointer-events-none ${
                        accepted ? 'opacity-100' : 'opacity-0'
                      } transition-opacity`}
                      viewBox="0 0 17 12"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      role="img"
                      aria-labelledby="checkmarkTitle"
                    >
                      <title id="checkmarkTitle">เครื่องหมายถูก</title>
                      <path d="M1 4.5L6 9.5L15.5 1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-400">
                    ฉันรับทราบว่าตอนนี้เนื้อหาคอร์สเรียนจะไม่เสร็จ จะเสร็จปลายปี 2024
                  </div>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  disabled={loading}
                  className="flex-1 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  ยกเลิก
                </button>
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={!accepted || loading}
                  className={`
                    flex-1 py-2 rounded-lg font-medium transition-all
                    ${accepted && !loading
                      ? 'bg-purple-500 hover:bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  {loading ? 'กำลังดำเนินการ...' : 'ยืนยัน'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

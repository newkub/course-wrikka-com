"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const technologies = [
  { id: "react", name: "React", icon: "logos:react", url: "https://react.dev" },
  { id: "nextjs", name: "Next.js", icon: "logos:nextjs-icon", url: "https://nextjs.org" },
  { id: "vue", name: "Vue.js", icon: "logos:vue", url: "https://vuejs.org" },
  { id: "nuxt", name: "Nuxt.js", icon: "logos:nuxt-icon", url: "https://nuxt.com" },
  { id: "typescript", name: "TypeScript", icon: "logos:typescript-icon", url: "https://www.typescriptlang.org" },
  { id: "tailwind", name: "Tailwind CSS", icon: "logos:tailwindcss-icon", url: "https://tailwindcss.com" },
  { id: "nodejs", name: "Node.js", icon: "logos:nodejs-icon", url: "https://nodejs.org" },
  { id: "postgresql", name: "PostgreSQL", icon: "logos:postgresql", url: "https://www.postgresql.org" },
  { id: "git", name: "Git", icon: "logos:git-icon", url: "https://git-scm.com" },
  { id: "github", name: "GitHub", icon: "logos:github-icon", url: "https://github.com" },
  { id: "vscode", name: "VS Code", icon: "logos:visual-studio-code", url: "https://code.visualstudio.com" },
  { id: "vitepress", name: "VitePress", icon: "logos:vitejs", url: "https://vitepress.dev" },
  { id: "docker", name: "Docker", icon: "logos:docker-icon", url: "https://www.docker.com" },
  { id: "kubernetes", name: "Kubernetes", icon: "logos:kubernetes", url: "https://kubernetes.io" },
  { id: "aws", name: "AWS", icon: "logos:aws", url: "https://aws.amazon.com" },
  { id: "graphql", name: "GraphQL", icon: "logos:graphql", url: "https://graphql.org" },
  { id: "prisma", name: "Prisma", icon: "logos:prisma", url: "https://www.prisma.io" },
  { id: "mongodb", name: "MongoDB", icon: "logos:mongodb-icon", url: "https://www.mongodb.com" },
  { id: "redis", name: "Redis", icon: "logos:redis", url: "https://redis.io" },
  { id: "python", name: "Python", icon: "logos:python", url: "https://www.python.org" },
  { id: "django", name: "Django", icon: "logos:django-icon", url: "https://www.djangoproject.com" },
  { id: "fastapi", name: "FastAPI", icon: "simple-icons:fastapi", url: "https://fastapi.tiangolo.com" },
  { id: "go", name: "Go", icon: "logos:go", url: "https://go.dev" },
  { id: "rust", name: "Rust", icon: "logos:rust", url: "https://www.rust-lang.org" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="w-full min-h-[80vh] relative pt-24">
        <main className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div>
              <h1 className="gradient-text mb-6">
                คอร์สเรียนทั้งหมดแบบ All in One
              </h1>
              <h2 className="mb-8">
                จ่ายครั้งเดียว เข้าถึงได้ทั้งหมด
              </h2>
              <p className="text-responsive-xl text-gray-400 mb-8">
                พัฒนาทักษะการเขียนโค้ดกับแพลตฟอร์มการเรียนรู้ที่ครบครัน
                จ่ายครั้งเดียวเข้าถึงทุกคอร์ส
              </p>
              <div className="flex gap-4">
                <Link
                  href="/pricing"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium"
                >
                  สั่งซื้อ
                </Link>
                <Link
                  href="https://learn.wrikka.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium flex items-center gap-2 group"
                >
                  <span>เข้าใช้งาน</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="iconify" data-icon="mdi:open-in-new" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Skeleton */}
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl animate-pulse overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tr from-purple-600/30 to-transparent rounded-tl-3xl" />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Feature Cards Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="gradient-text mb-6">
              เรียนรู้อย่างไร้ขีดจำกัด
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-3xl mx-auto">
              เรียนรู้ผ่านวิดีโอคอร์ส แบบฝึกหัด และเอกสารประกอบการเรียนที่ครบครัน
              พร้อมอัพเดทเนื้อหาใหม่ตลอด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature Cards */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium leading-relaxed mb-3">
                      เรียนรู้แบบโต้ตอบ
                    </h3>
                    <p className="text-gray-400 text-sm leading-loose">
                      เรียนรู้ผ่านการลงมือทำจริง พร้อมแบบฝึกหัดแบบโต้ตอบและผลลัพธ์แบบเรียลไทม์
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-2xl">
                    🎯
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium leading-relaxed mb-3">
                      เรียนรู้ผ่านภาพ
                    </h3>
                    <p className="text-gray-400 text-sm leading-loose">
                      เข้าใจแนวคิดที่ซับซ้อนผ่านการแสดงผลแบบกราฟและแผนภาพเคลื่อนไหว
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-2xl">
                    📊
                  </div>
                </div>
              </div>
            </div>

            {/* Large Feature Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800">
              <h3 className="text-2xl font-medium leading-relaxed mb-4">
                จ่ายครั้งเดียว เรียนได้ตลอดชีพ
              </h3>
              <p className="text-gray-400 leading-loose mb-6">
                จ่ายครั้งเดียวเข้าถึงทุกคอร์สทั้งในปัจจุบันและอนาคต ไม่มีค่าใช้จ่ายซ่อนเร้น
                การลงทุนเพื่อการเรียนรู้ของคุณปลอดภัยตลอดไป
              </p>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm">
                  อัพเดทตลอดชีพ
                </div>
                <div className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">
                  ทุกคอร์ส
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="gradient-text mb-6">
              เทคโนโลยีที่คุณจะได้เรียนรู้
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-3xl mx-auto">
              เรียนรู้การพัฒนาเว็บไซต์และแอปพลิเคชันด้วยเทคโนโลยีที่ทันสมัยและเป็นที่นิยมในตลาดงาน
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4 justify-items-center">
            {technologies.map((tech) => (
              <a
                key={tech.id}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-[#1a1a1a] rounded-2xl p-3 transition-all duration-300 hover:scale-110 hover:bg-[#252525] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <Icon icon={tech.icon} className="w-full h-full" />
                </div>
                <div className="mt-2 text-center">
                  <span className="text-[11px] text-gray-500 font-medium">{tech.name}</span>
                </div>
              </a>
            ))}
          </div>

          {/* More Technologies Hint */}
          <div className="mt-16 text-center">
            <p className="text-responsive-sm text-gray-500">
              และเทคโนโลยีอื่นๆ อีกมากมายที่จะเพิ่มเข้ามาในอนาคต
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-medium leading-relaxed mb-8">
              <span className="gradient-text">
                พร้อมที่จะเริ่มต้นการเรียนรู้หรือยัง?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              เริ่มต้นการเรียนรู้วันนี้ และเป็นส่วนหนึ่งของชุมชนนักพัฒนาที่เติบโตไปด้วยกัน
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-200 shadow-lg shadow-purple-500/20"
              >
                เริ่มเรียนเลย
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200"
              >
                ดูฟีเจอร์ทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

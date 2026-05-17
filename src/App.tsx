import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Briefcase, 
  Code, 
  Award, 
  FileText, 
  Video, 
  Image as ImageIcon,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const AVATAR_URL = "https://lh3.googleusercontent.com/d/11Gt-2u7MGx5XQYOOQzDJ09JTaS7oluCr";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white pb-20">
      {/* Header / Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b grid-line">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-mono text-sm">
              吳
            </div>
            <span className="font-semibold tracking-tight uppercase text-sm text-[#0F172A]">Shane Wu</span>
          </div>
          <div className="hidden md:flex gap-8">
            {["經歷", "技能", "證照", "AI創作", "自傳"].map((item) => (
              <a 
                key={item} 
                href={`#${item}`}
                className="technical-label hover:text-blue-700 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-12 space-y-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="technical-label flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              目前狀態：高雄科技大學 航技系 在學中
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase text-[#0F172A]">
              吳衫憲<br />
              <span className="text-blue-600/20">Portfolio</span>
            </h1>
            <p className="text-lg text-[#0F172A]/70 max-w-md leading-relaxed">
              專注於航運技術與 AI 創意應用的整合實作。目前就讀於國立高雄科技大學，致力於將專業技能與人工智慧結合，探索數位創作的新可能性。
            </p>
            <div className="flex gap-4">
              <a 
                href="#AI創作"
                className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 group"
              >
                觀看作品庫
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src={AVATAR_URL} 
                alt="吳衫憲 Avatar" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full technical-label shadow-sm">
                ID: A111182139
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border grid-line rounded-full flex items-center justify-center p-4">
              <div className="w-full h-full border grid-line border-dashed rounded-full flex items-center justify-center">
                <User className="w-6 h-6 opacity-20" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="經歷" className="space-y-8">
          <SectionHeader icon={<Briefcase />} title="工作實習經歷" label="Professional Experience" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExperienceCard 
              year="2025 ~ 現在"
              title="打工實習生"
              company="相關企業單位"
              desc="參與各項實務運作，協助技術支援與流程優化，累積產業第一線經驗。"
            />
            <ExperienceCard 
              year="2025 ~ 2025"
              title="御風輪實習"
              company="航運相關技術實務"
              desc="專注於船舶航行技術與設備維修實習，深入了解航運產業之實際運作與安全管理。"
            />
          </div>
        </section>

        {/* Language & Certs */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div id="技能" className="lg:col-span-2 space-y-8">
            <SectionHeader icon={<Code />} title="語言能力" label="Language Proficiency" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-3xl border grid-line shadow-sm">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-[#0F172A]">中文 (Mandarin)</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="母語 (Native)" />
                  <SkillBadge name="專業溝通" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-[#0F172A]">英文 (English)</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="TOEIC 基礎" />
                  <SkillBadge name="日常溝通" />
                  <SkillBadge name="專業術語閱讀" />
                </div>
              </div>
            </div>
          </div>

          <div id="證照" className="space-y-8">
            <SectionHeader icon={<Award />} title="專業證照" label="Certifications" />
            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl shadow-blue-900/10 space-y-6">
              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">四小證</h4>
                  <p className="text-white/50 text-xs mt-1 italic">Basic Safety Training</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">其它專業證照</h4>
                  <p className="text-white/50 text-xs mt-1">其它航技相關與技能認證</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Creative Works Section */}
        <section id="AI創作" className="space-y-12">
          <SectionHeader icon={<Video />} title="AI 創意集" label="AI Creative Portfolio" />
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <YouTubeCard 
                url="https://www.youtube.com/embed/c5qUZWWljK4" 
                title="AI 創意影片展示 A" 
                desc="探索 AI 視覺生成的動態魅力，結合航運元素與未來科技感的創意呈現。"
              />
              <YouTubeCard 
                url="https://www.youtube.com/embed/zIs3oXVtlxg" 
                title="AI 創意影片展示 B" 
                desc="數位孿生與虛擬場景的 AI 應用，展示技術與藝術的跨界碰撞。"
              />
            </div>

            {/* Featured 3D Model Card */}
            <motion.a 
              href="https://studio.tripo3d.ai/3d-model/608c9c9d-5a4d-435f-933c-9cd27e0494e5?invite_code=03ER8L"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="w-full group relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl bg-gradient-to-br from-blue-600 to-indigo-900 aspect-[21/9] flex items-center justify-center p-6"
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="relative z-10 text-center space-y-4 px-6">
                <div className="technical-label text-blue-200 border border-blue-400/30 px-3 py-1 rounded-full inline-block">Featured 3D Model</div>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase">AI 生成 3D 模型作品</h3>
                <p className="text-blue-100/80 max-w-lg mx-auto text-sm md:text-base font-light">
                  點擊進入 Tripo AI 平台觀看我創作的 3D 模型實例，探索空間生成技術的無限可能。
                </p>
                <div className="flex items-center justify-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                  立即觀看 3D 模型 <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 blur-[120px] rounded-full"></div>
            </motion.a>
          </div>
        </section>

        {/* Biography */}
        <section id="自傳" className="space-y-8">
          <SectionHeader icon={<FileText />} title="個人自傳" label="Autobiography" />
          <div className="bg-white p-12 rounded-[2rem] border grid-line relative overflow-hidden shadow-sm">
            <div className="max-w-3xl space-y-6 relative z-10 font-serif italic text-lg leading-loose text-[#0F172A]/80">
              <p>
                「目前的我，正如同一艘正在整備中、準備啟程的船隻。在高雄科技大學航技系的學習過程中，我不僅掌握了船舶航行的硬核技術，更在 AI 的浪潮中看見了未來的方向。」
              </p>
              <p>
                「透過實習與打工的磨練，我學會了在變動的環境中保持穩定，並利用數位工具與 AI 技術優化流程、激發創意。這個作品集是我現階段實踐的縮影，也是通往未來更寬廣海域的起點。」
              </p>
            </div>
            {/* Background text decoration */}
            <div className="absolute -bottom-10 -right-10 text-[200px] font-bold text-blue-600/5 select-none pointer-events-none line-clamp-1">
              STORY
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t grid-line pt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-6 pb-12">
          <div className="technical-label">© 2024 SHANE WU PORTFOLIO. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="#" className="technical-label hover:text-[#1A1A1A]">Linkedin</a>
            <a href="#" className="technical-label hover:text-[#1A1A1A]">GitHub</a>
            <a href="#" className="technical-label hover:text-[#1A1A1A]">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ icon, title, label }: { icon: React.ReactNode, title: string, label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-blue-600">
        {icon}
        <h2 className="text-2xl font-bold tracking-tight uppercase text-[#0F172A]">{title}</h2>
      </div>
      <div className="technical-label ml-7">{label}</div>
    </div>
  );
}

function ExperienceCard({ year, title, company, desc }: { year: string, title: string, company: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="p-8 bg-white rounded-3xl border grid-line shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all space-y-4"
    >
      <div className="flex justify-between items-start">
        <div className="technical-label bg-blue-50 px-2 py-1 rounded">{year}</div>
        <ChevronRight className="w-4 h-4 text-blue-200" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
        <p className="text-sm font-medium text-blue-600/60">{company}</p>
      </div>
      <p className="text-sm text-[#0F172A]/70 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="px-4 py-2 bg-blue-50 rounded-xl text-xs font-medium border border-blue-100/50 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default">
      {name}
    </span>
  );
}

function YouTubeCard({ url, title, desc }: { url: string, title: string, desc: string }) {
  return (
    <div className="space-y-4 group">
      <div className="aspect-video bg-[#0F172A] rounded-3xl overflow-hidden border border-blue-100/20 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
        <iframe 
          className="w-full h-full"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="px-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-[#1A1A1A]/60">{desc}</p>
      </div>
    </div>
  );
}

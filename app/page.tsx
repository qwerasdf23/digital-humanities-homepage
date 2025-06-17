import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  FileText,
  Users,
  Calendar,
  Database,
  Microscope,
  ChevronRight,
  Globe,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Zap,
  Star,
  Play,
} from "lucide-react"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Enhanced Design */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-red-400/5"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-20 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse blur-lg"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-15 animate-bounce blur-md"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 border-2 border-emerald-200 mb-8 animate-fade-in shadow-lg backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-emerald-600 mr-3 animate-spin" />
              <span className="text-sm font-bold text-emerald-800 tracking-wide">혁신적인 디지털 인문학 연구</span>
              <Star className="w-5 h-5 text-emerald-600 ml-3 animate-pulse" />
            </div>

            <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-8 leading-tight">
              <span className="block">디지털 기술과 인문학의</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 animate-gradient">
                창의적 융합
              </span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-5xl mx-auto mb-12 leading-relaxed font-medium">
              전통 인문학과 첨단 디지털 기술의 만남을 통해
              <br className="hidden sm:block" />
              새로운 지식 창조와 사회적 가치 실현을 추구하는
              <br />
              <span className="font-bold text-slate-800 bg-gradient-to-r from-yellow-200 to-yellow-300 px-3 py-1 rounded-lg whitespace-nowrap">
                차세대 연구기관
              </span>
              입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 text-lg font-bold"
                >
                  <Zap className="w-6 h-6 mr-3" />
                  연구소 소개
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <Link href="/research">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-3 border-slate-400 hover:border-slate-600 px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm text-lg font-bold"
                >
                  <Play className="w-6 h-6 mr-3" />
                  연구 분야 탐색
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas with 3D Effect */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 mb-8 shadow-lg">
              <span className="text-lg font-bold text-purple-800 tracking-wide">Research Areas</span>
            </div>
            <h2 className="text-6xl font-black text-slate-900 mb-8">주요 연구 분야</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              디지털 기술과 인문학의 융합을 통한
              <br className="hidden sm:block" />
              혁신적 연구 영역들을 탐구합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                href: "/research/text-mining",
                icon: FileText,
                color: "emerald",
                badge: "핵심 연구",
                title: "텍스트 마이닝",
                description: "자연어 처리와 머신러닝을 활용한 고전문학 및 현대문학 텍스트 분석",
              },
              {
                href: "/research/digital-archive",
                icon: Database,
                color: "blue",
                badge: "핵심 연구",
                title: "디지털 아카이브",
                description: "문화유산과 역사 자료의 디지털 보존 및 활용 시스템 구축",
              },
              {
                href: "/research/cultural-analytics",
                icon: BarChart3,
                color: "purple",
                badge: "신규 연구",
                title: "문화 데이터 분석",
                description: "빅데이터 기술을 활용한 사회문화 현상의 정량적 분석",
              },
              {
                href: "/research/digital-mapping",
                icon: Globe,
                color: "orange",
                badge: "협업 연구",
                title: "디지털 지도학",
                description: "GIS와 공간정보 기술을 활용한 인문학적 공간 분석",
              },
              {
                href: "/research/computational-humanities",
                icon: Microscope,
                color: "indigo",
                badge: "AI 연구",
                title: "계산 인문학",
                description: "AI와 머신러닝 기반 인문학 연구 방법론 개발",
              },
              {
                href: "/research/network-analysis",
                icon: TrendingUp,
                color: "teal",
                badge: "융합 연구",
                title: "네트워크 분석",
                description: "사회 네트워크 분석을 통한 인문학적 관계성 연구",
              },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <Card className="h-full hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 cursor-pointer group border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative transform perspective-1000 hover:rotate-y-5">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  ></div>
                  <CardContent className="p-10 relative">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}
                    >
                      <item.icon className="w-12 h-12 text-white" />
                    </div>
                    <Badge
                      className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 text-white mb-6 shadow-lg text-sm px-4 py-2`}
                    >
                      {item.badge}
                    </Badge>
                    <h3 className="text-3xl font-black mb-6 text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 transition-all duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg font-medium">{item.description}</p>
                    <div
                      className={`flex items-center text-${item.color}-600 font-bold group-hover:text-${item.color}-700 transition-colors text-lg`}
                    >
                      자세히 보기{" "}
                      <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/research">
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-slate-400 hover:border-slate-600 px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white text-xl font-bold"
              >
                모든 연구 분야 보기 <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects with Glassmorphism */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl">
              <span className="text-lg font-bold text-white tracking-wide">Featured Projects</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-8">주요 연구 프로젝트</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
              현재 진행 중인 혁신적인
              <br className="hidden sm:block" />
              디지털 인문학 연구 프로젝트들을 소개합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Link href="/projects/joseon-texts">
              <Card className="hover:shadow-2xl transition-all duration-700 cursor-pointer group border-0 bg-white/10 backdrop-blur-md overflow-hidden relative transform hover:-translate-y-6">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-12 relative">
                  <div className="flex items-start justify-between mb-8">
                    <Badge className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white shadow-2xl text-lg px-6 py-3">
                      진행 중
                    </Badge>
                    <div className="text-lg text-gray-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      2024-2026
                    </div>
                  </div>
                  <h3 className="text-4xl font-black mb-8 text-white group-hover:text-emerald-300 transition-colors duration-500">
                    조선시대 문집 디지털 아카이브 구축
                  </h3>
                  <p className="text-gray-300 mb-10 leading-relaxed text-xl font-medium">
                    조선시대 주요 문인들의 문집을 디지털화하고
                    <br className="hidden lg:block" />
                    AI 기반 텍스트 분석을 통해 당시 지식인 네트워크와
                    <br className="hidden lg:block" />
                    사상적 흐름을 규명하는 대규모 프로젝트입니다.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg text-gray-300">
                      <span className="font-bold">연구책임자:</span> 김연구 교수
                    </div>
                    <div className="flex items-center text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors text-xl">
                      프로젝트 상세{" "}
                      <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/cultural-heritage-vr">
              <Card className="hover:shadow-2xl transition-all duration-700 cursor-pointer group border-0 bg-white/10 backdrop-blur-md overflow-hidden relative transform hover:-translate-y-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-12 relative">
                  <div className="flex items-start justify-between mb-8">
                    <Badge className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-2xl text-lg px-6 py-3">
                      진행 중
                    </Badge>
                    <div className="text-lg text-gray-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      2023-2025
                    </div>
                  </div>
                  <h3 className="text-4xl font-black mb-8 text-white group-hover:text-blue-300 transition-colors duration-500">
                    한국 전통 건축물 VR/AR 복원
                  </h3>
                  <p className="text-gray-300 mb-10 leading-relaxed text-xl font-medium">
                    소실된 전통 건축물을 3D 모델링과
                    <br className="hidden lg:block" />
                    VR/AR 기술로 복원하여 몰입형 문화유산
                    <br className="hidden lg:block" />
                    교육 콘텐츠를 개발하는 프로젝트입니다.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg text-gray-300">
                      <span className="font-bold">연구책임자:</span> 박디지털 연구원
                    </div>
                    <div className="flex items-center text-blue-400 font-bold group-hover:text-blue-300 transition-colors text-xl">
                      프로젝트 상세{" "}
                      <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-20">
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white/30 hover:border-white/50 px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-white/10 backdrop-blur-md text-white text-xl font-bold"
              >
                모든 프로젝트 보기 <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News & Publications with Enhanced Cards */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Latest Publications */}
            <div>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-200 mb-6 shadow-lg">
                    <span className="text-sm font-bold text-emerald-800 tracking-wide">Publications</span>
                  </div>
                  <h2 className="text-5xl font-black text-slate-900">최신 연구 성과</h2>
                </div>
                <Link href="/publications">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center hover:shadow-xl transition-all duration-300 border-2 border-slate-300 px-6 py-3 rounded-xl font-bold"
                  >
                    전체보기 <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-8">
                {[
                  {
                    href: "/publications/1",
                    icon: FileText,
                    color: "emerald",
                    title: "머신러닝 기반 고전문학 작가 귀속 연구",
                    description: "딥러닝 기법을 활용한 조선시대 익명 작품의 작가 추정 방법론 개발",
                    authors: "김연구, 이텍스트",
                    date: "2024.12.20",
                  },
                  {
                    href: "/publications/2",
                    icon: Database,
                    color: "blue",
                    title: "디지털 문화유산 메타데이터 표준화 연구",
                    description: "국제 표준에 기반한 한국 문화유산 디지털 아카이브 구축 방안",
                    authors: "박아카이브, 최메타데이터",
                    date: "2024.12.15",
                  },
                  {
                    href: "/publications/3",
                    icon: BarChart3,
                    color: "purple",
                    title: "소셜미디어 기반 현대 문화 트렌드 분석",
                    description: "빅데이터 분석을 통한 한국 대중문화의 변화 패턴과 예측 모델",
                    authors: "이문화, 정소셜",
                    date: "2024.12.10",
                  },
                ].map((item, index) => (
                  <Link key={index} href={item.href}>
                    <Card className="p-10 hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-gradient-to-r from-white to-gray-50 group transform hover:-translate-y-2">
                      <div className="flex items-start space-x-8">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                        >
                          <item.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`font-black text-2xl mb-4 text-slate-900 group-hover:text-${item.color}-700 transition-colors duration-300`}
                          >
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed text-lg font-medium">{item.description}</p>
                          <div className="text-sm text-gray-500 font-semibold">
                            {item.date} | {item.authors}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Latest News & Events */}
            <div>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-200 mb-6 shadow-lg">
                    <span className="text-sm font-bold text-blue-800 tracking-wide">News & Events</span>
                  </div>
                  <h2 className="text-5xl font-black text-slate-900">소식 & 행사</h2>
                </div>
                <Link href="/news">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center hover:shadow-xl transition-all duration-300 border-2 border-slate-300 px-6 py-3 rounded-xl font-bold"
                  >
                    전체보기 <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-8">
                {[
                  {
                    href: "/news/winter-school-2025",
                    icon: Calendar,
                    color: "emerald",
                    badge: "교육 프로그램",
                    title: "2025 디지털 인문학 겨울학교 개최",
                    description: "대학원생과 연구자를 위한 디지털 인문학 연구 방법론 집중 교육 프로그램",
                    date: "2025년 1월 8-12일 (월-금)",
                  },
                  {
                    href: "/news/international-conference",
                    icon: Users,
                    color: "blue",
                    badge: "국제 학술대회",
                    title: "제4회 아시아 디지털 인문학 컨퍼런스",
                    description: "아시아 지역 디지털 인문학 연구 동향과 협력 방안을 논의하는 국제 학술대회",
                    date: "2025년 3월 15-17일 (토-월)",
                  },
                  {
                    href: "/news/research-grant",
                    icon: BookOpen,
                    color: "purple",
                    badge: "연구 소식",
                    title: "한국연구재단 중견연구자지원사업 선정",
                    description: "AI 기반 한국 고전문학 작품 분석 및 디지털 큐레이션 과제 3년간 지원",
                    date: "2024년 12월 18일",
                  },
                ].map((item, index) => (
                  <Link key={index} href={item.href}>
                    <Card
                      className={`p-10 border-l-8 border-l-${item.color}-500 hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gradient-to-r from-white to-gray-50 group transform hover:-translate-y-2`}
                    >
                      <div className="flex items-center space-x-6 mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <Badge
                          variant="secondary"
                          className={`bg-${item.color}-100 text-${item.color}-800 shadow-md text-sm px-4 py-2 font-bold`}
                        >
                          {item.badge}
                        </Badge>
                      </div>
                      <h3
                        className={`font-black text-2xl mb-4 text-slate-900 group-hover:text-${item.color}-700 transition-colors duration-300`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg font-medium">{item.description}</p>
                      <div className="text-sm text-gray-500 font-bold">{item.date}</div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

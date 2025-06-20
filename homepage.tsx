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
  Menu,
  Search,
  Globe,
  BarChart3,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="디지털인문융합기술연구소 로고" width={32} height={32} className="w-8 h-8" />
              <Link href="/" className="text-xl font-bold text-slate-800">
                디지털인문융합기술연구소
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-slate-900">
                  연구 분야 <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-slate-900">
                  연구 성과 <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
              </div>
              <Link href="/events" className="text-gray-700 hover:text-slate-900">
                학술 행사
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-slate-900">
                연구 자료
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-slate-900">
                연구소 소개
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                연구진 로그인
              </Button>
              <Button size="sm" className="bg-slate-800 hover:bg-slate-900">
                연구 참여
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Hero Card */}
          <Card className="relative overflow-hidden border-0 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700"></div>
            <CardContent className="relative p-10 text-white">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-3">디지털 기술로 여는</h2>
                  <h2 className="text-3xl font-bold">인문학의 새로운 지평</h2>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  빅데이터, AI, 디지털 아카이브를 활용하여
                  <br />
                  인문학 연구의 혁신을 이끌어갑니다
                </p>
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0 px-6 py-3">
                  연구 분야 탐색하기
                </Button>
              </div>
              <div className="absolute right-6 top-6 opacity-20">
                <Database className="w-24 h-24" />
              </div>
            </CardContent>
          </Card>

          {/* Right Hero Card */}
          <Card className="relative overflow-hidden border-0 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-slate-800"></div>
            <CardContent className="relative p-10 text-white">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-3">학제간 융합 연구로</h2>
                  <h2 className="text-3xl font-bold">미래 인문학 창조</h2>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  문학, 역사, 철학과 컴퓨터과학의
                  <br />
                  창의적 결합을 통한 혁신적 연구
                </p>
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0 px-6 py-3">
                  연구 프로젝트 보기
                </Button>
              </div>
              <div className="absolute right-6 top-6 opacity-20">
                <Cpu className="w-24 h-24" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">주요 연구 분야</h2>
          <p className="text-gray-600 text-lg">디지털 기술과 인문학의 융합을 통한 다양한 연구 영역</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-emerald-200">
            <div className="relative">
              <Badge className="absolute -top-3 -right-3 bg-emerald-600 text-xs">핵심</Badge>
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-emerald-700" />
              </div>
            </div>
            <h3 className="font-semibold text-base mb-2">텍스트 마이닝</h3>
            <p className="text-sm text-gray-600">고전문학 및 현대문학 텍스트 분석</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200">
            <div className="relative">
              <Badge className="absolute -top-3 -right-3 bg-blue-600 text-xs">핵심</Badge>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                <Database className="w-8 h-8 text-blue-700" />
              </div>
            </div>
            <h3 className="font-semibold text-base mb-2">디지털 아카이브</h3>
            <p className="text-sm text-gray-600">문화유산 디지털 보존 및 활용</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-purple-200">
            <div className="relative">
              <Badge className="absolute -top-3 -right-3 bg-purple-600 text-xs">신규</Badge>
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-purple-700" />
              </div>
            </div>
            <h3 className="font-semibold text-base mb-2">문화 데이터 분석</h3>
            <p className="text-sm text-gray-600">사회문화 현상의 정량적 분석</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-orange-200">
            <div className="relative">
              <Badge className="absolute -top-3 -right-3 bg-orange-600 text-xs">협업</Badge>
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-orange-700" />
              </div>
            </div>
            <h3 className="font-semibold text-base mb-2">디지털 지도학</h3>
            <p className="text-sm text-gray-600">공간정보를 활용한 인문학 연구</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-indigo-200">
            <div className="relative">
              <Badge className="absolute -top-3 -right-3 bg-indigo-600 text-xs">AI</Badge>
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Microscope className="w-8 h-8 text-indigo-700" />
              </div>
            </div>
            <h3 className="font-semibold text-base mb-2">계산 인문학</h3>
            <p className="text-sm text-gray-600">AI 기반 인문학 연구 방법론</p>
          </Card>
        </div>
      </section>

      {/* Latest Research & News */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Latest Research */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">최신 연구 성과</h2>
                <Button variant="outline" size="sm" className="flex items-center">
                  전체보기 <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">조선시대 문집 텍스트 마이닝을 통한 사상사 연구</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        머신러닝 기법을 활용한 조선 후기 지식인 네트워크 분석
                      </p>
                      <div className="text-xs text-gray-500">2024.12.15 | 김연구 교수</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-blue-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">한국 전통 건축물 3D 디지털 아카이브 구축</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        VR/AR 기술을 활용한 문화유산 보존 및 교육 콘텐츠 개발
                      </p>
                      <div className="text-xs text-gray-500">2024.12.10 | 박디지털 연구원</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-purple-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">소셜미디어 데이터를 활용한 현대 문화 트렌드 분석</h3>
                      <p className="text-sm text-gray-600 mb-2">빅데이터 분석을 통한 한국 대중문화 변화 패턴 연구</p>
                      <div className="text-xs text-gray-500">2024.12.05 | 이문화 박사</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">학술 행사</h2>
                <Button variant="outline" size="sm" className="flex items-center">
                  일정보기 <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-emerald-500">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                      워크샵
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">디지털 인문학 연구 방법론 워크샵</h3>
                  <p className="text-sm text-gray-600 mb-3">텍스트 마이닝과 데이터 시각화 실습</p>
                  <div className="text-sm text-gray-500">2024년 12월 28일 (토) 14:00-18:00</div>
                </Card>

                <Card className="p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      세미나
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">AI와 인문학의 만남: 새로운 연구 패러다임</h3>
                  <p className="text-sm text-gray-600 mb-3">국내외 전문가 초청 학술 세미나</p>
                  <div className="text-sm text-gray-500">2025년 1월 15일 (수) 10:00-17:00</div>
                </Card>

                <Card className="p-6 border-l-4 border-l-purple-500">
                  <div className="flex items-center space-x-3 mb-3">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      컨퍼런스
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">제3회 디지털 인문학 국제 컨퍼런스</h3>
                  <p className="text-sm text-gray-600 mb-3">아시아 디지털 인문학 연구 동향과 미래</p>
                  <div className="text-sm text-gray-500">2025년 2월 20-21일 (목-금)</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="디지털인문융합기술연구소 로고"
                  width={24}
                  height={24}
                  className="w-6 h-6 invert"
                />
                <h3 className="font-bold text-lg">디지털인문융합기술연구소</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                디지털 기술과 인문학의 융합을 통해
                <br />
                새로운 지식 창조와 사회적 가치 실현을
                <br />
                추구하는 연구기관입니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연구 분야</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    텍스트 마이닝
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    디지털 아카이브
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    문화 데이터 분석
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    계산 인문학
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연구 활동</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    연구 프로젝트
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    학술 논문
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    학술 행사
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    연구 자료
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>서울특별시 성북구 삼선교로 10바길 38,107호</p>
                <p>한성대학교 산학협력단</p>
                <p>전화: 02-760-4024</p>
                <p>이메일: naturaljeon@hansung.ac.kr</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 디지털인문융합기술연구소. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

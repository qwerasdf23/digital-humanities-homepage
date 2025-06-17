import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Users, Search, Filter, ExternalLink } from "lucide-react"
import Link from "next/link"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">연구 프로젝트</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디지털인문융합기술연구소에서 진행 중이거나 완료된 주요 연구 프로젝트들을 소개합니다.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="프로젝트명, 키워드로 검색..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              상태별
            </Button>
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              분야별
            </Button>
          </div>
        </div>

        {/* Project Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-slate-100">
              전체
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-emerald-50 hover:border-emerald-200">
              진행 중
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:border-blue-200">
              완료
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-purple-50 hover:border-purple-200">
              계획 중
            </Badge>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project 1 */}
          <Link href="/projects/joseon-texts">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge className="bg-emerald-600">진행 중</Badge>
                    <Badge variant="outline">텍스트 마이닝</Badge>
                  </div>
                  <div className="text-sm text-gray-500">2024-2026</div>
                </div>
                <h3 className="text-xl font-bold mb-3">조선시대 문집 디지털 아카이브 구축</h3>
                <p className="text-gray-600 mb-4">
                  조선시대 주요 문인들의 문집을 디지털화하고 AI 기반 텍스트 분석을 통해 당시 지식인 네트워크와 사상적
                  흐름을 규명하는 대규모 프로젝트
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>연구책임자: 김연구 교수</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>연구기간: 2024.03 - 2026.02 (3년)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-emerald-600">한국연구재단 중견연구자지원사업</div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Project 2 */}
          <Link href="/projects/cultural-heritage-vr">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge className="bg-emerald-600">진행 중</Badge>
                    <Badge variant="outline">디지털 아카이브</Badge>
                  </div>
                  <div className="text-sm text-gray-500">2023-2025</div>
                </div>
                <h3 className="text-xl font-bold mb-3">한국 전통 건축물 VR/AR 복원</h3>
                <p className="text-gray-600 mb-4">
                  소실된 전통 건축물을 3D 모델링과 VR/AR 기술로 복원하여 몰입형 문화유산 교육 콘텐츠를 개발하는 프로젝트
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>연구책임자: 박디지털 연구원</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>연구기간: 2023.09 - 2025.08 (2년)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-blue-600">문화체육관광부 문화유산 디지털화</div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Project 3 */}
          <Link href="/projects/social-media-culture">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge className="bg-blue-600">완료</Badge>
                    <Badge variant="outline">문화 데이터 분석</Badge>
                  </div>
                  <div className="text-sm text-gray-500">2022-2024</div>
                </div>
                <h3 className="text-xl font-bold mb-3">소셜미디어 기반 현대 문화 트렌드 분석</h3>
                <p className="text-gray-600 mb-4">
                  빅데이터 분석을 통한 한국 대중문화의 변화 패턴과 예측 모델 개발 연구
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>연구책임자: 이문화 박사</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>연구기간: 2022.03 - 2024.02 (2년)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-purple-600">한국연구재단 신진연구자지원사업</div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Project 4 */}
          <Link href="/projects/gis-historical-mapping">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge className="bg-emerald-600">진행 중</Badge>
                    <Badge variant="outline">디지털 지도학</Badge>
                  </div>
                  <div className="text-sm text-gray-500">2024-2025</div>
                </div>
                <h3 className="text-xl font-bold mb-3">GIS 기반 조선시대 역사 지도 구축</h3>
                <p className="text-gray-600 mb-4">
                  지리정보시스템을 활용하여 조선시대 행정구역, 교통로, 문화시설 등을 시각화하는 디지털 역사 지도
                  프로젝트
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>연구책임자: 최지리 교수</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>연구기간: 2024.06 - 2025.05 (1년)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-orange-600">성균관대학교 교내연구비</div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Project 5 */}
          <Link href="/projects/ai-classical-literature">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge className="bg-purple-600">계획 중</Badge>
                    <Badge variant="outline">계산 인문학</Badge>
                  </div>
                  <div className="text-sm text-gray-500">2025-2027</div>
                </div>
                <h3 className="text-xl font-bold mb-3">AI 기반 고전문학 작가 귀속 연구</h3>
                <p className="text-gray-600 mb-4">
                  딥러닝과 자연어처리 기술을 활용하여 익명 또는 작가 미상의 고전문학 작품의 작가를 추정하는 연구
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>연구책임자: 한인공지능 박사</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>연구기간: 2025.03 - 2027.02 (2년)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-indigo-600">한국연구재단 기초연구사업</div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Project 6 */}
          <Link href="/projects/network-analysis-scholars">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge className="bg-blue-600">완료</Badge>
                    <Badge variant="outline">네트워크 분석</Badge>
                  </div>
                  <div className="text-sm text-gray-500">2021-2023</div>
                </div>
                <h3 className="text-xl font-bold mb-3">근현대 지식인 네트워크 분석</h3>
                <p className="text-gray-600 mb-4">
                  근현대 한국 지식인들의 교류 관계를 네트워크 분석 기법으로 시각화하고 패턴을 분석하는 연구
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>연구책임자: 정네트워크 교수</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>연구기간: 2021.09 - 2023.08 (2년)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-teal-600">인문사회연구소지원사업</div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            더 많은 프로젝트 보기
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

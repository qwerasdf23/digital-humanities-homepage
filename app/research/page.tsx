import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Database, BarChart3, Globe, Microscope, ChevronRight } from "lucide-react"
import Link from "next/link"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">연구 분야</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디지털인문융합기술연구소는 인문학과 디지털 기술의 융합을 통해 새로운 연구 패러다임을 제시하고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/research/text-mining">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-emerald-700" />
                  </div>
                  <Badge className="bg-emerald-600">핵심 연구</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">텍스트 마이닝</h3>
                <p className="text-gray-600 mb-4">
                  고전문학과 현대문학 텍스트에 대한 컴퓨터 기반 분석을 통해 새로운 문학적 통찰을 발견합니다.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/research/digital-archive">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-blue-700" />
                  </div>
                  <Badge className="bg-blue-600">핵심 연구</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">디지털 아카이브</h3>
                <p className="text-gray-600 mb-4">
                  문화유산과 역사 자료의 디지털 보존 및 활용을 통해 미래 세대에 전승합니다.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/research/cultural-analytics">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-purple-700" />
                  </div>
                  <Badge className="bg-purple-600">신규 연구</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">문화 데이터 분석</h3>
                <p className="text-gray-600 mb-4">
                  빅데이터 기술을 활용하여 사회문화 현상을 정량적으로 분석하고 해석합니다.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/research/digital-mapping">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-orange-700" />
                  </div>
                  <Badge className="bg-orange-600">협업 연구</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">디지털 지도학</h3>
                <p className="text-gray-600 mb-4">
                  GIS와 공간정보 기술을 활용하여 역사와 문화의 공간적 차원을 탐구합니다.
                </p>
                <div className="flex items-center text-orange-600 font-medium">
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/research/computational-humanities">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <Microscope className="w-6 h-6 text-indigo-700" />
                  </div>
                  <Badge className="bg-indigo-600">AI 연구</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">계산 인문학</h3>
                <p className="text-gray-600 mb-4">
                  인공지능과 머신러닝 기술을 인문학 연구에 적용하여 새로운 연구 방법론을 개발합니다.
                </p>
                <div className="flex items-center text-indigo-600 font-medium">
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

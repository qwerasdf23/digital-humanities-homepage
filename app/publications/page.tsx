import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Search, Filter, Download } from "lucide-react"
import Link from "next/link"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">연구 성과</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디지털인문융합기술연구소의 최신 연구 논문과 프로젝트 결과물을 확인하세요.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="논문 제목, 저자, 키워드로 검색..." className="pl-10" />
            </div>
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            필터
          </Button>
        </div>

        <div className="grid gap-6">
          <Link href="/publications/1">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-emerald-600 mr-3">텍스트 마이닝</Badge>
                      <Badge variant="outline">2024</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">조선시대 문집 텍스트 마이닝을 통한 사상사 연구</h3>
                    <p className="text-gray-600 mb-3">
                      머신러닝 기법을 활용한 조선 후기 지식인 네트워크 분석을 통해 당시의 사상적 흐름과 지식 전파 경로를
                      규명한 연구
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>김연구, 박텍스트, 이마이닝</span>
                      <span className="mx-2">•</span>
                      <span>디지털인문학연구 제15권 2호</span>
                      <span className="mx-2">•</span>
                      <span>2024.12.15</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-emerald-700" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/publications/2">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-blue-600 mr-3">디지털 아카이브</Badge>
                      <Badge variant="outline">2024</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">한국 전통 건축물 3D 디지털 아카이브 구축</h3>
                    <p className="text-gray-600 mb-3">
                      VR/AR 기술을 활용한 문화유산 보존 및 교육 콘텐츠 개발에 관한 종합적 연구 결과
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>박디지털, 최아카이브, 김문화재</span>
                      <span className="mx-2">•</span>
                      <span>문화유산디지털화연구 제8권 1호</span>
                      <span className="mx-2">•</span>
                      <span>2024.12.10</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-700" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/publications/3">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-purple-600 mr-3">문화 데이터 분석</Badge>
                      <Badge variant="outline">2024</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">소셜미디어 데이터를 활용한 현대 문화 트렌드 분석</h3>
                    <p className="text-gray-600 mb-3">
                      빅데이터 분석을 통한 한국 대중문화 변화 패턴 연구 및 예측 모델 개발
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>이문화, 정소셜, 한트렌드</span>
                      <span className="mx-2">•</span>
                      <span>문화연구와빅데이터 제3권 4호</span>
                      <span className="mx-2">•</span>
                      <span>2024.12.05</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-purple-700" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            더 많은 논문 보기
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

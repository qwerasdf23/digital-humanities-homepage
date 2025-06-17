import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Users, Search, Filter, BookOpen, Award, Megaphone } from "lucide-react"
import Link from "next/link"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">소식 & 행사</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디지털인문융합기술연구소의 최신 소식과 학술 행사 정보를 확인하세요.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="제목, 내용으로 검색..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              카테고리
            </Button>
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              날짜순
            </Button>
          </div>
        </div>

        {/* News Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-slate-100">
              전체
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-emerald-50 hover:border-emerald-200">
              공지사항
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:border-blue-200">
              학술 행사
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-purple-50 hover:border-purple-200">
              연구 소식
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-orange-50 hover:border-orange-200">
              교육 프로그램
            </Badge>
          </div>
        </div>

        {/* Featured News */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">주요 소식</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Link href="/news/winter-school-2025">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <Badge className="bg-emerald-100 text-emerald-800">교육 프로그램</Badge>
                    <span className="text-sm text-gray-500">2024.12.20</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">2025 디지털 인문학 겨울학교 참가자 모집</h3>
                  <p className="text-gray-600 mb-4">
                    대학원생과 연구자를 위한 디지털 인문학 연구 방법론 집중 교육 프로그램을 개최합니다. 텍스트 마이닝,
                    데이터 시각화, GIS 활용법 등을 실습 중심으로 학습할 수 있습니다.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>일정:</strong> 2025년 1월 8-12일 (월-금) | <strong>장소:</strong> 성균관대학교 인문관
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/research-grant">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-5 h-5 text-purple-600" />
                    <Badge className="bg-purple-100 text-purple-800">연구 소식</Badge>
                    <span className="text-sm text-gray-500">2024.12.18</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">한국연구재단 중견연구자지원사업 선정</h3>
                  <p className="text-gray-600 mb-4">
                    김연구 교수가 연구책임자로 참여한 "AI 기반 한국 고전문학 작품 분석 및 디지털 큐레이션" 과제가
                    한국연구재단 중견연구자지원사업에 선정되어 3년간 총 15억원을 지원받게 되었습니다.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>연구기간:</strong> 2025.03 - 2028.02 (3년) | <strong>지원금액:</strong> 15억원
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* All News */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">전체 소식</h2>
          <div className="space-y-6">
            <Link href="/news/international-conference">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          국제 학술대회
                        </Badge>
                        <span className="text-sm text-gray-500">2024.12.15</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">제4회 아시아 디지털 인문학 컨퍼런스 개최 안내</h3>
                      <p className="text-gray-600 mb-2">
                        아시아 지역 디지털 인문학 연구 동향과 협력 방안을 논의하는 국제 학술대회를 개최합니다.
                      </p>
                      <div className="text-sm text-gray-500">2025년 3월 15-17일 (토-월) | 서울 코엑스</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/new-publication">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <BookOpen className="w-5 h-5 text-emerald-600" />
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                          연구 성과
                        </Badge>
                        <span className="text-sm text-gray-500">2024.12.12</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">국제 학술지 'Digital Humanities Quarterly' 논문 게재</h3>
                      <p className="text-gray-600 mb-2">
                        이자연어 교수의 "Machine Learning Approaches to Classical Korean Literature Analysis" 논문이
                        게재되었습니다.
                      </p>
                      <div className="text-sm text-gray-500">Digital Humanities Quarterly, Vol. 18, No. 4</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/workshop-recap">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="w-5 h-5 text-orange-600" />
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                          행사 후기
                        </Badge>
                        <span className="text-sm text-gray-500">2024.12.10</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">디지털 인문학 연구 방법론 워크샵 성황리 종료</h3>
                      <p className="text-gray-600 mb-2">
                        지난 12월 7일 개최된 워크샵에 전국 대학의 연구자 50여 명이 참석하여 열띤 토론을 벌였습니다.
                      </p>
                      <div className="text-sm text-gray-500">참석자 52명 | 만족도 4.8/5.0</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/collaboration-mou">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Megaphone className="w-5 h-5 text-purple-600" />
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          공지사항
                        </Badge>
                        <span className="text-sm text-gray-500">2024.12.08</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">옥스퍼드 대학교 디지털인문학센터와 MOU 체결</h3>
                      <p className="text-gray-600 mb-2">
                        국제 공동연구 및 연구자 교류를 위한 업무협약을 체결하여 글로벌 연구 네트워크를 확장했습니다.
                      </p>
                      <div className="text-sm text-gray-500">협약 기간: 5년 | 연구자 교환 프로그램 포함</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/database-launch">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          연구 성과
                        </Badge>
                        <span className="text-sm text-gray-500">2024.12.05</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">조선시대 문집 디지털 데이터베이스 공개</h3>
                      <p className="text-gray-600 mb-2">
                        3년간의 연구 결과물인 조선시대 주요 문인 50명의 문집 디지털 데이터베이스를 일반에 공개했습니다.
                      </p>
                      <div className="text-sm text-gray-500">총 15만 편의 작품 수록 | 무료 이용 가능</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              더 많은 소식 보기
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

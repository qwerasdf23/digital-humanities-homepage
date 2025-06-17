import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin, Clock, BookOpen } from "lucide-react"
import Link from "next/link"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">학술 행사</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디지털인문융합기술연구소에서 주최하는 다양한 학술 행사에 참여하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/events/1">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-l-4 border-l-emerald-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-emerald-600 mr-2" />
                  <Badge className="bg-emerald-100 text-emerald-800">워크샵</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">디지털 인문학 연구 방법론 워크샵</h3>
                <p className="text-gray-600 mb-4">
                  텍스트 마이닝과 데이터 시각화 실습을 통한 디지털 인문학 연구 방법 학습
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>2024년 12월 28일 (토) 14:00-18:00</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>성균관대학교 인문관 201호</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>정원 30명</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/events/2">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <Badge className="bg-blue-100 text-blue-800">세미나</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">AI와 인문학의 만남: 새로운 연구 패러다임</h3>
                <p className="text-gray-600 mb-4">
                  국내외 전문가 초청 학술 세미나를 통한 AI 기반 인문학 연구 동향 파악
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>2025년 1월 15일 (수) 10:00-17:00</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>성균관대학교 국제관 대강당</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>정원 200명</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/events/3">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                  <Badge className="bg-purple-100 text-purple-800">컨퍼런스</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">제3회 디지털 인문학 국제 컨퍼런스</h3>
                <p className="text-gray-600 mb-4">아시아 디지털 인문학 연구 동향과 미래를 논의하는 국제 학술대회</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>2025년 2월 20-21일 (목-금)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>서울 코엑스 컨벤션센터</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>정원 500명</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-slate-800 hover:bg-slate-900">
            행사 참가 신청
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

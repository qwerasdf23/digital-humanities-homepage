import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe, MapPin, Phone, Mail } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 연구소 소개 */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">연구소 소개</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              디지털인문융합기술연구소(Digital Humanitas Tech Lab.)는 인문학과 디지털 기술의 창의적 융합을 통해 새로운 지식 창조와 사회적 가치 실현을 추구하는 연구기관입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 소장 인사말 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">소장 인사말</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">안녕하십니까, 디지털인문융합기술연구소 소장 전준현입니다.</p>
                <p className="mb-4">
                  우리 연구소는 빠르게 변화하는 디지털 기술을 인문학적 관점에서 탐구하고, 인문학 연구의 경계를 확장하는 새로운 연구 패러다임을 제시하고자 설립되었습니다. 메타버스, 생성형 AI, 햅틱 디바이스 등 첨단 기술을 인문학적 성찰과 융합하여 혁신적인 연구를 수행하고 있습니다.
                </p>
                <p className="mb-4">
                  인문적 감성과 디지털 기술이 만나는 융합 지점에서 인간과 사회에 대한 깊은 이해를 추구하며, 초학제적 협력을 통해 연구의 지평을 넓혀 나가고자 합니다. 텍스트 마이닝, 디지털 아카이브, 문화 데이터 분석 등 다학제적 연구 방법을 적극 활용하여 글로벌 연구 성과 창출과 인재 양성에 기여하고자 노력하겠습니다.
                </p>
              </div>
              <div className="mt-8">
                <div className="font-semibold text-slate-900">전준현</div>
                <div className="text-gray-600">디지털인문융합기술연구소 소장</div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-80 h-80 bg-gray-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Users className="w-24 h-24 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">소장 프로필 사진</p>
            </div>
          </div>
        </div>
      </section>

      {/* 설립 목적 및 비전 */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">설립 목적 및 비전</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">설립 목적</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>디지털 기술을 활용한 인문학 연구 방법론 혁신</li>
                  <li>인문학과 최첨단 기술의 창의적 융합 연구 추진</li>
                  <li>초학제적 협력을 통한 융합적 디지털 인문 발전 기여</li>
                  <li>국가 지원 사업을 통한 종합적 연구 촉진</li>
                  <li>디지털 인문학 전문 인력 양성</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">비전</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>글로벌 디지털 인문학 연구의 중심 연구소로 성장</li>
                  <li>사회적 가치를 실현하는 실천적 연구 활동 수행</li>
                  <li>혁신적 융합 연구를 통한 새로운 인문학 패러다임 제시</li>
                  <li>국제적 연구 네트워크 구축 및 협력 확대</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">핵심 가치</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">연구소가 추구하는 네 가지 핵심 가치와 원칙입니다.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">혁신</h3>
                <p className="text-gray-600 text-sm">디지털 기술과 인문학의 창의적 융합을 통한 혁신적 연구 방법론 개발</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">협력</h3>
                <p className="text-gray-600 text-sm">인문학, 컴퓨터과학, 데이터사이언스 분야의 전문가들과 긴밀한 협력</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">우수성</h3>
                <p className="text-gray-600 text-sm">국내외 학술지 게재 및 국제 학술대회 발표를 통한 연구 성과 확산</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">개방성</h3>
                <p className="text-gray-600 text-sm">세계 유수 대학 및 연구기관과의 국제 공동연구 및 학술 교류</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 조직 구성 */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">조직 구성</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">연구소장</h3>
                <p className="mb-2">전준현 교수 (한성대학교 교수)</p>
                <h3 className="text-2xl font-bold mt-8 mb-4">연구 분야별 책임자</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>텍스트 마이닝: 이자연어 교수</li>
                  <li>디지털 아카이브: 박문화재 교수</li>
                  <li>문화 데이터 분석: 정빅데이터 교수</li>
                  <li>계산 인문학: 최인공지능 교수</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">협력 기관</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>한성대학교</li>
                  <li>한국학중앙연구원</li>
                  <li>국립중앙도서관</li>
                  <li>문화재청 국립문화재연구소</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 연락처 정보 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">연락처 정보</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-700 mr-2" />
                  <span>서울특별시 성북구 삼선교로 10바길 38 상상밸리3 1층 107호</span>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-blue-700 mr-2" />
                  <span>대표전화: 02-760-1234</span>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-blue-700 mr-2" />
                  <span>팩스: 02-760-5678</span>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-blue-700 mr-2" />
                  <span>일반문의: info@dhct.skku.edu</span>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-blue-700 mr-2" />
                  <span>연구협력: research@dhct.skku.edu</span>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-blue-700 mr-2" />
                  <span>행사문의: events@dhct.skku.edu</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

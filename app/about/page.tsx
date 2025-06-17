import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe, MapPin, Phone, Mail } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">연구소 소개</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              디지털인문융합기술연구소는 인문학과 디지털 기술의 융합을 통해 새로운 지식 창조와 사회적 가치 실현을
              추구하는 연구기관입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">소장 인사말</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">안녕하십니까. 디지털인문융합기술연구소 소장 김디지털입니다.</p>
                <p className="mb-4">
                  우리 연구소는 급속히 발전하는 디지털 기술을 인문학 연구에 적극적으로 도입하여 전통적인 인문학 연구의
                  한계를 극복하고, 새로운 연구 패러다임을 제시하기 위해 설립되었습니다.
                </p>
                <p className="mb-4">
                  인문학적 성찰과 디지털 기술의 혁신이 만나는 지점에서 우리는 인간과 사회에 대한 더 깊은 이해를
                  추구합니다. 텍스트 마이닝, 디지털 아카이브, 문화 데이터 분석 등의 첨단 기술을 활용하여 인문학적 통찰을
                  깊이 있게 탐구하고, 이를 통해 사회에 기여하는 것이 우리의 목표입니다.
                </p>
                <p>
                  앞으로도 학제간 협력과 국제적 네트워크를 바탕으로 글로벌 수준의 연구 성과를 창출하며, 차세대 디지털
                  인문학 연구자 양성에도 힘쓰겠습니다.
                </p>
              </div>
              <div className="mt-8">
                <div className="font-semibold text-slate-900">김디지털</div>
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

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">설립 목적 및 비전</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              디지털 기술과 인문학의 창의적 융합을 통한 새로운 지식 창조
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">설립 목적</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 디지털 기술을 활용한 인문학 연구 방법론 혁신</li>
                  <li>• 전통 인문학과 첨단 기술의 융합 연구 추진</li>
                  <li>• 인문학적 통찰을 통한 디지털 문명 발전 기여</li>
                  <li>• 학제간 협력을 통한 새로운 지식 창조</li>
                  <li>• 디지털 인문학 전문 인력 양성</li>
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
                  <li>• 아시아 디지털 인문학 연구의 허브 역할</li>
                  <li>• 국제적 수준의 융합 연구 성과 창출</li>
                  <li>• 사회적 가치 실현을 위한 연구 활동</li>
                  <li>• 미래 지향적 인문학 교육 모델 제시</li>
                  <li>• 글로벌 연구 네트워크 구축 및 확장</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">핵심 가치</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">연구소가 추구하는 네 가지 핵심 가치와 원칙</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">혁신</h3>
                <p className="text-gray-600 text-sm">
                  디지털 기술과 인문학의 창의적 융합을 통한 새로운 연구 방법론 개발
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">협력</h3>
                <p className="text-gray-600 text-sm">
                  인문학, 컴퓨터과학, 데이터사이언스 분야의 전문가들과의 긴밀한 협업
                </p>
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

      {/* History */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">연구소 연혁</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2020년 설립 이후 지속적인 성장과 발전을 이어온 연구소의 주요 발자취
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-24 text-lg font-bold text-slate-600 flex-shrink-0">2024</div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">AI 기반 연구 방법론 개발 및 국제 협력 확대</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 한국연구재단 중견연구자지원사업 선정 (3년간 15억원)</li>
                  <li>• 하버드 대학교 디지털 인문학 센터와 MOU 체결</li>
                  <li>• 제3회 아시아 디지털 인문학 컨퍼런스 성공 개최 (15개국 200명 참석)</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-24 text-lg font-bold text-slate-600 flex-shrink-0">2023</div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">연구 성과 확산 및 교육 프로그램 강화</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 디지털 인문학 대학원 협동과정 신설</li>
                  <li>• 옥스퍼드 대학교, 도쿄대학교와 공동연구 협약</li>
                  <li>• 국제 학술지 'Digital Humanities Quarterly' 특집호 발간</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-24 text-lg font-bold text-slate-600 flex-shrink-0">2022</div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">대규모 연구 프로젝트 수주 및 인력 확충</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 문화체육관광부 '한국 문화유산 디지털 아카이브 구축' 사업 선정</li>
                  <li>• 연구진 25명으로 확대 (교수진 8명, 연구원 17명)</li>
                  <li>• 제2회 디지털 인문학 국제 컨퍼런스 개최</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-24 text-lg font-bold text-slate-600 flex-shrink-0">2021</div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">첫 번째 국제 컨퍼런스 개최 및 네트워크 구축</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 제1회 아시아 디지털 인문학 컨퍼런스 개최 (8개국 120명 참석)</li>
                  <li>• 킹스칼리지 런던 디지털랩과 연구 협력 협정</li>
                  <li>• 첫 번째 연구 성과물 '조선시대 문집 텍스트 마이닝' 논문 발표</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-24 text-lg font-bold text-slate-600 flex-shrink-0">2020</div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">디지털인문융합기술연구소 공식 설립</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 성균관대학교 부설 연구기관으로 공식 출범</li>
                  <li>• 초대 소장 김디지털 교수 취임</li>
                  <li>• 연구진 12명으로 시작 (교수진 5명, 연구원 7명)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization & Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Organization */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">조직 구성</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">연구소장</h4>
                      <p className="text-gray-600">김디지털 교수 (성균관대학교 국어국문학과)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">연구 분야별 책임자</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 텍스트 마이닝: 이자연어 교수</li>
                        <li>• 디지털 아카이브: 박문화재 교수</li>
                        <li>• 문화 데이터 분석: 정빅데이터 교수</li>
                        <li>• 계산 인문학: 최인공지능 교수</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">협력 기관</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 성균관대학교 인문과학연구원</li>
                        <li>• 한국학중앙연구원</li>
                        <li>• 국립중앙도서관</li>
                        <li>• 문화재청 국립문화재연구소</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">연락처 정보</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-slate-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">주소</h3>
                        <p className="text-gray-600">
                          (03063) 서울특별시 종로구 성균관로 25-2
                          <br />
                          성균관대학교 인문사회과학캠퍼스
                          <br />
                          인문관 3층 301-305호
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-slate-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">전화 및 팩스</h3>
                        <p className="text-gray-600">
                          대표전화: 02-760-1234
                          <br />
                          팩스: 02-760-5678
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-slate-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">이메일</h3>
                        <p className="text-gray-600">
                          일반문의: info@dhct.skku.edu
                          <br />
                          연구협력: research@dhct.skku.edu
                          <br />
                          행사문의: events@dhct.skku.edu
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Users, Calendar, BookOpen } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">문의하기</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디지털인문융합기술연구소와 함께 새로운 연구에 참여하거나 궁금한 사항이 있으시면 언제든 연락주세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
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
                      <h3 className="font-semibold mb-2">전화</h3>
                      <p className="text-gray-600">
                        대표전화: 02-760-4024
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
                      <div className="space-y-1 text-gray-600">
                        <p>
                          <strong>일반문의:</strong> info@dhct.skku.edu
                        </p>
                        <p>
                          <strong>연구협력:</strong> research@dhct.skku.edu
                        </p>
                        <p>
                          <strong>행사문의:</strong> events@dhct.skku.edu
                        </p>
                        <p>
                          <strong>교육문의:</strong> education@dhct.skku.edu
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">운영시간</h3>
                      <div className="text-gray-600">
                        <p>
                          <strong>평일:</strong> 09:00 - 18:00
                        </p>
                        <p>
                          <strong>점심시간:</strong> 12:00 - 13:00
                        </p>
                        <p>
                          <strong>주말 및 공휴일:</strong> 휴무
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">빠른 문의</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">연구 협력</h4>
                    <p className="text-sm text-gray-600">공동연구 및 협력 제안</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">행사 참가</h4>
                    <p className="text-sm text-gray-600">워크샵 및 세미나 신청</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">자료 요청</h4>
                    <p className="text-sm text-gray-600">연구 자료 및 데이터 문의</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">온라인 문의</h2>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">이름 *</label>
                      <Input placeholder="이름을 입력하세요" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">소속 기관</label>
                      <Input placeholder="소속 기관을 입력하세요" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                    <Input type="email" placeholder="이메일 주소를 입력하세요" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">전화번호</label>
                    <Input placeholder="전화번호를 입력하세요" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">문의 유형 *</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500">
                      <option value="">문의 유형을 선택하세요</option>
                      <option value="research">연구 협력 문의</option>
                      <option value="event">학술 행사 참가</option>
                      <option value="education">교육 프로그램 문의</option>
                      <option value="data">자료 및 데이터 요청</option>
                      <option value="media">언론 및 보도 문의</option>
                      <option value="other">기타 문의</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">제목 *</label>
                    <Input placeholder="문의 제목을 입력하세요" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용 *</label>
                    <Textarea placeholder="문의하실 내용을 자세히 작성해주세요" rows={6} className="resize-none" />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" className="mt-1" />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      개인정보 수집 및 이용에 동의합니다. (필수)
                    </label>
                  </div>

                  <Button className="w-full bg-slate-800 hover:bg-slate-900 py-3">문의 보내기</Button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>개인정보 처리방침:</strong> 수집된 개인정보는 문의 응답 목적으로만 사용되며, 관련 법령에
                    따라 안전하게 관리됩니다. 문의 처리 완료 후 즉시 파기됩니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">찾아오시는 길</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>지도 영역</p>
                      <p className="text-sm">성균관대학교 인문사회과학캠퍼스</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">교통 안내</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-emerald-600 mb-2">지하철</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 4호선 혜화역 4번 출구 (도보 5분)</li>
                        <li>• 1호선 종로3가역 5번 출구 (도보 10분)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">버스</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 간선버스: 143, 273, 710</li>
                        <li>• 지선버스: 7025, 7212</li>
                        <li>• 정류장: 성균관대 앞</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600 mb-2">자가용</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 내비게이션: 성균관대학교 인문사회과학캠퍼스</li>
                        <li>• 주차: 교내 유료 주차장 이용</li>
                        <li>• 주차요금: 시간당 2,000원</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink, Users } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">구성원</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디지털인문융합기술연구소의 전문 연구진과 운영진을 소개합니다.
          </p>
        </div>

        {/* Director */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">연구소장</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                  <Badge className="bg-slate-800">연구소장</Badge>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">전준현</h3>
                  <p className="text-gray-600 mb-4">한성대학교 문학문화컨텐츠학과 부교수</p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>
                      <strong>전공분야:</strong> 디지털 콘텐츠 기획/제작, 메타버스, 햅틱 디바이스, 인공지능
                    </p>
                    <p>
                      <strong>학위:</strong> 건국대학교 문화콘텐츠학 박사
                    </p>
                    <p>
                      <strong>주요 경력:</strong> 주식회사 너즈 대표, 한국영상문화학회 학술이사, 한국축제콘텐츠협회 이사
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-slate-600">
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">naturaljeon@hansung.ac.kr</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="text-sm">개인 홈페이지</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Faculty */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">교수진</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <Badge className="bg-emerald-600">조교수</Badge>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">오세종</h3>
                <p className="text-gray-600 text-center mb-4">AI응용학과 조교수</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <strong>전공:</strong> 마케팅, 자연어처리, 텍스트 마이닝
                  </p>
                  <p>
                    <strong>연구분야:</strong> 과학 사회학, 인공지능, 데이터 커뮤니케이션 
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm"></span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <Badge className="bg-blue-600">겸임교수</Badge>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">김정웅</h3>
                <p className="text-gray-600 text-center mb-4">문학문화컨텐츠 교수</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <strong>전공:</strong> 문확컨텐츠학
                  </p>
                  <p>
                    <strong>연구분야:</strong> 박물관학,영상컨텐츠,인공지능 컨텐츠 
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">archive@dhct.skku.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <Badge className="bg-purple-600">교수</Badge>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">정빅데이터</h3>
                <p className="text-gray-600 text-center mb-4">통계학과 교수</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <strong>전공:</strong> 데이터사이언스, 통계학
                  </p>
                  <p>
                    <strong>연구분야:</strong> 문화 데이터 분석
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">bigdata@dhct.skku.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <Badge className="bg-indigo-600">교수</Badge>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">최인공지능</h3>
                <p className="text-gray-600 text-center mb-4">컴퓨터공학과 교수</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <strong>전공:</strong> 인공지능, 머신러닝
                  </p>
                  <p>
                    <strong>연구분야:</strong> 계산 인문학
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">ai@dhct.skku.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <Badge className="bg-orange-600">교수</Badge>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">최지리</h3>
                <p className="text-gray-600 text-center mb-4">지리학과 교수</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <strong>전공:</strong> 지리정보시스템, 역사지리
                  </p>
                  <p>
                    <strong>연구분야:</strong> 디지털 지도학
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">gis@dhct.skku.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <Badge className="bg-teal-600">교수</Badge>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">정네트워크</h3>
                <p className="text-gray-600 text-center mb-4">사회학과 교수</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <strong>전공:</strong> 사회네트워크분석, 사회학
                  </p>
                  <p>
                    <strong>연구분야:</strong> 네트워크 분석
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">network@dhct.skku.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </section>

        Research Staff
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">연구원</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <Badge variant="outline">연구원</Badge>
                </div>
                <h3 className="text-lg font-bold text-center mb-1">안찬우</h3>
                <p className="text-gray-600 text-center text-sm mb-3">영상 컨텐츠,AI 콘텐츠 기획/제작</p>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-3 h-3 mr-1" />
                    <span className="text-xs">ancw0302@hansung.ac.kr</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <Badge variant="outline">연구원</Badge>
                </div>
                <h3 className="text-lg font-bold text-center mb-1">김진성</h3>
                <p className="text-gray-600 text-center text-sm mb-3">게임 컨텐츠 기획/제작</p>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-3 h-3 mr-1" />
                    <span className="text-xs">jinsung@hansung.ac.kr</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <Badge variant="outline">연구원</Badge>
                </div>
                <h3 className="text-lg font-bold text-center mb-1">안은정</h3>
                <p className="text-gray-600 text-center text-sm mb-3">마케팅 기획/콘텐츠 제작</p>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-3 h-3 mr-1" />
                    <span className="text-xs">aidev@hansung.ac.kr</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <Badge variant="outline">연구원</Badge>
                </div>
                <h3 className="text-lg font-bold text-center mb-1">김메타데이터</h3>
                <p className="text-gray-600 text-center text-sm mb-3">데이터 큐레이션</p>
                <div className="text-center">
                  <div className="flex items-center justify-center text-slate-600">
                    <Mail className="w-3 h-3 mr-1" />
                    <span className="text-xs">metadata@dhct.skku.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </section>

        {/* Advisory Board */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">자문위원</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">존 스미스 (John Smith)</h3>
                <p className="text-gray-600 mb-2">하버드대학교 디지털인문학센터 소장</p>
                <p className="text-sm text-gray-500">디지털 인문학 방법론 자문</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">다나카 히로시 (田中寛)</h3>
                <p className="text-gray-600 mb-2">도쿄대학교 정보학환 교수</p>
                <p className="text-sm text-gray-500">아시아 디지털 아카이브 자문</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">이영희</h3>
                <p className="text-gray-600 mb-2">한국학중앙연구원 원장</p>
                <p className="text-sm text-gray-500">한국학 연구 자문</p>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Administrative Staff */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">운영진</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="font-bold mb-1">안찬우</h3>
                <p className="text-gray-600 text-sm mb-2">랩 매니저</p>
                <p className="text-xs text-gray-500">ancw0302@hansung.ac.kr</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="font-bold mb-1">김진성</h3>
                <p className="text-gray-600 text-sm mb-2">랩 부매니저</p>
                <p className="text-xs text-gray-500">jinsung@hansung.ac.kr</p>
              </CardContent>
            </Card>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

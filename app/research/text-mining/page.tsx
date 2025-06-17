import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Users, Calendar, Download } from "lucide-react"
import Link from "next/link"
import Header from "../../../components/header"
import Footer from "../../../components/footer"

export default function TextMiningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">
              홈
            </Link>{" "}
            /
            <Link href="/research" className="hover:text-gray-700 ml-1">
              연구 분야
            </Link>{" "}
            /<span className="ml-1">텍스트 마이닝</span>
          </nav>

          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mr-6">
              <FileText className="w-8 h-8 text-emerald-700" />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <h1 className="text-3xl font-bold text-slate-900 mr-4">텍스트 마이닝</h1>
                <Badge className="bg-emerald-600">핵심 연구</Badge>
              </div>
              <p className="text-gray-600">고전문학과 현대문학 텍스트에 대한 컴퓨터 기반 분석</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">연구 개요</h2>
              <p className="text-gray-600 mb-6">
                텍스트 마이닝 연구 분야에서는 자연어 처리 기술과 머신러닝 알고리즘을 활용하여 한국 고전문학과 현대문학
                텍스트를 분석합니다. 이를 통해 기존의 인문학적 해석을 보완하고 새로운 문학적 통찰을 발견하는 것을 목표로
                합니다.
              </p>

              <h3 className="text-xl font-bold mb-4">주요 연구 방법</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>형태소 분석 및 구문 분석을 통한 언어학적 특성 추출</li>
                <li>토픽 모델링을 활용한 주제 분석</li>
                <li>감정 분석 및 어조 분석</li>
                <li>네트워크 분석을 통한 인물 관계 및 개념 연결성 분석</li>
                <li>시계열 분석을 통한 문학 트렌드 변화 추적</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">연구 성과</h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">조선시대 문집 분석 프로젝트</h4>
                  <p className="text-sm text-gray-600">
                    조선 후기 주요 문인들의 문집을 대상으로 한 대규모 텍스트 분석을 통해 당시 지식인 네트워크와 사상적
                    흐름을 규명
                  </p>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold mb-2">현대 소설 감정 분석</h4>
                  <p className="text-sm text-gray-600">
                    20세기 한국 소설의 감정 표현 패턴 분석을 통한 문학사적 변화 양상 연구
                  </p>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">연구진</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm">김연구 교수 (연구책임자)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm">박텍스트 박사</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm">이마이닝 연구원</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">관련 자료</h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    연구 방법론 가이드
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    데이터셋 다운로드
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    분석 도구 매뉴얼
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">관련 행사</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-emerald-500 pl-3">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-sm font-medium">텍스트 마이닝 워크샵</span>
                    </div>
                    <p className="text-xs text-gray-500">2024.12.28</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

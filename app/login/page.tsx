import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Lock, EyeOff, Shield, Sparkles, Zap, Star, Brain, Fingerprint } from "lucide-react"
import Link from "next/link"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-gradient"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse blur-xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce blur-lg"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-20 animate-pulse blur-lg"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-15 animate-bounce blur-md"></div>

      <div className="max-w-md mx-auto px-4 py-16 relative min-h-screen flex items-center">
        <div className="w-full">
          <div className="text-center mb-12">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl">
              <Shield className="w-5 h-5 text-blue-300 mr-3 animate-pulse" />
              <span className="text-lg font-bold text-white tracking-wide">보안 로그인</span>
              <Sparkles className="w-5 h-5 text-blue-300 ml-3 animate-spin" />
            </div>

            <h1 className="text-5xl font-black text-white mb-6">연구진 로그인</h1>
            <p className="text-xl text-gray-300 font-medium">연구소 구성원 전용 로그인 페이지입니다.</p>
          </div>

          <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md overflow-hidden relative">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>

            <CardContent className="p-12 relative">
              <form className="space-y-8">
                <div className="space-y-3">
                  <label className="block text-lg font-bold text-white mb-4">아이디</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                      <User className="h-6 w-6 text-gray-300 group-focus-within:text-blue-400 transition-colors duration-300" />
                    </div>
                    <Input
                      placeholder="아이디를 입력하세요"
                      className="pl-16 h-16 border-2 border-white/20 focus:border-blue-400 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 focus:shadow-2xl text-white placeholder-gray-300 text-lg font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-lg font-bold text-white mb-4">비밀번호</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                      <Lock className="h-6 w-6 text-gray-300 group-focus-within:text-blue-400 transition-colors duration-300" />
                    </div>
                    <Input
                      type="password"
                      placeholder="비밀번호를 입력하세요"
                      className="pl-16 pr-16 h-16 border-2 border-white/20 focus:border-blue-400 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 focus:shadow-2xl text-white placeholder-gray-300 text-lg font-medium"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <EyeOff className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-white/10"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-lg text-white font-medium">
                      로그인 상태 유지
                    </label>
                  </div>
                  <Link
                    href="#"
                    className="text-lg text-blue-300 hover:text-blue-200 font-bold transition-colors duration-300"
                  >
                    비밀번호 찾기
                  </Link>
                </div>

                <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 text-xl">
                  <Shield className="w-6 h-6 mr-3" />
                  로그인
                  <Zap className="w-6 h-6 ml-3" />
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-lg">
                  <span className="px-6 bg-transparent text-white font-bold">또는</span>
                </div>
              </div>

              {/* Social Login Options */}
              <div className="space-y-6">
                <Button
                  variant="outline"
                  className="w-full h-14 border-2 border-white/20 hover:border-white/40 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl text-white font-bold text-lg"
                >
                  <div className="w-6 h-6 mr-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  Google 계정으로 로그인
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-14 border-2 border-white/20 hover:border-white/40 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl text-white font-bold text-lg"
                >
                  <div className="w-6 h-6 mr-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  Microsoft 계정으로 로그인
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-14 border-2 border-white/20 hover:border-white/40 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl text-white font-bold text-lg"
                >
                  <Fingerprint className="w-6 h-6 mr-4 text-emerald-400" />
                  생체인증 로그인
                </Button>
              </div>

              <div className="mt-10 text-center">
                <p className="text-lg text-gray-300 font-medium">
                  계정이 없으신가요?{" "}
                  <Link
                    href="/register"
                    className="text-blue-300 hover:text-blue-200 font-bold transition-colors duration-300"
                  >
                    회원가입
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Security Notice */}
          <div className="mt-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  AI 기반 보안 시스템
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  최첨단 AI 보안 기술로 연구소 시스템을 보호합니다. 모든 로그인 활동이 실시간으로 모니터링되며,
                  의심스러운 접근 시도는 자동으로 차단됩니다. 개인정보는 블록체인 기술로 암호화되어 안전하게 보호됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

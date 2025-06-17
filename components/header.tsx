import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="디지털인문융합기술연구소 로고" width={48} height={48} className="w-12 h-12" />
            <Link href="/" className="text-xl font-bold text-slate-800">
              디지털인문융합기술연구소
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-slate-900 transition-colors">
              연구소 소개
            </Link>
            <div className="relative group">
              <Link href="/research" className="flex items-center text-gray-700 hover:text-slate-900 transition-colors">
                연구 분야 <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
              </Link>
            </div>
            <Link href="/projects" className="text-gray-700 hover:text-slate-900 transition-colors">
              연구 프로젝트
            </Link>
            <div className="relative group">
              <Link
                href="/publications"
                className="flex items-center text-gray-700 hover:text-slate-900 transition-colors"
              >
                연구 성과·자료 <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
              </Link>
            </div>
            <Link href="/news" className="text-gray-700 hover:text-slate-900 transition-colors">
              소식 & 행사
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-slate-900 transition-colors">
              구성원
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Link href="/contact">
              <Button size="sm" className="bg-slate-800 hover:bg-slate-900">
                문의하기
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

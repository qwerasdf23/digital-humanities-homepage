import Link from "next/link"
import Image from "next/image"
import { Facebook, Youtube, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="디지털인문융합기술연구소 로고"
                width={24}
                height={24}
                className="w-6 h-6 invert"
              />
              <h3 className="font-bold text-lg">디지털인문융합기술연구소</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              디지털 기술과 인문학의 융합을 통해
              <br />
              새로운 지식 창조와 사회적 가치 실현을
              <br />
              추구하는 연구기관입니다.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">연구 분야</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/research/text-mining" className="hover:text-white transition-colors">
                  텍스트 마이닝
                </Link>
              </li>
              <li>
                <Link href="/research/digital-archive" className="hover:text-white transition-colors">
                  디지털 아카이브
                </Link>
              </li>
              <li>
                <Link href="/research/cultural-analytics" className="hover:text-white transition-colors">
                  문화 데이터 분석
                </Link>
              </li>
              <li>
                <Link href="/research/computational-humanities" className="hover:text-white transition-colors">
                  계산 인문학
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">연구 활동</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  연구 프로젝트
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-white transition-colors">
                  학술 논문
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  학술 행사
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  연구 자료
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>(재)디지털인문융합기술연구소</p>
              <p>사업자등록번호: 123-45-67890</p>
              <p>서울특별시 종로구 성균관로 25-2</p>
              <p>성균관대학교 인문사회과학캠퍼스</p>
              <p>전화: 02-760-1234 | 팩스: 02-760-5678</p>
              <p>이메일: contact@dhct.skku.edu</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-white mr-4">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-white mr-4">
                이용약관
              </Link>
              <Link href="/ethics" className="hover:text-white mr-4">
                연구윤리
              </Link>
              <Link href="/sitemap" className="hover:text-white">
                사이트맵
              </Link>
            </div>
            <div className="text-sm text-gray-400">Copyright ©2024 디지털인문융합기술연구소. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

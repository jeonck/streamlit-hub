import { useState, useEffect } from 'react'
import {
  Rocket,
  BookOpen,
  Code,
  Zap,
  ExternalLink,
  GitBranch,
  Users,
  Star,
  Download,
  Globe,
  FileText,
  Play,
  MessageCircle
} from 'lucide-react'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const quickStartGuides = [
    {
      title: "설치 및 시작하기",
      description: "Streamlit을 설치하고 첫 번째 앱을 만들어보세요",
      icon: Download,
      link: "https://docs.streamlit.io/get-started/installation",
      category: "기초"
    },
    {
      title: "첫 번째 앱 만들기",
      description: "Hello World부터 시작하는 Streamlit 앱 개발",
      icon: Play,
      link: "https://docs.streamlit.io/get-started/tutorials/create-an-app",
      category: "튜토리얼"
    },
    {
      title: "위젯과 컴포넌트",
      description: "인터랙티브한 UI 요소들을 활용해보세요",
      icon: Code,
      link: "https://docs.streamlit.io/develop/api-reference",
      category: "개발"
    },
    {
      title: "배포하기",
      description: "Streamlit Community Cloud로 앱을 세상에 공개하세요",
      icon: Globe,
      link: "https://docs.streamlit.io/deploy",
      category: "배포"
    }
  ]

  const resources = [
    {
      title: "공식 문서",
      description: "완전한 API 레퍼런스와 가이드",
      icon: BookOpen,
      link: "https://docs.streamlit.io",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Gallery",
      description: "다양한 Streamlit 앱 예제들",
      icon: Star,
      link: "https://streamlit.io/gallery",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "GitHub",
      description: "소스코드와 이슈 트래킹",
      icon: GitBranch,
      link: "https://github.com/streamlit/streamlit",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "커뮤니티",
      description: "포럼에서 질문하고 답변하기",
      icon: MessageCircle,
      link: "https://discuss.streamlit.io",
      color: "from-green-500 to-green-600"
    }
  ]

  const latestNews = [
    {
      title: "Streamlit 1.29.0 출시",
      description: "새로운 컴포넌트와 성능 개선",
      date: "2024년 1월",
      link: "https://docs.streamlit.io/develop/quick-reference/changelog"
    },
    {
      title: "LLM 앱 개발 가이드",
      description: "ChatGPT 스타일 앱 만들기",
      date: "최신",
      link: "https://docs.streamlit.io/develop/tutorials/llms"
    },
    {
      title: "멀티페이지 앱 지원",
      description: "복잡한 앱을 쉽게 구조화하세요",
      date: "업데이트",
      link: "https://docs.streamlit.io/get-started/tutorials/create-a-multipage-app"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center items-center mb-6">
              <Rocket className="w-16 h-16 text-white mr-4" />
              <h1 className="text-5xl font-bold text-white">
                Streamlit Hub
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              데이터 과학자와 AI/ML 엔지니어를 위한 완벽한 Streamlit 가이드와 리소스 허브
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="https://streamlit.io"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                공식 사이트
              </a>
              <a
                href="https://docs.streamlit.io/get-started"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                시작하기
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Quick Start Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">빠른 시작 가이드</h2>
            <p className="text-blue-100">Streamlit을 처음 접하시나요? 여기서 시작하세요!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartGuides.map((guide, index) => {
              const Icon = guide.icon
              return (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-blue-300 mr-3" />
                    <span className="text-xs bg-blue-500/30 text-blue-200 px-2 py-1 rounded-full">
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                  <p className="text-blue-100 text-sm mb-4">{guide.description}</p>
                  <a
                    href={guide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors text-sm"
                  >
                    시작하기
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              )
            })}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">핵심 리소스</h2>
            <p className="text-blue-100">Streamlit 개발에 필요한 모든 것을 찾아보세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group-hover:scale-105">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-blue-100 text-sm">{resource.description}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        {/* Latest News Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">최신 소식</h2>
            <p className="text-blue-100">Streamlit의 최신 업데이트와 새로운 기능들</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-purple-500/30 text-purple-200 px-2 py-1 rounded-full">
                    {news.date}
                  </span>
                  <FileText className="w-5 h-5 text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{news.title}</h3>
                <p className="text-blue-100 text-sm mb-4">{news.description}</p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors text-sm"
                >
                  자세히 보기
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <Users className="w-16 h-16 text-blue-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">커뮤니티에 참여하세요</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            전 세계 개발자들과 함께 Streamlit을 활용한 멋진 프로젝트를 만들어보세요.
            질문하고, 공유하고, 함께 성장해요!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://discuss.streamlit.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              포럼 참여하기
            </a>
            <a
              href="https://github.com/streamlit/streamlit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors"
            >
              <GitBranch className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-blue-200">
              Made with ❤️ for the Streamlit community
            </p>
            <p className="text-blue-300 text-sm mt-2">
              이 사이트는 Streamlit 학습과 개발을 돕기 위한 비공식 허브입니다
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
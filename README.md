# 🚀 Streamlit Hub

Streamlit 학습과 개발을 위한 완벽한 리소스 허브입니다. 데이터 과학자와 AI/ML 엔지니어들이 Streamlit을 쉽게 시작하고 활용할 수 있도록 필요한 모든 정보를 한 곳에 모았습니다.

## 🌟 주요 기능

### 📚 빠른 시작 가이드
- **설치 및 시작하기**: Streamlit 설치부터 첫 실행까지
- **첫 번째 앱 만들기**: Hello World부터 시작하는 단계별 튜토리얼
- **위젯과 컴포넌트**: 인터랙티브 UI 요소 활용법
- **배포하기**: Streamlit Community Cloud 배포 가이드

### 🔗 핵심 리소스
- **공식 문서**: 완전한 API 레퍼런스와 가이드
- **Gallery**: 다양한 Streamlit 앱 예제 모음
- **GitHub**: 소스코드와 이슈 트래킹
- **커뮤니티**: 포럼에서 질문하고 답변하기

### 📰 최신 소식
- Streamlit 버전 업데이트 정보
- 새로운 기능 및 컴포넌트 소개
- LLM 앱 개발 가이드
- 멀티페이지 앱 지원 정보

## 🛠️ 기술 스택

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🚀 로컬 개발

### 사전 요구사항
- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/jeonck/streamlit-hub.git
cd streamlit-hub

# React 앱 디렉토리로 이동
cd react-app

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드된 파일 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
streamlit-hub/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 자동 배포
├── react-app/
│   ├── src/
│   │   ├── App.jsx            # 메인 컴포넌트
│   │   ├── main.jsx           # React 진입점
│   │   └── index.css          # Tailwind 스타일
│   ├── public/
│   │   └── vite.svg           # Favicon
│   ├── package.json           # 의존성 정의
│   ├── vite.config.js         # Vite 설정
│   ├── tailwind.config.js     # Tailwind 설정
│   └── postcss.config.js      # PostCSS 설정
├── CLAUDE.md                  # 프로젝트 설명서
└── README.md                  # 이 파일
```

## 🎨 디자인 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **애니메이션**: 부드러운 전환 효과와 호버 인터랙션
- **글래스모피즘**: 현대적인 반투명 UI 요소
- **다크 테마**: 눈에 편한 어두운 배경
- **한국어 지원**: 완전한 한국어 현지화

## 🌐 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

**라이브 사이트**: https://jeonck.github.io/streamlit-hub/

### 배포 과정
1. `main` 브랜치에 푸시
2. GitHub Actions 워크플로우 자동 실행
3. React 앱 빌드
4. GitHub Pages에 자동 배포

## 📖 Streamlit 시작하기

### 설치
```bash
pip install streamlit
```

### 첫 번째 앱 만들기
```python
import streamlit as st

st.title("Hello Streamlit!")
st.write("데이터 앱을 쉽게 만들어보세요")

name = st.text_input("이름을 입력하세요")
if name:
    st.write(f"안녕하세요, {name}님!")
```

### 앱 실행
```bash
streamlit run app.py
```

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 만듭니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 🔗 유용한 링크

- [Streamlit 공식 사이트](https://streamlit.io)
- [Streamlit 문서](https://docs.streamlit.io)
- [Streamlit Gallery](https://streamlit.io/gallery)
- [Streamlit GitHub](https://github.com/streamlit/streamlit)
- [Streamlit 커뮤니티](https://discuss.streamlit.io)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 💡 피드백

문제점을 발견하거나 개선 제안이 있으시면 [Issues](https://github.com/jeonck/streamlit-hub/issues)에 등록해 주세요.

---

**Made with ❤️ for the Streamlit community**

이 사이트는 Streamlit 학습과 개발을 돕기 위한 비공식 허브입니다.
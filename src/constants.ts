import { PortfolioItem, Experience, SkillSet } from './types';

export const PORTFOLIO_CATEGORIES = ['Branding', 'Youtube', 'Commerce', 'Life', 'Beauty', 'Banner'];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    category: 'Commerce',
    title: 'Brew & Bloom',
    role: '브랜드 디자인 / 로고 기획',
    description: '자연과 커피가 어우러진 감성 카페 브랜드 로고',
    subText: '',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501339819358-ee837b301b7c?auto=format&fit=crop&q=80&w=800',
    youtubeUrl: '',
    vimeoUrl: '',
    year: '2024'
  },
  {
    id: '2',
    category: 'Life',
    title: 'NexGen IT',
    role: 'UI/UX 디자인 및 브랜드 전략',
    description: '혁신적인 기술력을 상징하는 미니멀리즘 로고',
    subText: '',
    thumbnailUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800',
    youtubeUrl: '',
    vimeoUrl: '',
    year: '2023',
    showBeforeAfter: true
  },
  {
    id: '3',
    category: 'Beauty',
    title: 'Glow Skin',
    role: '패키지 디자인 리뉴얼',
    description: '피부 본연의 광채를 강조하는 프리미엄 스킨케어 패키지',
    subText: '',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a13?auto=format&fit=crop&q=80&w=800',
    youtubeUrl: '',
    vimeoUrl: '',
    year: '2024'
  },
  {
    id: '4',
    category: 'Banner',
    title: 'Creative Soul',
    role: '개인 브랜딩 및 포트폴리오 기획',
    description: '창의적인 영감을 기록하고 공유하는 개인 브랜드 아이덴티티',
    subText: '',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800',
    youtubeUrl: '',
    vimeoUrl: '',
    year: '2023'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: '주식회사 그룹디 (Group D)',
    role: '기획 PD / 미디어콘텐츠팀',
    startDate: '2025.01',
    endDate: '2026.05',
    achievements: [
      '미디어 콘텐츠 전반의 전략적 기획 및 제작 리딩',
      '브랜드 아이덴티티를 반영한 고관여 영상 콘텐츠 설계'
    ]
  },
  {
    company: '몽타미디어 (Monta Media)',
    role: '광고 PD / 콘텐츠팀',
    startDate: '2022.11',
    endDate: '2024.04',
    achievements: [
      '다양한 산업군(뷰티, F&B, 테크 등)의 상업 광고 기획 및 편집',
      '클라이언트 요구 분석을 통한 맞춤형 광고 솔루션 제공',
      '모션 그래픽 및 디자인 요소를 활용한 영상 퀄리티 향상'
    ]
  },
  {
    company: '다슈코리아 (DASHU Korea)',
    role: '콘텐츠 PD / 콘텐츠팀',
    startDate: '2022.02',
    endDate: '2022.09',
    achievements: [
      '브랜드 자사 콘텐츠 및 SNS 광고 영상 제작',
      '뷰티 시장 트렌드를 반영한 숏폼 및 바이럴 영상 기획'
    ]
  }
];

export const SKILL_SETS: SkillSet[] = [
  {
    category: 'Production Capability',
    items: [
      '기획(Planning): 시장 분석 기반의 캠페인 전략 수립 및 핵심 카피라이팅\n브랜드 고유의 아이덴티티 및 톤앤매너 구축을 위한 영상 브랜딩 기획\n콘텐츠 목적에 최적화된 스토리보드 및 구성안 제작',
      '제작 (Production): 촬영 진행 및 카메라 운용 가능\n기획 의도에 맞춘 효율적인 촬영 현장 디렉팅',
      '운영 (Operation): 채널 활성화를 위한 정기 업로드 및 데이터 기반의 조회수·성과 관리\n플랫폼 알고리즘을 고려한 최적의 콘텐츠 업로드 전략 수립',
      '편집(Editing): 콘텐츠의 몰입감을 극대화하는 리드미컬한 컷 편집\n영상의 무드를 살리는 감각적인 색보정(Color Grading) 및 사운드 디자인',
      '디자인(Design): 타이포그래피 제작\n클릭률(CTR)을 높이는 썸네일 및 채널 키비주얼 디자인'
    ]
  },
  {
    category: 'Software Skills',
    items: [
      'Video: Premiere Pro, After Effects, DaVinci Resolve',
      'Design: Photoshop, Illustrator, Figma',
      'Co-work: Slack, Notion',
      'AI: Google AI studio, Midjourney, Kling, Sora, Claude, Perplexity'
    ]
  }
];

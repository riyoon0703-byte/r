export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  role: string;
  result?: string;
  description: string;
  subText?: string;
  thumbnailUrl: string;
  videoUrl?: string;
  youtubeUrl?: string;
  vimeoUrl?: string;
  year?: string;
  showBeforeAfter?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface SkillSet {
  category: string;
  items: string[];
}

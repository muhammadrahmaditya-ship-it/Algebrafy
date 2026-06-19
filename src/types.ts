export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface MaterialItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullContent: string[];
  formula: string;
  example: {
    question: string;
    stepByStep: string[];
    result: string;
  };
  quiz?: PracticeQuestion;
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  instructor: string;
  thumbnailClass: string; // Tailwind class for background gradients
  videoIdPlaceholder: string; // Helper for modal simulation
  views: string;
  rating: number;
}

export interface VideoCategory {
  id: string;
  topicTitle: string;
  videos: VideoItem[];
}

export interface Hint {
  id: string;
  text: string;
  order: number;
}

export interface Quiz {
  id: string;
  question: string;
  type: 'multiple-choice' | 'fill-blank' | 'code-completion';
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  code?: string;
}

export interface VisualAid {
  id: string;
  type: 'data-flow' | 'component-tree' | 'lifecycle';
  title: string;
  description: string;
  elements: VisualElement[];
}

export interface VisualElement {
  id: string;
  type: 'component' | 'prop' | 'state' | 'arrow';
  label: string;
  x: number;
  y: number;
  color?: string;
  fromId?: string;
  toId?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: {
    type: 'lesson-complete' | 'all-lessons' | 'quiz-perfect' | 'streak';
    target: string | number;
  };
  unlockedAt?: string;
}

export interface SubLesson {
  id: string;
  title: string;
  description: string;
  explanation: string;
  concepts?: string[];
  files: { [key: string]: string };
  solutionFiles: { [key: string]: string };
  task: string;
  hints: Hint[];
  quiz?: Quiz;
  visualAid?: VisualAid;
  achievementIds?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  subLessons: SubLesson[];
}

export interface Progress {
  [lessonId: string]: {
    [subLessonId: string]: boolean;
  };
}

export interface Theme {
  mode: 'light' | 'dark';
}
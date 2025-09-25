export interface SubLesson {
  id: string;
  title: string;
  description: string;
  explanation: string;
  concepts?: string[];
  files: { [key: string]: string };
  solutionFiles: { [key: string]: string };
  task: string;
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
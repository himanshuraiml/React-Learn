import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import ErrorFeedback from './ErrorFeedback';
import { SubLesson } from '../types';

interface SandpackEditorProps {
  subLesson: SubLesson;
  theme: 'light' | 'dark';
}

export default function SandpackEditor({ subLesson, theme }: SandpackEditorProps) {
  return (
    <div className="h-full flex flex-col">
      <Sandpack
        template="react-ts"
        theme={theme === 'dark' ? 'dark' : 'light'}
        files={subLesson.files}
        options={{
          showNavigator: true,
          showTabs: true,
          showLineNumbers: true,
          showInlineErrors: true,
          wrapContent: true,
          editorHeight: 500,
          layout: 'preview',
          autoReload: true,
          editorWidthPercentage: 50,
          showConsole: true,
          showConsoleButton: true
        }}
        customSetup={{
          dependencies: {
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "@types/react": "^18.2.0",
            "@types/react-dom": "^18.2.0"
          }
        }}
        style={{
          height: '500px',
          width: '100%'
        }}
      />
    </div>
  );
}
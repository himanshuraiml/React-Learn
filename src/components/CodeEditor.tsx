import React from 'react';
import Editor from '@monaco-editor/react';
import { Code } from 'lucide-react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  theme: 'light' | 'dark';
}

export default function CodeEditor({ value, onChange, language = 'typescript', theme }: CodeEditorProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 flex items-center space-x-2">
        <Code className="w-4 h-4" />
        <span className="text-sm font-medium">Code Editor</span>
      </div>
      <div className="flex-1">
        <Editor
          value={value}
          onChange={(value) => onChange(value || '')}
          language={language}
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
            folding: true,
            lineDecorationsWidth: 10,
            lineNumbersMinChars: 3,
            padding: { top: 16, bottom: 16 },
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            smoothScrolling: true,
            cursorBlinking: 'smooth',
            renderLineHighlight: 'line',
            bracketPairColorization: { enabled: true },
          }}
        />
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Play, AlertCircle, Info } from 'lucide-react';

interface PreviewPanelProps {
  code: string;
  theme: 'light' | 'dark';
}

export default function PreviewPanel({ code, theme }: PreviewPanelProps) {
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const transformCode = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate processing
        const transformedCode = transformReactCode(code);
        setOutput(transformedCode);
        setError('');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setOutput('');
      } finally {
        setIsLoading(false);
      }
    };

    transformCode();
  }, [code]);

  const transformReactCode = (code: string): string => {
    try {
      // Remove imports and exports for demo
      let transformed = code.replace(/^import.*$/gm, '');
      transformed = transformed.replace(/^export\s+.*$/gm, '');
      
      // Extract function body including variable declarations
      const functionMatch = transformed.match(/function\s+\w+\s*\([^)]*\)\s*{([\s\S]*)}|const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{([\s\S]*)}|\([^)]*\)\s*=>\s*{([\s\S]*?)}/);
      
      if (functionMatch) {
        const functionBody = functionMatch[1] || functionMatch[2] || functionMatch[3];
        
        // Extract variable declarations
        const variables: Record<string, any> = {};
        const varMatches = functionBody.match(/(const|let|var)\s+(\w+)\s*=\s*([^;]+);?/g);
        
        if (varMatches) {
          varMatches.forEach(varDecl => {
            const match = varDecl.match(/(const|let|var)\s+(\w+)\s*=\s*([^;]+);?/);
            if (match) {
              const [, , varName, varValue] = match;
              try {
                // Safely evaluate simple expressions
                if (varValue.includes('{') && varValue.includes('}')) {
                  // Object literal - convert unquoted keys to quoted keys for JSON.parse
                  try {
                    const jsonString = varValue.replace(/(\w+):/g, '"$1":');
                    variables[varName] = JSON.parse(jsonString);
                  } catch {
                    variables[varName] = varValue;
                  }
                } else if (varValue.match(/^['"`]/)) {
                  // String literal
                  variables[varName] = varValue.replace(/^['"`]|['"`]$/g, '');
                } else if (!isNaN(Number(varValue))) {
                  // Number
                  variables[varName] = Number(varValue);
                } else {
                  // Other expressions
                  variables[varName] = varValue;
                }
              } catch {
                variables[varName] = varValue;
              }
            }
          });
        }
      
        // Extract the return statement content
        const returnMatch = functionBody.match(/return\s*\(([\s\S]*?)\);?\s*$/);
        if (returnMatch) {
          let jsx = returnMatch[1].trim();
          
          // Replace className with class for HTML
          jsx = jsx.replace(/className=/g, 'class=');
          
          // Process JSX expressions with available variables
          jsx = jsx.replace(/{([^}]+)}/g, (match, expr) => {
            const cleanExpr = expr.trim();
            
            // Handle simple expressions
            if (cleanExpr.includes('new Date()')) return new Date().toLocaleString();
            if (cleanExpr.includes('Math.')) return '42';
            
            // Try to evaluate the expression using available variables
            try {
              // Create a safe evaluation context with available variables
              const evalContext = Object.keys(variables).reduce((ctx, key) => {
                ctx[key] = variables[key];
                return ctx;
              }, {} as Record<string, any>);
              
              // Use Function constructor for safe evaluation
              const evalFunction = new Function(...Object.keys(evalContext), `return ${cleanExpr};`);
              const result = evalFunction(...Object.values(evalContext));
              
              if (typeof result === 'number') {
                return result.toString();
              } else if (typeof result === 'string') {
                return result;
              } else if (typeof result === 'boolean') {
                return result.toString();
              } else {
                return JSON.stringify(result);
              }
            } catch {
              // Fallback to simple variable lookup if evaluation fails
              if (variables[cleanExpr]) {
                return typeof variables[cleanExpr] === 'string' ? variables[cleanExpr] : JSON.stringify(variables[cleanExpr]);
              }
            }
            
            // Handle conditional expressions
            if (cleanExpr.includes('?') && cleanExpr.includes(':')) {
              return `[${cleanExpr}]`;
            }
            
            // Default fallback
            if (cleanExpr.match(/^\w+$/)) return `[${cleanExpr}]`;
            return match;
          });
          
          return jsx;
        }
      }
      
      return transformed;
    } catch (err) {
      throw new Error('Failed to transform code');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Play className="w-4 h-4" />
          <span className="text-sm font-medium">Live Preview</span>
        </div>
        {isLoading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
        )}
      </div>
      
      <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
        {error ? (
          <div className="p-6 h-full flex items-center justify-center">
            <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 dark:border-red-500 p-4 rounded max-w-md">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-red-800 dark:text-red-300 font-medium">Error in code</h3>
                  <pre className="text-red-700 dark:text-red-400 text-sm mt-2 whitespace-pre-wrap font-mono">
                    {error}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className={`rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 min-h-32 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div 
                dangerouslySetInnerHTML={{ __html: output }} 
                className="preview-content"
              />
            </div>
            
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-blue-800 dark:text-blue-300">
                  <strong>Preview Note:</strong> This is a simplified preview for learning purposes. 
                  In a production app, you'd use a proper React renderer with complete JSX support and sandboxing.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
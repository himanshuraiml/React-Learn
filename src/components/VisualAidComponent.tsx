import React, { useEffect, useState } from 'react';
import { Zap, ArrowRight, Play, Pause } from 'lucide-react';
import { VisualAid, VisualElement } from '../types';

interface VisualAidComponentProps {
  visualAid: VisualAid;
  theme: 'light' | 'dark';
}

export default function VisualAidComponent({ visualAid, theme }: VisualAidComponentProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const arrows = visualAid.elements.filter(el => el.type === 'arrow');
  const nodes = visualAid.elements.filter(el => el.type !== 'arrow');

  useEffect(() => {
    if (isAnimating) {
      const timer = setInterval(() => {
        setAnimationStep(prev => {
          if (prev >= arrows.length) {
            setIsAnimating(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1500);

      return () => clearInterval(timer);
    }
  }, [isAnimating, arrows.length]);

  const toggleAnimation = () => {
    if (isAnimating) {
      setIsAnimating(false);
      setAnimationStep(0);
    } else {
      setIsAnimating(true);
      setAnimationStep(0);
    }
  };

  const getNodeColor = (color?: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700';
      case 'green': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700';
      case 'orange': return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700';
      case 'purple': return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600';
    }
  };

  const renderArrow = (arrow: VisualElement, index: number) => {
    const fromNode = nodes.find(n => n.id === arrow.fromId);
    const toNode = nodes.find(n => n.id === arrow.toId);
    
    if (!fromNode || !toNode) return null;

    const isActive = isAnimating && animationStep > index;
    
    return (
      <div
        key={arrow.id}
        className={`absolute transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-30'
        }`}
        style={{
          left: `${fromNode.x + 50}px`,
          top: `${fromNode.y + 15}px`,
          width: `${toNode.x - fromNode.x - 20}px`,
          height: '2px',
        }}
      >
        <div className={`h-full bg-blue-500 rounded transition-all duration-1000 ${
          isActive ? 'w-full' : 'w-0'
        }`} />
        <ArrowRight 
          className={`absolute -right-2 -top-2 w-4 h-4 text-blue-500 transition-opacity duration-500 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
            <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{visualAid.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{visualAid.description}</p>
          </div>
        </div>
        
        <button
          onClick={toggleAnimation}
          className="flex items-center space-x-2 px-3 py-2 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-lg transition-colors"
        >
          {isAnimating ? (
            <>
              <Pause className="w-4 h-4" />
              <span className="text-sm">Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span className="text-sm">Animate</span>
            </>
          )}
        </button>
      </div>

      <div className="relative bg-gray-50 dark:bg-gray-900 rounded-lg p-8 min-h-64">
        {/* Render nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`absolute px-4 py-2 rounded-lg border-2 font-medium text-sm transition-all duration-500 ${
              getNodeColor(node.color)
            } ${
              isAnimating && node.type === 'prop' ? 'animate-pulse' : ''
            }`}
            style={{
              left: `${node.x}px`,
              top: `${node.y}px`,
            }}
          >
            {node.label}
          </div>
        ))}

        {/* Render arrows */}
        {arrows.map((arrow, index) => renderArrow(arrow, index))}
      </div>

      {visualAid.type === 'data-flow' && (
        <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📊 Data Flow:</strong> In React, data flows from parent components to child components through props. 
            This unidirectional data flow makes your app predictable and easier to debug.
          </p>
        </div>
      )}
    </div>
  );
}
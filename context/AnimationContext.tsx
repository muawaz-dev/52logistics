'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface AnimationContextType {
  visitedSections: Set<string>;
  registerVisit: (id: string) => void;
  isVisited: (id: string) => boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());

  const registerVisit = useCallback((id: string) => {
    setVisitedSections((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const isVisited = useCallback((id: string) => {
    return visitedSections.has(id);
  }, [visitedSections]);

  return (
    <AnimationContext.Provider value={{ visitedSections, registerVisit, isVisited }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = (id: string) => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }

  const { isVisited, registerVisit } = context;
  const visited = isVisited(id);

  return {
    shouldAnimate: !visited,
    registerVisit: () => registerVisit(id),
  };
};

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from './Preloader';

export const SplashLoader: React.FC = () => {
  const location = useLocation();
  const [isCompleted, setIsCompleted] = useState(false);

  if (location.pathname !== '/' || isCompleted) return null;

  return <Preloader onComplete={() => setIsCompleted(true)} />;
};

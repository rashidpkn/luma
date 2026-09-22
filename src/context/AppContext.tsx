import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AppContextType {
  country: string;
  setCountry: (country: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isAppModalOpen: boolean;
  setIsAppModalOpen: (open: boolean) => void;
  isAudioActive: boolean;
  setIsAudioActive: (active: boolean) => void;
  toggleAudio: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [country, setCountry] = useState<string>('global');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState<boolean>(false);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);

  // Apply data-country attribute to <html> tag when country changes
  useEffect(() => {
    document.documentElement.setAttribute('data-country', country);
  }, [country]);

  // Audio synthesize or play/pause
  useEffect(() => {
    let audioCtx: AudioContext | null = null;
    let oscillator: OscillatorNode | null = null;
    let gainNode: GainNode | null = null;

    if (isAudioActive) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx = new AudioContextClass();
        oscillator = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(432, audioCtx.currentTime); // 432Hz ambient chord
        gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();
      } catch (err) {
        console.warn("Audio Context could not start:", err);
      }
    }

    return () => {
      if (oscillator) {
        try { oscillator.stop(); } catch {}
      }
      if (audioCtx) {
        try { audioCtx.close(); } catch {}
      }
    };
  }, [isAudioActive]);

  const toggleAudio = () => {
    setIsAudioActive(!isAudioActive);
  };

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        isMenuOpen,
        setIsMenuOpen,
        isAppModalOpen,
        setIsAppModalOpen,
        isAudioActive,
        setIsAudioActive,
        toggleAudio
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

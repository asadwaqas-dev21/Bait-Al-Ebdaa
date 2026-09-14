"use client";

import { createContext, useContext } from 'react';
import { dictionaries } from './dictionaries';

const I18nContext = createContext(null);

export function I18nProvider({ lang, children }) {
  const dict = dictionaries[lang] || dictionaries.en;
  
  return (
    <I18nContext.Provider value={{ lang, dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

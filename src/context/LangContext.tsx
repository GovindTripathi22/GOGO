"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'EN' | 'FR';

interface LangContextType {
    lang: Lang;
    toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('EN');

    const toggleLang = () => {
        setLang((prev) => (prev === 'EN' ? 'FR' : 'EN'));
    };

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    const context = useContext(LangContext);
    if (context === undefined) {
        throw new Error('useLang must be used within a LangProvider');
    }
    return context;
}

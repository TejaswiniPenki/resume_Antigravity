/**
 * useTheme Hook
 * 
 * Manages the application theme state with localStorage persistence.
 * 
 * How it works:
 * 1. On mount, reads theme from localStorage or uses default
 * 2. Applies theme via data-theme attribute on <html>
 * 3. Exposes currentTheme, availableThemes, and setTheme function
 * 4. Persists theme changes to localStorage immediately
 */

import { useEffect, useState, useCallback } from 'react';
import { themes, defaultTheme, type ThemeName, type Theme } from '../theme/themes';

interface UseThemeReturn {
    currentTheme: ThemeName;
    currentThemeObject: Theme;
    availableThemes: Theme[];
    setTheme: (theme: ThemeName) => void;
}

const STORAGE_KEY = 'resume-theme';

export function useTheme(): UseThemeReturn {
    // Initialize state from localStorage or default
    const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored && themes.some(t => t.name === stored)) {
                return stored as ThemeName;
            }
        }
        return defaultTheme;
    });

    // Apply theme to DOM and persist to localStorage
    useEffect(() => {
        const root = document.documentElement;

        // Remove old theme classes
        themes.forEach(t => {
            root.removeAttribute(`data-theme`);
        });

        // Apply new theme
        root.setAttribute('data-theme', currentTheme);

        // Persist to localStorage
        localStorage.setItem(STORAGE_KEY, currentTheme);
    }, [currentTheme]);

    // Memoized setTheme function
    const setTheme = useCallback((theme: ThemeName) => {
        setCurrentTheme(theme);
    }, []);

    // Get the current theme object
    const currentThemeObject = themes.find(t => t.name === currentTheme) || themes[0];

    return {
        currentTheme,
        currentThemeObject,
        availableThemes: themes,
        setTheme
    };
}

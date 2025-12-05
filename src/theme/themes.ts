/**
 * Theme System Configuration
 * 
 * Defines 3 professional color themes with CSS variables.
 * Themes are applied via data-theme attribute on the HTML element.
 */

export interface Theme {
    name: string;
    label: string;
    colors: {
        // Preview colors for the theme switcher UI
        preview: {
            primary: string;
            secondary: string;
        };
    };
}

export const themes: Theme[] = [
    {
        name: 'aurora',
        label: 'Aurora',
        colors: {
            preview: {
                primary: '#14b8a6',    // Teal
                secondary: '#a855f7',  // Purple
            }
        }
    },
    {
        name: 'sunrise',
        label: 'Sunrise',
        colors: {
            preview: {
                primary: '#f97316',    // Orange
                secondary: '#ec4899',  // Pink
            }
        }
    },
    {
        name: 'ocean',
        label: 'Ocean',
        colors: {
            preview: {
                primary: '#3b82f6',    // Blue
                secondary: '#06b6d4',  // Cyan
            }
        }
    }
];

export type ThemeName = 'aurora' | 'sunrise' | 'ocean';

export const defaultTheme: ThemeName = 'aurora';

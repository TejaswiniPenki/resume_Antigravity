/**
 * ThemeSwitcher Component
 * 
 * Visual theme selector displaying all available themes as pills.
 * Each pill shows a color preview and theme label.
 * Clicking immediately switches theme and persists to localStorage.
 */

import { useTheme } from '../../hooks/useTheme';
import type { ThemeName } from '../../theme/themes';

export function ThemeSwitcher() {
    const { currentTheme, availableThemes, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-1">
            {availableThemes.map((theme) => (
                <button
                    key={theme.name}
                    onClick={() => setTheme(theme.name as ThemeName)}
                    className={`
            flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium
            transition-all duration-200
            ${currentTheme === theme.name
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }
          `}
                    aria-label={`Switch to ${theme.label} theme`}
                    title={theme.label}
                >
                    {/* Color preview circles */}
                    <span className="flex -space-x-1">
                        <span
                            className="w-3 h-3 rounded-full border border-white/50"
                            style={{ backgroundColor: theme.colors.preview.primary }}
                        />
                        <span
                            className="w-3 h-3 rounded-full border border-white/50"
                            style={{ backgroundColor: theme.colors.preview.secondary }}
                        />
                    </span>
                    <span className="hidden sm:inline">{theme.label}</span>
                </button>
            ))}
        </div>
    );
}

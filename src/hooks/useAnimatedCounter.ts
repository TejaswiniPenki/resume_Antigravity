/**
 * useAnimatedCounter Hook - SIMPLIFIED VERSION
 * 
 * Creates smooth animated counting from 0 to a target value.
 * Uses requestAnimationFrame for smooth 60fps animation.
 * Triggers animation when element scrolls into view via IntersectionObserver.
 * 
 * KEY GUARANTEES:
 * - NEVER produces negative values
 * - ALWAYS ends at exact target value
 * - Simple, reliable animation logic
 * 
 * @param to - Target value to count to
 * @param durationMs - Animation duration in milliseconds (default: 2000)
 * @param decimals - Number of decimal places to display (default: 0)
 */

import { useEffect, useRef, useState } from 'react';

interface UseAnimatedCounterOptions {
    to: number;          // Target value - must be positive
    durationMs?: number; // Animation duration (default: 2000ms)
    decimals?: number;   // Decimal places for display (default: 0)
}

interface UseAnimatedCounterReturn {
    value: string;                              // Formatted display value
    ref: React.RefObject<HTMLDivElement | null>; // Ref to attach to element
}

/**
 * Easing function: easeOutQuart
 * Creates smooth deceleration - fast start, slow finish
 * Input t should be between 0 and 1
 */
function easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
}

export function useAnimatedCounter({
    to,
    durationMs = 2000,
    decimals = 0
}: UseAnimatedCounterOptions): UseAnimatedCounterReturn {
    // Current displayed value - start at 0
    const [displayValue, setDisplayValue] = useState(0);

    // Refs for animation state
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimatedRef = useRef(false);
    const rafIdRef = useRef<number | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Create intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                // Only animate once when element becomes visible
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;

                    // Start animation
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / durationMs, 1);

                        // Apply easing
                        const easedProgress = easeOutQuart(progress);

                        // Calculate value: always between 0 and target
                        // Use Math.max(0, ...) to guarantee no negatives
                        const currentValue = Math.max(0, to * easedProgress);

                        setDisplayValue(currentValue);

                        if (progress < 1) {
                            rafIdRef.current = requestAnimationFrame(animate);
                        } else {
                            // Animation complete - set EXACT target value
                            setDisplayValue(to);
                        }
                    };

                    rafIdRef.current = requestAnimationFrame(animate);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);

        // Cleanup
        return () => {
            observer.disconnect();
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [to, durationMs]);

    // Format with specified decimal places
    // Use Math.abs to guarantee no negative signs in display
    const formattedValue = Math.abs(displayValue).toFixed(decimals);

    return { value: formattedValue, ref };
}

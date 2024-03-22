import { useCallback, useEffect, useState } from "react";

export function useDebounce<T extends (...args: any[]) => any>(
    callback: T,
    delay: number,
    dependencies: any[]
): T {
    const [debouncedCallback, setDebouncedCallback] = useState<T>(callback);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedCallback(() => callback);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [...dependencies, callback, delay]);

    return useCallback(debouncedCallback, [debouncedCallback]);
}

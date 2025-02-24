import { PromiseOrValue } from 'graphql/jsutils/PromiseOrValue';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseFunctionOptions<T, P = T> {
    deps?: any[];
    autoLoad?: boolean;
    postProcess?: (data: T) => P;
}

export function useFunction<T, P = T>(
    fn: () => PromiseOrValue<T>,
    options: UseFunctionOptions<T, P> = {}
) {
    const { deps = [], autoLoad = true, postProcess } = options;

    const [data, setData] = useState<T | null>(null);
    const [ppData, setPpData] = useState<P | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fnRef = useRef(fn);
    fnRef.current = fn;

    const execute = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const result = await fnRef.current();
            setData(result);
            if (postProcess) {
                try {
                    const processed = postProcess(result);
                    setPpData(processed);
                } catch (ppError) {
                    console.warn('Post-processing failed:', ppError);
                    setPpData(result as unknown as P);
                }
            }
            return result;
        } catch (err) {
            setError(err instanceof Error ? err : new Error(String(err)));
            throw err;
        } finally {
            setLoading(false);
        }
    }, deps);

    useEffect(() => {
        if (autoLoad) {
            execute();
        }
    }, [execute]);

    return {
        data,
        ppData,
        loading,
        error,
        refetch: execute
    };
}

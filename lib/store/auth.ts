export const AUTHSTORE = {
    get: () => {
        if (typeof window !== 'undefined') {
            return localStorage?.getItem('health-token') || '';
        }
    },
    set: (token: string) => {
        if (typeof window !== 'undefined') {
            return localStorage?.setItem('health-token', token);
        }
    },
    clear: () => {
        if (typeof window !== 'undefined') {
            return localStorage?.removeItem('health-token');
        }
    },
};

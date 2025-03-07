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
    getRefreshToken: () => {
        if (typeof window !== 'undefined') {
            return localStorage?.getItem('health-refresh-token') || '';
        }
    },
    setRefreshToken: (token: string) => {
        if (typeof window !== 'undefined') {
            return localStorage?.setItem('health-refresh-token', token);
        }
    },
    clearRefreshToken: () => {
        if (typeof window !== 'undefined') {
            return localStorage?.removeItem('health-refresh-token');
        }
    },
    getEmail: () => {
        if (typeof window !== 'undefined') {
            return localStorage?.getItem('health-user-email') || '';
        }
    },
    setEmail: (email: string) => {
        if (typeof window !== 'undefined') {
            return localStorage?.setItem('health-user-email', email);
        }
    },
    clearEmail: () => {
        if (typeof window !== 'undefined') {
            return localStorage?.removeItem('health-user-email');
        }
    },
    clearAll: () => {
        if (typeof window !== 'undefined') {
            localStorage?.removeItem('health-token');
            localStorage?.removeItem('health-refresh-token');
            localStorage?.removeItem('health-user-email');
        }
    }
};

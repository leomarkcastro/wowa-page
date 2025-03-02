type DiffKind = 'N' | 'D' | 'E' | 'A';

interface DeepDiff {
    kind: DiffKind;
    path: (string | number)[];
    lhs?: any;
    rhs?: any;
    index?: number;
    item?: {
        kind: DiffKind;
        lhs?: any;
        rhs?: any;
    };
}

export const getDiffLabel = (kind: DiffKind): string => {
    switch (kind) {
        case 'N':
            return 'Added';
        case 'D':
            return 'Deleted';
        case 'E':
            return 'Changed';
        case 'A':
            return 'Array Changed';
        default:
            return 'Unknown';
    }
};

export const getPathString = (path: (string | number)[]): string => {
    return path.join('.');
};

export const parseDiff = (diffString: string): DeepDiff[] => {
    try {
        const diff = JSON.parse(diffString);
        return Array.isArray(diff) ? diff : [];
    } catch (e) {
        console.error('Failed to parse diff:', e);
        return [];
    }
};

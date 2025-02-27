import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCarFilterStore = create<{
    filter: {
        status: string;
        auction: string;
    };
    setFilter: (filter: { status: string; auction: string }) => void;
}>()(
    persist(
        (set, get) => ({
            filter: {
                status: 'active',
                auction: 'na',
            },
            setFilter: (filter) => set({ filter }),
        }),
        {
            name: 'cars-filter', // name of the item in the storage (must be unique)
        },
    ),
);
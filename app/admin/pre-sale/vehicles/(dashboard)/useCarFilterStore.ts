import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CarFilter {
    status: string;
    active: boolean;
    auction: string;
    deleted: boolean;
}

const initialState: CarFilter = {
    status: 'active',
    auction: 'na',
    active: true,
    deleted: false,
};

export const useCarFilterStore = create<{
    filter: CarFilter;
    setFilter: (filter: CarFilter) => void;
}>()(
    persist(
        (set, get) => ({
            filter: initialState,
            setFilter: (filter) => set({ filter }),
        }),
        {
            name: 'dash-cars-filter', // name of the item in the storage (must be unique)
        },
    ),
);
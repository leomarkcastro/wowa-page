import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ConsignerFilter {
    status: string;
    active: boolean;
    consigner: string;
    deleted: boolean;
}

const initialState: ConsignerFilter = {
    status: 'active',
    consigner: 'na',
    active: true,
    deleted: false,
};

export const useConsignerFilterStore = create<{
    filter: ConsignerFilter;
    setFilter: (filter: ConsignerFilter) => void;
}>()(
    persist(
        (set, get) => ({
            filter: initialState,
            setFilter: (filter) => set({ filter }),
        }),
        {
            name: 'dash-consigners-filter', // name of the item in the storage (must be unique)
        },
    ),
);
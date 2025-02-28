import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuctionFilter {
    status: string;
    active: boolean;
    auction: string;
    deleted: boolean;
}

const initialState: AuctionFilter = {
    status: 'active',
    auction: 'na',
    active: true,
    deleted: false,
};

export const useAuctionFilterStore = create<{
    filter: AuctionFilter;
    setFilter: (filter: AuctionFilter) => void;
}>()(
    persist(
        (set, get) => ({
            filter: initialState,
            setFilter: (filter) => set({ filter }),
        }),
        {
            name: 'dash-auctions-filter', // name of the item in the storage (must be unique)
        },
    ),
);
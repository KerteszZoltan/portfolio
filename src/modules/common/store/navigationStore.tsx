import { create } from "zustand";
import { NavigationType } from "../data/navigationData";

interface NavStore {
  isOpen: boolean;
  currentPage: number;
  content: any[];
  setIsOpen: (open: boolean) => void;
  setNextPage: () => void;
  setPreviousPage: () => void;
  setContent: (element: NavigationType[]) => void;
}

export const useNavStore = create<NavStore>()((set) => ({
  isOpen: false,
  currentPage: 1,
  content: [],
  setIsOpen: (open) => set(() => ({ isOpen: open })),
  setNextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  setPreviousPage: () =>
    set((state) => ({ currentPage: state.currentPage - 1 })),
  setContent: (element) => set((state) => ({ content: element })),
}));

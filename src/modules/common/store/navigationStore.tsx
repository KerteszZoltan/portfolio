import { create } from "zustand";
import { NavigationType } from "../data/navigationData";

interface NavStore {
  isOpen: boolean;
  currentPage: number;
  content: any[];
  setIsOpen: () => void;
  setNotOpen: () => void;
  setCurrentPage: () => void;
  increaseCurrntPage: () => void;
  setContent: (element: NavigationType[]) => void;
}

export const useNavStore = create<NavStore>()((set) => ({
  isOpen: false,
  currentPage: 1,
  content: [],
  setIsOpen: () => set((state) => ({ isOpen: (state.isOpen = true) })),
  setNotOpen: () => set((state) => ({ isOpen: (state.isOpen = false) })),
  increaseCurrntPage: () =>
    set((state) => ({ currentPage: state.currentPage + 1 })),
  setCurrentPage: () => set((state) => ({ currentPage: state.currentPage })),
  setContent: (element) => set((state) => ({ content: element })),
}));

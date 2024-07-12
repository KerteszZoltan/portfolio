import { create } from "zustand";
import { NavigationType } from "../data/navigationData";

interface NavStore {
  isOpen: boolean;
  currentPage: number;
  content: any[];
  setIsOpen: () => void;
  getIsOpen: () => void;
  setCurrentPage: () => void;
  increaseCurrntPage: () => void;
  setContent: (element: NavigationType[]) => void;
}

export const useNavStore = create<NavStore>()((set) => ({
  isOpen: false,
  currentPage: 1,
  content: [],
  setIsOpen: () => set((state) => ({ isOpen: (state.isOpen = true) })),
  getIsOpen: () => set((state) => ({ isOpen: state.isOpen })),
  increaseCurrntPage: () =>
    set((state) => ({ currentPage: state.currentPage + 1 })),
  setCurrentPage: () => set((state) => ({ currentPage: state.currentPage })),
  setContent: (element) => set((state) => ({ content: element })),
}));

import { create } from "zustand";
import { NavigationType } from "../data/navigationData";

interface NavStore {
  isOpen: boolean;
  currentPage: number;
  content: any[];
  setIsOpen: (open:boolean) => void;
  setNotOpen: () => void;
  setCurrentPage: () => void;
  increaseCurrntPage: () => void;
  setContent: (element: NavigationType[]) => void;
}

export const useNavStore = create<NavStore>()((set) => ({
  isOpen: false,
  currentPage: 1,
  content: [],
  setIsOpen: (open) => set(() => ({ isOpen: open})),
  setNotOpen: () => set((state) => ({ isOpen: (state.isOpen = false) })),
  increaseCurrntPage: () =>
    set((state) => ({ currentPage: state.currentPage + 1 })),
  setCurrentPage: () => set((state) => ({ currentPage: state.currentPage })),
  setContent: (element) => set((state) => ({ content: element })),
}));

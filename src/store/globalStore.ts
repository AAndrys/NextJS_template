import { create } from 'zustand';

export interface GlobalStoreTypes {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;

  isMobile: boolean;
  setIsMobile: (state: boolean) => void;
}

const useGlobalStore = create<GlobalStoreTypes>()(set => ({
  isMenuOpen: false,
  setIsMenuOpen: state => set({ isMenuOpen: state }),

  isMobile: false,
  setIsMobile: state => set({ isMobile: state }),
}));

export default useGlobalStore;

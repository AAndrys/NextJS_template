import { create } from 'zustand';

export interface GlobalStoreTypes {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
}

const useGlobalStore = create<GlobalStoreTypes>()(set => ({
  isMenuOpen: false,
  setIsMenuOpen: state => set({ isMenuOpen: state }),
}));

export default useGlobalStore;

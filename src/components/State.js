import create from "zustand";

export const useStore = create((set) => ({
  fileDataURL: null,
  setFileDataURL: (fileDataURL) => set({ fileDataURL }),
}));

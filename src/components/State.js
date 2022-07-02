import create from "zustand";

export const useStore = create((set) => ({
  fileDataURL: "/lun/placeholder.jpg",
  setFileDataURL: (fileDataURL) => set({ fileDataURL }),
}));

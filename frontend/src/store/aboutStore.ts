import { AboutType } from "@/model/aboutModel";
import { create } from "zustand";
import { findAbout, updateAbout } from "@/services/aboutApi.ts";

type AboutStore = {
  biography: AboutType | null;
  initBiography: () => void;
  updateBiography: (biography: AboutType) => void;
};

export const useAbout = create<AboutStore>()((set) => ({
  biography: null,
  initBiography: async () => {
    await findAbout().then((data) => set({ biography: data }));
  },
  updateBiography: async (biography) => {
    await updateAbout(biography).then(() => set({ biography }));
  },
}));

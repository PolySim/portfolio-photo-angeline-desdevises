import { create } from "zustand";

type UseConnection = {
  isConnected: boolean;
  connection: () => void;
  disconnection: () => void;
};

export const useConnection = create<UseConnection>()((set) => ({
  isConnected: false,
  connection: () => set({ isConnected: true }),
  disconnection: () => set({ isConnected: false }),
}));

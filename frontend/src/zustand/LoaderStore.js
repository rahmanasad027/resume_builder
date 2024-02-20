import create from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

const useDisabilityStore = create(
  persist(
    devtools((set) => ({
      disabled: false,
      setDisability: (value) => set({ disabled: value }),
    })),
    {
      name: "disability-store",
      getStorage: () => localStorage,
    }
  )
);

export default useDisabilityStore;

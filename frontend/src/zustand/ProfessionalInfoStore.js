import create from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

//  hook to manage zustand store. We are storing initial state in store and updating it when setPersonalInfo and resetPersonalInfo hooks are being called
const useProfessionalInfoStore = create(
  persist(
    devtools((set) => ({
      professionalInfo: {
        degree: "",
        workExperiences: [],
        cert: "",
        skill: "",
        project: "",
        linkedin: "",
        accomp: "",
      },
      setProfessionalInfo: (data, callback) => {
        set((state) => ({
          professionalInfo: { ...state.professionalInfo, ...data },
        }));
        if (callback && typeof callback === "function") {
          callback();
        }
      },
      resetProfessionalInfo: () => {
        set(() => ({
          professionalInfo: {
            degree: "",
            workExperiences: [],
            cert: "",
            skill: "",
            project: "",
            linkedin: "",
            accomp: "",
          },
        }));
      },
    })),
    {
      name: "professionalInfo-store", // Unique name for your store's persisted data
      getStorage: () => localStorage, // Choose your storage mechanism
    }
  )
);

export default useProfessionalInfoStore;

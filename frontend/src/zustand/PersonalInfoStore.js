import create from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

//  hook to manage zustand store. We are storing initial state in store and updating it when setPersonalInfo and resetPersonalInfo hooks are being called
const usePersonalInfoStore = create(
  persist(
    devtools((set) => ({
      personalInfo: {
        name: "Muhammad Asad ur Rahman",
        title: "Software Engineer",
        desc: "To seek a career where I can grow in terms of knowledge, skills and attitude and put to an effectiveuse my analytical abilities and professional competence by being dynamic, visionary and competitivewith the latest trends and also implement the emerging technologies for the betterment of theorganization.",
        contact: "0316-0149145",
        email: "rahmanasad222@gmail.com",
        skills: "React,Node,Angular,MongoDB",
        interests: "Playing Cricket, playing Table Tennis with friends and colleagus and going for travel to different places in Pakistan to explore. I also would like to go abroad and see the world in future",
      },
      setPersonalInfo: (data, callback) => {
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...data },
        }));
        if (callback && typeof callback === "function") {
          callback();
        }
      },
      resetPersonalInfo: () => {
        set(() => ({
          personalInfo: {
            name: "",
            title: "",
            desc: "",
            contact: "",
            email: "",
            skills: "",
            interests: "",
          },
        }));
      },
    })),
    {
      name: "personalInfo-store", // Unique name for your store's persisted data
      getStorage: () => localStorage, // Choose your storage mechanism
    }
  )
);


export default usePersonalInfoStore;

import create from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

//  hook to manage zustand store. We are storing initial state in store and updating it when setPersonalInfo and resetPersonalInfo hooks are being called
const useProfessionalInfoStore = create(
  persist(
    devtools((set) => ({
      professionalInfo: {
        degree: "BCSC in Computer science",
        workExperiences: [{work: 'Maintained and Revamped a logistics dashboard for Cheetay Logistics, improving rider,order, and partner mart management.Engineered a modern architecture with Dependency Injection, enhancingmaintainability and scalability.Orchestrated Sahar white label website front-end development, prioritizing speed.'}],
        cert: "Certified NodeJs developer. Developed a portal for students to streamline scholarship applications, interviewprocesses, and manage scholarship allowances and fees.Tech Stack: Node, React, MongoDB, Vercel, Blockchain Integration.",
        skill: "Nodejs, Reactjs, MongoDB, AstroJs",
        project: "Successfully deployed Mono repo technique to enhance web deployment, which ledto a considerable decrease in deployment complexity as well as an improvement indevelopment efficiency and teamwork.Collaborated effectively with stakeholders such as UX designers, product owners,otherdevelopers, and CEO to understand and participate in effective strategies for theorganization to stand out",
        linkedin: "https://www.linkedin.com/in/asad-rahman-0468a617b/",
        accomp: "Successfully deployed Mono repo technique to enhance web deployment, which ledto a considerable decrease in deployment complexity as well as an improvement indevelopment efficiency and teamwork.Collaborated effectively with stakeholders such as UX designers, product owners,otherdevelopers, and CEO to understand and participate in effective strategies for theorganization to stand out",
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

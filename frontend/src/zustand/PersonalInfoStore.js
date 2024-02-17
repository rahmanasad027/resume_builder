import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

//  hook to manage zustand store. We are storing initial state in store and updating it when setPersonalInfo and resetPersonalInfo hooks are being called
const usePersonalInfoStore = create(
  persist(
    devtools((set) => ({
      personalInfo: {
        name: '',
        title: '',
        desc: '',
        contact: '',
        email: '',
        skills: '',
        interests: '',
      },
      setPersonalInfo: (data, callback) => {
        set(() => ({ patientData: data }));
        if (callback && typeof callback === 'function') {
          callback();
        }
      },
      resetPersonalInfo: () => {
        set(() => ({
          personalInfo: {
            name: '',
            title: '',
            desc: '',
            contact: '',
            email: '',
            skills: '',
            interests: '',
          }
        }));
      }
    })),
    {
      name: 'personalInfo-store', // Unique name for your store's persisted data
      getStorage: () => localStorage // Choose your storage mechanism
    }
  )
);

export default usePersonalInfoStore;

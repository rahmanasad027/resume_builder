import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';
// import zukeeper from 'zukeeper';

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
        // visitDate: '',
        // mlc: '',
        // age: '',
        // gender: '',
        // token: ''
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
            // visitDate: '',
            // mlc: '',
            // age: '',
            // gender: '',
            // token: ''
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

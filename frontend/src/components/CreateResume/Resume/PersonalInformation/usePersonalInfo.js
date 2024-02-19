import usePersonalInfoStore from "../../../../zustand/PersonalInfoStore";
import { personalInfoAPI } from "../../../../api/personalInfo";
import { toast } from "react-toastify";

export function usePersonalInfoForm() {
  const personalInfo = usePersonalInfoStore((state) => state.personalInfo);
  const setPersonalInfo = usePersonalInfoStore(
    (state) => state.setPersonalInfo
  );
  const resetPersonalInfo = usePersonalInfoStore(
    (state) => state.resetPersonalInfo
  );

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ [name]: value });
  };
  // store data to Zustand store and call api to save data in mongodb. show toast messages for both successful and failed responses.
  const handleDataSubmit = () => {
    personalInfoAPI(personalInfo)
      .then((response) => {
        console.log(response);
        // Show success toast message
        toast.success("Data has been sent!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        // Show error toast message for any other errors
        console.log(error);
        toast.error(
          "An error occurred while sending data. Please try again later.",
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      });
  };
  return {
    personalInfo,
    setPersonalInfo,
    resetPersonalInfo,
    handleNameChange,
    handleDataSubmit,
  };
}

// useProfessionalInfoForm.js
import { useEffect } from "react";
import { toast } from "react-toastify";
import { professionalInfoAPI } from "../../../../api/professionalInfo";
import useProfessionalInfoStore from "../../../../zustand/ProfessionalInfoStore";

export function useProfessionalInfoForm() {
  const professionalInfo = useProfessionalInfoStore(
    (state) => state.professionalInfo
  );
  const setProfessionalInfo = useProfessionalInfoStore(
    (state) => state.setProfessionalInfo
  );
  const resetProfessionalInfo = useProfessionalInfoStore(
    (state) => state.resetProfessionalInfo
  );

  useEffect(() => {
    if (!professionalInfo.workExperiences) {
      setProfessionalInfo({ workExperiences: [] });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfessionalInfo({ [name]: value });
  };

  const handleWorkInputChange = (e, index) => {
    const { name, value } = e.target;
    setProfessionalInfo({
      workExperiences: professionalInfo.workExperiences.map((exp, i) =>
        i === index ? { ...exp, [name]: value } : exp
      ),
    });
  };

  const handleAddWorkExperiences = () => {
    setProfessionalInfo({
      workExperiences: [
        ...professionalInfo.workExperiences,
        {
          start: null,
          end: null,
          work: "",
        },
      ],
    });
  };

  const handleRemoveWorkExperiences = (index) => {
    setProfessionalInfo({
      workExperiences: professionalInfo.workExperiences.filter(
        (exp, i) => i !== index
      ),
    });
  };

  const handleWorkDateChanges = (date, index, fieldName) => {
    setProfessionalInfo({
      workExperiences: professionalInfo.workExperiences.map((exp, i) =>
        i === index ? { ...exp, [fieldName]: date } : exp
      ),
    });
  };

  const handleDataSubmit = () => {
    professionalInfoAPI(professionalInfo)
      .then((response) => {
        toast.success("Data has been sent!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
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
        console.error("Error:", error);
      });
  };

  return {
    professionalInfo,
    setProfessionalInfo,
    resetProfessionalInfo,
    handleInputChange,
    handleWorkInputChange,
    handleAddWorkExperiences,
    handleRemoveWorkExperiences,
    handleWorkDateChanges,
    handleDataSubmit,
  };
}

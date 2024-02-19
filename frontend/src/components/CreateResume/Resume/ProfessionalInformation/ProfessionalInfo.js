// // ProfessionalInfo.js

import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import DatePicker from "react-datepicker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProfessionalInfoForm } from "./useProfessionalInfoForm";

const ProfessionalInfo = () => {
  const {
    professionalInfo,
    resetProfessionalInfo,
    handleInputChange,
    handleWorkInputChange,
    handleAddWorkExperiences,
    handleRemoveWorkExperiences,
    handleWorkDateChanges,
    handleDataSubmit,
  } = useProfessionalInfoForm();

  // Initialize workExperiences as an empty array if not already set

  const handleChange = (e) => {
    handleInputChange(e);
  };

  const handleWorkChange = (e, index) => {
    handleWorkInputChange(e, index);
  };

  const handleAddWorkExperience = () => {
    handleAddWorkExperiences();
  };

  const handleRemoveWorkExperience = (index) => {
    handleRemoveWorkExperiences(index);
  };

  const handleWorkDateChange = (date, index, fieldName) => {
    handleWorkDateChanges(date, index, fieldName);
  };

  const handleSubmit = () => {
    handleDataSubmit();
  };

  const handleReset = () => {
    resetProfessionalInfo();
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Professional Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="degree"
            name="degree"
            label="Degree"
            fullWidth
            variant="standard"
            value={professionalInfo.degree || ""}
            onChange={handleChange}
          />
        </Grid>
        {professionalInfo?.workExperiences?.map((workExp, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              id={`work-${index}`}
              name="work"
              label={`Experience ${index + 1}`}
              fullWidth
              variant="standard"
              value={workExp.work || ""}
              onChange={(e) => handleWorkChange(e, index)}
            />
            <DatePicker
              selected={workExp.start}
              onChange={(date) => handleWorkDateChange(date, index, "start")}
              dateFormat="dd/MM/yyyy"
              popperPlacement="bottom-start"
            />
            <DatePicker
              selected={workExp.end}
              onChange={(date) => handleWorkDateChange(date, index, "end")}
              dateFormat="dd/MM/yyyy"
              popperPlacement="bottom-start"
            />
            <Button onClick={() => handleRemoveWorkExperience(index)}>
              Remove
            </Button>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button onClick={handleAddWorkExperience}>Add Work Experience</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cert"
            name="cert"
            label="Certification"
            fullWidth
            variant="standard"
            value={professionalInfo.cert || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="skill"
            name="skill"
            label="Skills"
            fullWidth
            variant="standard"
            value={professionalInfo.skill || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="project"
            name="project"
            label="Personal Projects"
            fullWidth
            variant="standard"
            value={professionalInfo.project || ""}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="linkedin"
            name="linkedin"
            label="Linkedin url"
            fullWidth
            variant="standard"
            value={professionalInfo.linkedin || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="accomp"
            name="accomp"
            label="write a paragraph on Your Accomplishments"
            fullWidth
            variant="standard"
            value={professionalInfo.accomp || ""}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
      <ToastContainer />
    </>
  );
};

export default ProfessionalInfo;

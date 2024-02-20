import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "react-datepicker/dist/react-datepicker.css";
import InputMask from "react-input-mask";
import { Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {usePersonalInfoForm} from './usePersonalInfo'

const PersonalInfo = () => {
  const {personalInfo , resetPersonalInfo , handleNameChange, handleDataSubmit} = usePersonalInfoForm()
  // to manage change in states for input fields
  const handleChange = (e) => {
    handleNameChange(e)
  };

const handleSubmit = () => {
  handleDataSubmit()
}

  // empty all input fields and reset states to be empty
  const handleReset = () => {
    resetPersonalInfo();
  };
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            name="name"
            label="Name"
            fullWidth
            variant="standard"
            value={personalInfo.name || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="standard"
            value={personalInfo.title || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="desc"
            name="desc"
            label="Description"
            fullWidth
            variant="standard"
            value={personalInfo.desc || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputMask
            mask="9999-9999999"
            value={personalInfo.contact || ""}
            onChange={handleChange}
          >
            {(inputProps) => (
              <TextField
                id="contact"
                name="contact"
                label="Contact"
                fullWidth
                variant="standard"
                {...inputProps}
              />
            )}
          </InputMask>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            value={personalInfo.email || ""}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="skills"
            name="skills"
            label="Tell us about your Skills"
            fullWidth
            variant="standard"
            value={personalInfo.skills || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="interests"
            name="interests"
            label="Tell us about your interests"
            fullWidth
            variant="standard"
            value={personalInfo.interests || ""}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
      <ToastContainer />
    </React.Fragment>
  );
};

export default PersonalInfo;

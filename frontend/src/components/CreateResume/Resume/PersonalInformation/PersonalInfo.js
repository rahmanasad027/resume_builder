import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import 'react-datepicker/dist/react-datepicker.css';
import InputMask from 'react-input-mask';
import { Button } from '@mui/material';
import usePersonalInfoStore from '../../../../zustand/PersonalInfoStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {personalInfoAPI} from '../../../../api/personalInfo'

const PersonalInfo = () => {
  const [errors, setErrors] = useState({});
  const initialPersonalInfo = usePersonalInfoStore(state => state.personalInfo);
  const resetPersonalInfo = usePersonalInfoStore(state => state.resetPersonalInfo);
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);

  // update component state everytime zustand state is updated
  useEffect(() => {
    if (initialPersonalInfo) {
      setPersonalInfo(initialPersonalInfo);
    }
  }, [initialPersonalInfo]);

// to mangae change in states for input fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    if (name === 'name' && value.trim() === '') {
      errorMessage = 'Name is required';
    } else if (name === 'name' && value.length < 3) {
      errorMessage = 'Name should be at least 3 characters long';
    }

    setPersonalInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };
//  store data to zustand store and call api to save data in mongodb. show toast messages for both successful adn failed responses.
  const handleSubmit = () => {
    usePersonalInfoStore.setState({personalInfo})
      const personalInformation = usePersonalInfoStore.getState().personalInfo;
      personalInfoAPI(personalInformation)
        .then(response => {
          // Check if the response is successful
            // Show success toast message
            toast.success('Data has been sent!', {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
        })
        .catch(error => {
          // Show error toast message for any other errors
          toast.error('An error occurred while sending data. Please try again later.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });

  };

// empty all input fields and reset states to be empty

  const handleReset = () => {
    resetPersonalInfo()  //reset the zustand state to empty
    setPersonalInfo(usePersonalInfoStore.getState().personalInfo); // set the patientState to updated empty strings
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
            value={personalInfo.name || ''}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="standard"
            value={personalInfo.title || ''}
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
            value={personalInfo.desc || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputMask
            mask="9999-9999999"
            value={personalInfo.contact || ''}
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
            value={personalInfo.email || ''}
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
            value={personalInfo.skills || ''}
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
            value={personalInfo.interests || ''}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
      <ToastContainer />
    </React.Fragment>
  );
}

export default PersonalInfo
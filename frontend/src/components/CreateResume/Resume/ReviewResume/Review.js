// components/Review.jsx
import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { fetchResumeInfoAPI } from "../../../../api/resumeInfo";
import Loading from "./Loader";
import Error from "./ErrorFetching";
import ReviewResumeLayout from "./ResumeLayouts/ResumeLayouts";

const Review = () => {
  const [selectedFormat, setSelectedFormat] = useState("default");
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiState, setApiState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResumeInfoAPI();
        setResumeData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching resume data:", error);
        setIsLoading(false);
        setApiState(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  return (
    <>
      <FormControl
        sx={{ position: "fixed", top: 130, right: 30, zIndex: 1000 }}
      >
        Select resume format
        <Select
          labelId="resume-format-label"
          id="resume-format-select"
          value={selectedFormat}
          label="Resume Format"
          onChange={handleChange}
        >
          <MenuItem value="default">Default</MenuItem>
          <MenuItem value="format1">Format 1</MenuItem>
          <MenuItem value="format2">Format 2</MenuItem>
          <MenuItem value="format3">Format 3</MenuItem>
        </Select>
      </FormControl>
      {isLoading ? (
        <Loading />
      ) : !apiState ? (
        <Error />
      ) : (
        <ReviewResumeLayout format={selectedFormat} resumeData={resumeData} />
      )}
    </>
  );
};

export default Review;
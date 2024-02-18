import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { fetchResumeInfoAPI } from "../../../../api/resumeInfo";
import ReviewResume1 from "./ReviewResume1";
import ReviewResume2 from "./ReviewResume2";
import ReviewResume3 from "./ReviewResume3";
import ReviewResume4 from "./ReviewResume4";

const Review = () => {
  const [selectedFormat, setSelectedFormat] = useState("default");
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [apiState, setApiState] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResumeInfoAPI();
        console.log("resume data: ", data);
        setResumeData(data);
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching resume data:", error);
        setIsLoading(false); // Set loading to false in case of an error'
        setApiState(false);
      }
    };

    fetchData(); // Call the async function
  }, []);

  console.log("final resume data: ", resumeData);

  const handleChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  // Function to render the appropriate ReviewResume component based on the selected format
  const renderSelectedResume = () => {
    switch (selectedFormat) {
      case "format1":
        return (
          <ReviewResume2
            resumeData={resumeData}
            isLoading={isLoading}
            apiState={apiState}
          />
        );
      case "format2":
        return (
          <ReviewResume3
            resumeData={resumeData}
            isLoading={isLoading}
            apiState={apiState}
          />
        );
      case "format3":
        return (
          <ReviewResume4
            resumeData={resumeData}
            isLoading={isLoading}
            apiState={apiState}
          />
        );
      default:
        return (
          <ReviewResume1
            resumeData={resumeData}
            isLoading={isLoading}
            apiState={apiState}
          />
        );
    }
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
      {renderSelectedResume()}
    </>
  );
};

export default Review;

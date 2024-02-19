import React from "react";
import ReviewResume1 from "./ReviewResume1";
import ReviewResume2 from "./ReviewResume2";
import ReviewResume3 from "./ReviewResume3";
import ReviewResume4 from "./ReviewResume4";

const ReviewResumeLayout = ({ format, resumeData }) => {
  switch (format) {
    case "format1":
      return <ReviewResume1 resumeData={resumeData} />;
    case "format2":
      return <ReviewResume2 resumeData={resumeData} />;
    case "format3":
      return <ReviewResume3 resumeData={resumeData} />;
    case "format4":
      return <ReviewResume4 resumeData={resumeData} />;
    default:
      return <ReviewResume1 resumeData={resumeData} />;
  }
};

export default ReviewResumeLayout;
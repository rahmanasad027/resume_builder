import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const ReviewResume1 = ({ resumeData}) => {
  return (
    <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography alignItems="center" variant="h3">
                {resumeData?.personalInfo?.name || "provide a name"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5">
                {resumeData?.personalInfo?.title || "provide a title"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h7" gutterBottom sx={{ mt: 2 }}>
                {resumeData?.personalInfo?.desc || "provide a desc"}
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              alignItems="center"
              sx={{ marginTop: "20px", marginBottom: "-10px" }}
            >
              <Typography gutterBottom variant="h6" sx={{ marginLeft: "20px" }}>
                {resumeData?.personalInfo?.email || "provide an email"}
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              alignItems="center"
              sx={{ marginTop: "20px", marginBottom: "-10px" }}
            >
              <Typography gutterBottom variant="h6" sx={{ marginLeft: "20px" }}>
                {resumeData?.personalInfo?.contact || "provide a contact"}
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              alignItems="center"
              sx={{ marginTop: "-10px", marginBottom: "-10px" }}
            >
              <Typography gutterBottom variant="h6" sx={{ marginLeft: "20px" }}>
                {resumeData?.professionalInfo?.linkedin || "No linkedin url given please go back and add it"}
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              alignItems="center"
              sx={{ marginTop: "-10px", marginBottom: "-10px" }}
            >
              <Typography gutterBottom variant="h6" sx={{ marginLeft: "20px" }}>
                {resumeData?.professionalInfo?.degree || "provide a degree"}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              sx={{ marginTop: "20px", marginBottom: "-10px" }}
            >
              <Typography
                variant="h5"
                color="dark-grey"
                gutterBottom
                sx={{ mt: 2 }}
              >
                Work Experience:
              </Typography>
              {resumeData?.professionalInfo?.workExperiences.length !== 0
                ? resumeData?.professionalInfo?.workExperiences.map((wrk) => (
                    <React.Fragment key={wrk.index}>
                      <Typography
                        gutterBottom
                        color="grey"
                        sx={{ marginTop: "2px", marginBottom: "3px" }}
                      >
                        {wrk.work !== "" ? wrk.work : "provide a degree"}
                      </Typography>
                      <Grid item xs={12}>
                        <Typography
                          variant="h8"
                          color="dark-grey"
                          gutterBottom
                          sx={{ mt: 2 }}
                        >
                          from:{" "}
                          {wrk.start
                            ? new Date(wrk.start).toISOString().split("T")[0]
                            : "00-00-0000"}
                        </Typography>
                        <Typography
                          variant="h8"
                          color="dark-grey"
                          gutterBottom
                          sx={{ marginLeft: "20px" }}
                        >
                          To:{" "}
                          {wrk.end
                            ? new Date(wrk.end).toISOString().split("T")[0]
                            : "00-00-0000"}
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  ))
                : "no work experience given, please add some"}
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              sx={{ marginTop: "20px", marginBottom: "-10px" }}
            >
              <Typography
                variant="h5"
                color="dark-grey"
                gutterBottom
                sx={{ mt: 2 }}
              >
                Personal Projects:
              </Typography>
              <Typography
                gutterBottom
                color="grey"
                sx={{ marginTop: "2px", marginBottom: "3px" }}
              >
                {resumeData?.professionalInfo?.project || "provide a project to be listed"}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              sx={{ marginTop: "20px", marginBottom: "-10px" }}
            >
              <Typography
                variant="h5"
                color="dark-grey"
                gutterBottom
                sx={{ mt: 2 }}
              >
                Certification:
              </Typography>
              <Typography
                gutterBottom
                color="grey"
                sx={{ marginTop: "2px", marginBottom: "3px" }}
              >
                {resumeData?.professionalInfo?.cert || "provide a certification to be listed"}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              sx={{ marginTop: "20px", marginBottom: "-10px" }}
            >
              <Typography
                variant="h5"
                color="dark-grey"
                gutterBottom
                sx={{ mt: 2 }}
              >
                Accomplishments:
              </Typography>
              <Typography
                gutterBottom
                color="grey"
                sx={{ marginTop: "2px", marginBottom: "3px" }}
              >
                {resumeData?.professionalInfo?.accomp || "provide your accomplishments please"}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              sx={{ marginTop: "20px", marginBottom: "-10px" }}
            >
              <Typography
                variant="h7"
                color="dark-grey"
                gutterBottom
                sx={{ mt: 2 }}
              >
                Skills:
              </Typography>
              {resumeData?.professionalInfo?.skill.length !== 0
                ? resumeData?.professionalInfo?.skill.map((skill, index) => (
                    <React.Fragment key={index}>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ marginTop: "5px" }}
                      >
                        <Chip
                          label={skill}
                          color="primary"
                          variant="outlined"
                        />
                      </Stack>
                    </React.Fragment>
                  ))
                : "Please provide your skills"}
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              sx={{ marginTop: "20px", marginBottom: "15px" }}
            >
              <Typography
                variant="h5"
                color="dark-grey"
                gutterBottom
                sx={{ mt: 2 }}
              >
                Interests:
              </Typography>
              <Typography
                gutterBottom
                color="grey"
                sx={{ marginTop: "2px", marginBottom: "3px" }}
              >
                {resumeData?.personalInfo?.interests || "provide use with examples in which things you are interested"}
              </Typography>
            </Grid>
          </Grid>
    </>
  );
};

export default ReviewResume1;

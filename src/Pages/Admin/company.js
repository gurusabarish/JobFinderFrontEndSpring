import React, { useState } from "react";

import {
  Grid,
  Card,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

// Yub and FormIK
import * as Yup from "yup";
import { Formik, getIn } from "formik";

import axios from "axios";

import config from "../../config";

import { makeStyles } from "@mui/styles";

// style constant
const useStyles = makeStyles((theme) => ({
  formControl: {
    backgroundColor: config.formColor,
  },
}));
const CompanyToAdd = (props) => {
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`${config.apiURL}/api/v1/company`);
    setCompanyList(res.data);
  };

  const classes = useStyles();
  const [companyList, setCompanyList] = useState([]);

  // company
  const [openCompany, setOpenCompany] = React.useState(false);
  const handleCompanyClose = () => {
    setOpenCompany(false);
  };
  const handleCompanyOpen = () => {
    setOpenCompany(true);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        py={2}
        justifyItems={"center"}
      >
        <Grid item xs={12} sm={7} p={2}>
          <Card
            sx={{
              borderRadius: config.borderRadius,
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              backgroundColor: config.secondaryColor,
              p: 2,
              minHeight: 100,
            }}
          >
            {!props.user.enabled && props.user.company === null ? (
              <Formik
                initialValues={{
                  company_id: "",
                }}
                validationSchema={Yup.object().shape({
                  company_id: Yup.number().required("Required"),
                })}
                onSubmit={async (
                  values,
                  { setErrors, setStatus, setSubmitting }
                ) => {
                  try {
                    setSubmitting(true);
                    try {
                      console.log(values, localStorage.getItem("token"));
                      const response = await axios.post(
                        `${config.apiURL}/api/v1/company/addtouser`,
                        {
                          user_id: localStorage.getItem("token"),
                          ...values,
                        }
                      );

                      console.log(response);
                      console.log(values);
                      // console.log(response);
                      setStatus({ success: true });
                      setSubmitting(false);

                      props.handleCompanyToAdded(false);
                    } catch (error) {
                      console.log("error signing up", error);
                      setStatus({ success: false });
                      setErrors({ submit: error.message });
                      setSubmitting(false);
                    }
                  } catch (err) {
                    console.error(err);
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                  }
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
                  touched,
                  values,
                }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <Grid
                      container
                      spacing={2}
                      alignItems="center"
                      justifyContent="center"
                      py={2}
                      justifyItems={"center"}
                    >
                      <Grid item xs={12} sm={12} p={2}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={9}>
                            <FormControl
                              fullWidth
                              error={Boolean(
                                getIn(touched, "company_id") &&
                                  getIn(errors, "company_id")
                              )}
                              className={classes.formControl}
                            >
                              <InputLabel>Company</InputLabel>
                              <Select
                                value={values.company_id}
                                onChange={handleChange}
                                onClose={handleCompanyClose}
                                open={openCompany}
                                onOpen={handleCompanyOpen}
                                name="company_id"
                                label="Company"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {companyList.map((company) => {
                                  return (
                                    <MenuItem
                                      key={company.id}
                                      value={company.id}
                                    >
                                      {company.name}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                            {getIn(touched, "company_id") &&
                              getIn(errors, "company_id") && (
                                <FormHelperText error>
                                  {errors.company_id}
                                </FormHelperText>
                              )}
                            <Box mb={2} />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <Box
                              sx={{
                                mt: 2,
                              }}
                            >
                              <Typography variant="body2" align="center">
                                <Button
                                  disableElevation
                                  disabled={isSubmitting}
                                  size="large"
                                  type="submit"
                                  variant="contained"
                                  color="secondary"
                                >
                                  submit
                                </Button>
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>

                        {errors.submit && (
                          <Box
                            sx={{
                              mt: 3,
                            }}
                          >
                            {Array.isArray(errors.submit) ? (
                              <>
                                {errors.submit.map((err) => {
                                  return (
                                    <FormHelperText error>{err}</FormHelperText>
                                  );
                                })}
                              </>
                            ) : (
                              <FormHelperText error>
                                {errors.submit}
                              </FormHelperText>
                            )}
                          </Box>
                        )}
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            ) : (
              <Typography align="center" variant="h6" sx={{ mt: 5, mb: 1 }}>
                Waiting for approval
              </Typography>
            )}
          </Card>
        </Grid>
      </Grid>
      <h1>Admin to add company</h1>
    </>
  );
};

export default CompanyToAdd;

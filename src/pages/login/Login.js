import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
  Select,
  MenuItem
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [activeTabIdUser, setActiveTabIdUser] = useState(0);
  var [firstNameValue, setFirstNameValue] = useState("");
  var [lastNameValue, setLastNameValue] = useState("");
  var [usernameValue, usernameValue] = useState("");
  var [phoneValue, setPhoneValue] = useState("");
  var [dateOfBirthValue, setDateOfBirthValue] = useState("");
  var [addressValue, setAddressValue] = useState("");
  var [emailValue, setEmailValue] = useState("");
  var [zipCodeValue, setZipCodeValue] = useState("");
  var [loginValue, setLoginValue] = useState("Ariel");
  var [passwordValue, setPasswordValue] = useState("123123");
  var [priorityValue, setPriorityValue] = useState("1");
  var [salaryValue, setSalaryValue] = useState("");
  var [occupationValue, setOccupationValue] = useState("");
  var [countryValue, setCountryValue] = useState("");
  var [companyValue, setCompanyValue] = useState("1");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Disaster Relief</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form} >
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment >
              <Typography variant="h1" className={classes.greeting}>
                Good Morning, User
              </Typography>
              {/*<Button size="large" className={classes.googleButton}>*/}
              {/*  <img src={google} alt="google" className={classes.googleIcon} />*/}
              {/*  &nbsp;Sign in with Google*/}
              {/*</Button>*/}
              {/*<div className={classes.formDividerContainer}>*/}
              {/*  <div className={classes.formDivider} />*/}
              {/*  <Typography className={classes.formDividerWord}>or</Typography>*/}
              {/*  <div className={classes.formDivider} />*/}
              {/*</div>*/}
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      loginValue.length === 0 || passwordValue.length === 0
                    }
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment >

              {/*<Typography variant="h1" className={classes.greeting}>*/}
              {/*  Welcome!*/}
              {/*</Typography>*/}
              <Typography variant="h2" className={classes.subGreeting}>
                Create account
              </Typography>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <TextField
                id="firstName"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={firstNameValue}
                onChange={e => setFirstNameValue(e.target.value)}
                margin="normal"
                placeholder="First Name"
                type="text"
                fullWidth
              />
               <TextField
                id="lastName"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={lastNameValue}
                onChange={e => setLastNameValue(e.target.value)}
                margin="normal"
                placeholder="Last Name"
                type="text"
                fullWidth
              />
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />

              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <TextField
                id="phone"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={phoneValue}
                onChange={e => setPhoneValue(e.target.value)}
                margin="normal"
                placeholder="Phone number"
                type="phone"
                fullWidth
              />
              <Typography color="secondary" className={classes.infoMessage}>
                  <br></br>Date of birth
                </Typography>
              <TextField
                id="dateOfBirth"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={dateOfBirthValue}
                onChange={e => setDateOfBirthValue(e.target.value)}
                margin="normal"
                placeholder="Date of birth"
                type="date"
                fullWidth
              />
              <TextField
                id="address"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={addressValue}
                onChange={e => setAddressValue(e.target.value)}
                margin="normal"
                placeholder="address"
                type="Address"
                fullWidth
              />
              <TextField
                id="zipCode"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={zipCodeValue}
                onChange={e => setZipCodeValue(e.target.value)}
                margin="normal"
                placeholder="Zip code"
                type="zipcode"
                fullWidth
              />
              <Tabs
                value={activeTabIdUser}
                onChange={(e, id) => setActiveTabIdUser(id)}
                indicatorColor="secondary"
                textColor="secondary"
                centered
              >
                <Tab label="Admin"  classes={{ root: classes.tabSecondary }} />
                <Tab label="Consumer" classes={{ root: classes.tabSecondary }} />
                <Tab label="Supplier" classes={{ root: classes.tabSecondary }} />
              </Tabs>
                {/*TAB FOR ADMIN USER*/}
               {activeTabIdUser === 0 && (
                  <React.Fragment >
                    <TextField
                      id="salary"
                      InputProps={{
                        classes: {
                          underline: classes.textFieldUnderline,
                          input: classes.textField,
                        },
                      }}
                      value={salaryValue}
                      onChange={e => setSalaryValue(e.target.value)}
                      margin="normal"
                      placeholder="Salary"
                      type="money"
                      fullWidth
                    />
                    <div className={classes.creatingButtonContainer}>
                      {isLoading ? (
                        <CircularProgress size={26} />
                      ) : (
                        <Button
                          onClick={() =>
                            loginUser(
                              userDispatch,
                              loginValue,
                              passwordValue,
                              props.history,
                              setIsLoading,
                              setError,
                            )
                          }
                          disabled={
                            loginValue.length === 0 ||
                            passwordValue.length === 0 ||
                            firstNameValue.length === 0 ||
                            lastNameValue.length === 0 ||
                            emailValue.length === 0 ||
                            phoneValue.length === 0 ||
                            dateOfBirthValue.length === 0 ||
                            addressValue.length === 0 ||
                            zipCodeValue.length === 0
                          }
                          size="large"
                          variant="contained"
                          color="primary"
                          fullWidth
                          className={classes.createAccountButton}
                        >
                          Create Admin
                        </Button>
                      )}
              </div>
                  </React.Fragment>
               )}
               {activeTabIdUser === 1 && (
                  <React.Fragment >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      placeholder="Priority"
                      value={priorityValue}
                      fullWidth
                      margin="normal"
                      onChange={e=>setPriorityValue(e.target.value)}
                    >
                      <MenuItem value={1}><em>Priority</em></MenuItem>
                      <MenuItem value={2}>Health worker</MenuItem>
                      <MenuItem value={3}>Military</MenuItem>
                      <MenuItem value={4}>Firefighter</MenuItem>
                    </Select>
                    <div className={classes.creatingButtonContainer}>
                      {isLoading ? (
                        <CircularProgress size={26} />
                      ) : (
                        <Button
                          onClick={() =>
                            loginUser(
                              userDispatch,
                              loginValue,
                              passwordValue,
                              props.history,
                              setIsLoading,
                              setError,
                            )
                          }
                          disabled={
                            loginValue.length === 0 ||
                            passwordValue.length === 0 ||
                            firstNameValue.length === 0 ||
                            lastNameValue.length === 0 ||
                            emailValue.length === 0 ||
                            phoneValue.length === 0 ||
                            dateOfBirthValue.length === 0 ||
                            addressValue.length === 0 ||
                            zipCodeValue.length === 0
                          }
                          size="large"
                          variant="contained"
                          color="primary"
                          fullWidth
                          className={classes.createAccountButton}
                        >
                          Create Consumer
                        </Button>
                      )}
                    </div>
                  </React.Fragment>
               )}
               {activeTabIdUser === 2 && (
                  <React.Fragment >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      placeholder="Priority"
                      value={companyValue}
                      fullWidth
                      margin="normal"
                      onChange={e=>setCompanyValue(e.target.value)}
                    >
                      <MenuItem value={1}><em>Company</em></MenuItem>
                      <MenuItem value={2}>Apple</MenuItem>
                      <MenuItem value={3}>Facebook</MenuItem>
                      <MenuItem value={4}>Google</MenuItem>
                    </Select>
                    <TextField
                      id="occupation"
                      InputProps={{
                        classes: {
                          underline: classes.textFieldUnderline,
                          input: classes.textField,
                        },
                      }}
                      value={occupationValue}
                      onChange={e => setOccupationValue(e.target.value)}
                      margin="normal"
                      placeholder="Occupation"
                      type="text"
                      fullWidth
                    />
                    <TextField
                      id="country"
                      InputProps={{
                        classes: {
                          underline: classes.textFieldUnderline,
                          input: classes.textField,
                        },
                      }}
                      value={countryValue}
                      onChange={e => setCountryValue(e.target.value)}
                      margin="normal"
                      placeholder="Country"
                      type="text"
                      fullWidth
                    />
                    <div className={classes.creatingButtonContainer}>
                      {isLoading ? (
                        <CircularProgress size={26} />
                      ) : (
                        <Button
                          onClick={() =>
                            loginUser(
                              userDispatch,
                              loginValue,
                              passwordValue,
                              props.history,
                              setIsLoading,
                              setError,
                            )
                          }
                          disabled={
                            loginValue.length === 0 ||
                            passwordValue.length === 0 ||
                            firstNameValue.length === 0 ||
                            lastNameValue.length === 0 ||
                            emailValue.length === 0 ||
                            phoneValue.length === 0 ||
                            dateOfBirthValue.length === 0 ||
                            addressValue.length === 0 ||
                            zipCodeValue.length === 0
                          }
                          size="large"
                          variant="contained"
                          color="primary"
                          fullWidth
                          className={classes.createAccountButton}
                        >
                          Create supplier
                        </Button>
                      )}
                    </div>
                  </React.Fragment>
               )}

              {/*<div className={classes.formDividerContainer}>*/}
              {/*  <div className={classes.formDivider} />*/}
              {/*  <Typography className={classes.formDividerWord}>or</Typography>*/}
              {/*  <div className={classes.formDivider} />*/}
              {/*</div>*/}
              {/*<Button*/}
              {/*  size="large"*/}
              {/*  className={classnames(*/}
              {/*    classes.googleButton,*/}
              {/*    classes.googleButtonCreating,*/}
              {/*  )}*/}
              {/*>*/}
              {/*  <img src={google} alt="google" className={classes.googleIcon} />*/}
              {/*  &nbsp;Sign in with Google*/}
              {/*</Button>*/}
            </React.Fragment>
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2020 Los Iluminati All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);

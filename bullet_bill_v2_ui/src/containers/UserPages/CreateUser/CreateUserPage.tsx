import React, {useState} from 'react';
import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux_store/store';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Button, Container } from '@mui/material';
import BBInputLables from '../../../common/components/InputLabels/InputLabels';
import { RowsList } from '../../../common/components/InputLabels/InputLabelsInterfaces';
import { createBBUser } from '../../../api/apiIndex';

interface formInputs {
  "Username" : string,
  "Email Address" : string,
  "Password" : string,
  "Re-Enter Password" : string
}

export const CreateUserPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordCheck, setHidePasswordCheck] = useState(true);

  const inputRowsList:Array<RowsList> = [
    {
      id: "userNameInput",
      label : "Username",
      defaultValue: "",
      value: userName,
      required: true,
      setStateValue: setUserName
    },
    {
      id: "emailInput",
      label : "Email Address",
      defaultValue: "",
      value: email,
      required: true,
      setStateValue: setEmail
    },
    {
      id: "passwordInput",
      label : "Password",
      defaultValue: "",
      value: password,
      required: true,
      setStateValue: setPassword,
      hideText : hidePassword,
      setHideText: setHidePassword
    },
    {
      id: "passwordCheckInput",
      label : "Re-Enter Password",
      defaultValue: "",
      value: passwordCheck,
      required: true,
      setStateValue: setPasswordCheck,
      hideText: hidePasswordCheck,
      setHideText: setHidePasswordCheck
    },
  ]

  const setInputRows = (rowsList:Array<RowsList>) => {
    return rowsList.map( (row:RowsList, i:number) =>{
      return(
        <React.Fragment key={`input_rows_${i}`}>
          {BBInputLables(row)}
        </React.Fragment>
      )
    })
  }

  const signUp = async (inputInfo:formInputs) => {

    const checkForEmptyValue = []

    for( let [key, value] of Object.entries(inputInfo)) {
      if(!value) {
        checkForEmptyValue.push(key)
        continue;
      }
    }

    if(!inputInfo || checkForEmptyValue.length > 0) {
      return alert(`Please fill out missing entries: ${checkForEmptyValue.join(", ")}`)
    }

    if(inputInfo["Password"] !== inputInfo["Re-Enter Password"]) {
      return alert("Passwords do not match. Please check password entries.")
    }

    const createUserBody = {
      user_name: inputInfo.Username,
      primary_email : inputInfo["Email Address"],
      password: inputInfo.Password
    }

    await createBBUser(createUserBody);
    return;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{border:"solid", padding:"10px 5%" }}>
        <div style={{fontSize:"35px", fontWeight: "700"}}>Create Account</div>
        <div>Create a new user to save your articles.</div>
        <Grid xs={12} style={{padding: "0px 7%"}}>
          {setInputRows(inputRowsList)}
        </Grid>
        <Button 
          style={{border: "solid", borderRadius: "25px", color: "black", backgroundColor: "rgb(156, 229, 255)", marginTop: "20px"}}
          onClick={() => signUp({
            "Username" : userName, 
            "Email Address": email, 
            "Password" : password, 
            "Re-Enter Password" : passwordCheck
          })}
          >Sign Up</Button>
      </Box>
    </Container>
  )

}
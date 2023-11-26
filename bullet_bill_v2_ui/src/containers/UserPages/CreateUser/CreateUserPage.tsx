import React, {useState} from 'react';
import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux_store/store';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Container, TextField } from '@mui/material';

interface RowsList {
  id: string;
  label: string;
  defaultValue: string;
  value: string;
  setStateValue: React.Dispatch<React.SetStateAction<string>>;
}


export const CreateUserPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChangeHandler = (setStateValue:(input:string) => void, event:Event) => {
    const valueTarget = event.target as HTMLInputElement;
    const value:string = valueTarget ? valueTarget.value : "";
    setStateValue(value);
  }

  const inputRow = (id:string, label:string, defaultValue:string, index:string, value:string, setStateValue:(input:string) => void) => {
    return (
      <Grid xs={12} style={{display: "flex", flexDirection: "column", justifyContent: "center", margin: "15px 0px"}}>
        <div style={{display: "flex", alignContent: "flex-start"}}>{label}</div>
        <TextField
          required
          fullWidth
          key={index}
          id={`${id}_${index}`}
          value = {value}
          defaultValue={defaultValue ? defaultValue : ""}
          onChange={ (e) => onChangeHandler(setStateValue, e as unknown as Event)}
          InputProps={{style : {height: "40px"}}}
        />
      </Grid>
    )
  }

  const inputRowsList:Array<RowsList> = [
    {
      id: "userNameInput",
      label : "Username",
      defaultValue: "",
      value: userName,
      setStateValue: setUserName,
    },
    {
      id: "emailInput",
      label : "Email Address",
      defaultValue: "",
      value: email,
      setStateValue: setEmail,
    },
    {
      id: "passwordInput",
      label : "Password",
      defaultValue: "",
      value: password,
      setStateValue: setPassword,
    },
    {
      id: "passwordCheckInput",
      label : "Enter Same Password",
      defaultValue: "",
      value: passwordCheck,
      setStateValue: setPasswordCheck,
    },
  ]

  const setInputRows = (rowsList:Array<RowsList>) => {
    return inputRowsList.map( (row:RowsList, i:number) =>{
      return inputRow(row.id, row.label, row.defaultValue, i.toString(), row.value, row.setStateValue)
    })
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{height: '40vh', border:"solid", padding:"10px 5%"}}>
        {/* {inputRow("userName", "Username", "", "0", userName, setUserName)} */}
        {setInputRows(inputRowsList)}
      </Box>
    </Container>
  )

}
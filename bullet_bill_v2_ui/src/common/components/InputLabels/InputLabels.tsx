import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { RowsList } from './InputLabelsInterfaces';

const BBInputLables = (props:RowsList) => {

  const onChangeHandler = (setStateValue:(input:string) => void, event:Event) => {
    const valueTarget = event.target as HTMLInputElement;
    const value:string = valueTarget ? valueTarget.value : "";
    setStateValue(value);
  }
  
  const onClickHander = (setStateValue:(input:boolean) => void, stateValue:boolean) => {
    const value = stateValue ? false : true;
    setStateValue(value);
  }  

  const inputRow = (row:RowsList) => {
    const doesHideTextClickExist:boolean = row.setHideText ? true : false;
    const hideTextClick = row.setHideText ? row.setHideText : (input:boolean) => {};
    const isVisible = row.hideText ? true : false;

    return (
        <FormControl sx={{ m: 12, width: "100%", margin:"5px 0px", maxWidth: "100%"}} variant="standard">
          <InputLabel>{row.label}</InputLabel>
          <Input
            required = {row.required ? true : false}
            type = {row.hideText ? "password" : "text"}
            id={`${row.id}`}
            value = {row.value}
            onChange={ (e) => onChangeHandler(row.setStateValue, e as unknown as Event)}
            endAdornment={
              doesHideTextClickExist ?
              (<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={ () => onClickHander(hideTextClick, isVisible)}
                  // onMouseDown={handleMouseDownPassword}
                >
                  {row.hideText ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>) 
              : null
            }
          />
        </FormControl>
    )
  }

  return (inputRow(props))

}

export default BBInputLables;
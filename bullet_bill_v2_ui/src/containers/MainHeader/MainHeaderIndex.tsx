import React, {useState} from 'react';
import { AppDispatch, RootState } from '../../redux_store/store';
import { connect } from 'react-redux'
import styles from './mainHeaderStyles.module.css';
import DropDown from '../../common/components/Dropdown/Dropdown';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const MainHeader = () => {

  const pageOptions:Array<any> = [
    {
      value : "Home",
      id : "HOME",
      onColumnClick : null
    },
    {
      value : "Create Account",
      id : "CREATE_ACCOUNT",
      onColumnClick : null
    },
  ];

  return (
    <Grid container className={styles.mainBgColor}>
      <Grid className={styles.dropDownMenu} md={1}>
        <DropDown columnNames={pageOptions} />
      </Grid>
      <Grid md={11}>
        <p>Testing</p>
      </Grid>
    </Grid>
  )
}


const mapStateToProps = ( (state:RootState) => {

  return {

  }
});

const mapDispatchToProps = (dispatch:AppDispatch) => {

}

// Typical usage: `connect` is called after the component is defined
/*
export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)
*/
import React, {useState} from 'react';
import { connect } from 'react-redux'
import styles from './mainHeaderStyles.module.css';
import { AppDispatch, RootState } from '../../redux_store/store';

export const MainHeader = () => {

  const pageOptions:Array<string> = ["Home", "Create Account"];

  return (
    <div className={styles.mainBgColor}>
      <p>Testing</p>
    </div>
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
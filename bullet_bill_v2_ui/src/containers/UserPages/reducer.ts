const { fromJS } = require('immutable');

interface Action {
  type:String,
  data: any
}


const initialState = fromJS({
  data: {
    userInfo : {
      userName: "",
      emailAddress: ""
    }
  } 
});

export default function appReducer(state = initialState, action:any) {
  switch(action.type) {
    case 'createUser': 
      /*
      without immutable
      return {
        ...state,
        userInfo : action.data
      }
      */
    return state 
      .setIn(['data', 'userInfo'], action.data);
    default:
      return state
  }
}
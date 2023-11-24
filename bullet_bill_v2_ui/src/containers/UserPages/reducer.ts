const { fromJS } = require('immutable');

interface UserInfo {
  userName: string,
  emailAddress: string
}

interface UserInfo {
  userName: string,
  emailAddress: string
}

interface UserPagesAttributes {
  userInfo: UserInfo
}

interface UserPagesReducer {
  data: UserPagesAttributes
}

interface UserPagesAction {
  type:String,
  data: UserPagesReducer
}


const userPageInitState:UserPagesReducer = {
  data: {
    userInfo : {
      userName: "",
      emailAddress: ""
    }
  } 
}

const initialState = fromJS(userPageInitState);

export default function appReducer(state = initialState, action:UserPagesAction) {
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
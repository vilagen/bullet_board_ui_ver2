import { combineReducers } from 'redux'
import userInfoReducer from '../containers/UserPages/reducer';

const rootReducer = combineReducers({
    userInfo : userInfoReducer
});

export default rootReducer

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
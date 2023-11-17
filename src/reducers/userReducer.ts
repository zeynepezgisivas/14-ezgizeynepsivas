type User = {
    name: string;
    username: string;
    email: string;
  };
  
  export type MyAction = {
    type: userActionTypes;
    payload?: User;
  };
  
  export enum userActionTypes {
    SET_USER = "SET_USER",
    FETCH_USER = "FETCH_USER",
  }
  
  const initialState = {
    user: null,
  };
  
  export const userReducer = (state = initialState, action: MyAction) => {
    switch (action.type) {
      case userActionTypes.SET_USER:
        return { ...state, user: action.payload };
      case userActionTypes.FETCH_USER:
        return { ...state };
      default:
        return state;
    }
  };
  
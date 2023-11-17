export type MyAction = {
    type: actionTypes;
    payload?: number;
  };
  
  export enum actionTypes {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    RESET = "RESET",
    INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE",
    SET_INCREMENT_VALUE = "SET_INCREMENT_VALUE",
  }
  
  const initialState = {
    count: 42,
    incrementValue: 5,
  };
  
  export const counterReducer = (state = initialState, action: MyAction) => {
    const {
      INCREMENT,
      DECREMENT,
      RESET,
      INCREMENT_BY_VALUE,
      SET_INCREMENT_VALUE,
    } = actionTypes;
  
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 };
      case RESET:
        return { ...state, count: 0 };
      case SET_INCREMENT_VALUE:
        return { ...state, incrementValue: action.payload };
      case INCREMENT_BY_VALUE:
        return { ...state, count: state.count + state.incrementValue };
      default:
        return state;
    }
  };
  
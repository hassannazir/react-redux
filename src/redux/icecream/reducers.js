import { BUY_ICECREAM } from "./actionTypes";

const initialState = {
  numOfIcecreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

export default reducer;

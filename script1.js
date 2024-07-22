import { createStore } from "redux";
console.dir(createStore);

const initialState = {
  post: 0,
  name: "Kartik Kaushik",
  age: 26,
};

const increment = "post/increment";
const decrement = "post/decrement";
const incrementBy = "post/incrementBy";
const decrementBy = "post/decrementBy";
//if else
// function reducer(state = initialState, action) {
//   if (action.type === increment) {
//     return { ...state, post: state.post + 1 };
//   } else if (action.type === decrement) {
//     return { ...state, post: state.post - 1 };
//   } else if (action.type === incrementBy) {
//     return { ...state, post: state.post + action.payload };
//   } else if (action.type === decrementBy) {
//     return { ...state, post: state.post - action.payload };
//   }
//   return state; // Return the current state if the action type does not match
// }

//switch

function reducer(state = initialState, action) {
  switch (action.type) {
    case increment:
      return { ...state, post: state.post + 1 };

    case decrement:
      return { ...state, post: state.post - 1 };

    case incrementBy:
      return { ...state, post: state.post + action.payload };

    case decrementBy:
      return { ...state, post: state.post - action.payload };

    default:
      return state; // Return the current state if the action type does not match
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: decrement });
store.dispatch({ type: decrement });
store.dispatch({ type: incrementBy, payload: 10 });
store.dispatch({ type: decrementBy, payload: 1 });

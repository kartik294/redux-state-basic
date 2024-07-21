let reduxState = {
  post: 0,
  name: "Kartik Kaushik",
  age: 26,
};

function reducer(state, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  } else if (action.type === "post/incrementBy") {
    return { ...state, post: state.post + action.payload };
  }
  return state; // Return the current state if the action type does not match
}

// what redux will do?
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/decrement" });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 1 });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 5 });
console.log(reduxState);

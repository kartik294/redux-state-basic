let state = {
  count: 0,
  name: "kartik kaushik",
  age: 26,
};

let prevState = state;
function increment() {
  //mutation of state:directly modify karna state ko
  //   state.count = state.count + 1;

  //not mutating state
  state = { ...state, count: state.count + 1 };
}

increment();
console.log(state);
increment();
console.log(state);
increment();
console.log(state);
increment();
console.log(state);

export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: "__INIT__" });
  const subscribers = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((callback) => callback());
    },
    subscribe(callback) {
      console.log("### state: ", state.getState());
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}

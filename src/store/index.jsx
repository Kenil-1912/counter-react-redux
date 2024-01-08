import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "ADDITION") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "SUBTRACTION") {
    return { ...store, counter: store.counter - 1, privacy: store.privacy };
  } else if (action.type === "MANUAL_ADDITION") {
    return {
      ...store,
      counter: store.counter + Number(action.payload.number),
    };
  } else if (action.type === "MANUAL_SUBTRACTION") {
    return { ...store, counter: store.counter - Number(action.payload.number) };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const counterStore = createStore(counterReducer);
export default counterStore;

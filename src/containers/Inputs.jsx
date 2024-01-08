import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Inputs = () => {
  const dispatch = useDispatch();
  const number = useRef();

  const handelAddition = () => {
    const action = {
      type: "ADDITION",
    };
    dispatch(action);
  };

  const handelSubtraction = () => {
    const action = {
      type: "SUBTRACTION",
    };
    dispatch(action);
  };

  const handelManualAddition = () => {
    const action = {
      type: "MANUAL_ADDITION",
      payload: {
        number: number.current.value,
      },
    };
    dispatch(action);
  };

  const handelManualSubtraction = () => {
    const action = {
      type: "MANUAL_SUBTRACTION",
      payload: {
        number: number.current.value,
      },
    };
    dispatch(action);
  };

  const handelPrivacyToggle = () => {
    const action = {
      type: "PRIVACY_TOGGLE",
    };
    dispatch(action);
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={handelAddition}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handelSubtraction}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handelPrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="mt-2">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <input type="text" placeholder="Enter Number" ref={number} />

          <button
            type="button"
            className="btn btn-info"
            onClick={handelManualAddition}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handelManualSubtraction}
          >
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;

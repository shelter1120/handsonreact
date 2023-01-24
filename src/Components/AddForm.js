import React, { useRef, useState } from "react";
import "./AddForm.css";
// import Button from './Button'
import ErrorModel from "./ErrorModel";

const AddForm = (props) => {

const usingNameRef = useRef()
const usingAgeRef = useRef()
const usingCollegeNameRef = useRef()

   const [error, setError] = useState(null);
  const onHandler = (e) => {
    e.preventDefault();
     const enterNameRef= usingNameRef.current.value
     const enterAgeRef= usingAgeRef.current.value
     const enterCollegeNameRef = usingCollegeNameRef.current.value

    if (enterNameRef.trim().length === 0 || enterAgeRef.trim().length === 0 || enterCollegeNameRef.trim().length ===0) {
      setError({
        title: "invalid input",
        message: "type somthing valid",
      });
      return;
    }
    if (enterAgeRef < 16) {
      setError({
        title: "invalid input",
        message: "type somthing valid",
      });
      return;
    }
    props.onAddList(enterNameRef, enterAgeRef,enterCollegeNameRef);
    usingNameRef.current.value='';
    usingAgeRef.current.value='';
    usingCollegeNameRef.current.value='';
  };


  const errorHandle = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandle}
        />
      )}
      <div className="input">
        <form onSubmit={onHandler}>
          <label htmlFor="username" className="input label">
            Username:
          </label>
          <input
            type="text"
            placeholder="enter user name"
            ref={usingNameRef}            
          ></input>

          <label htmlFor="age">Age:</label>
          <input
            type="number"
            ref={usingAgeRef}
          ></input>

          <label htmlFor="">College Name</label>
          <input
           type="text"
           placeholder="enter college name"
           ref={usingCollegeNameRef}
           ></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;

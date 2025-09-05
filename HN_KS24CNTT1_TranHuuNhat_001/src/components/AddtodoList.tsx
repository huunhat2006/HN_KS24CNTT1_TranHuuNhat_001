import React, { useState } from "react";
import "./addtodolist.css";
import { Action } from "./UserInterFace";

interface Props {
  dispatch: React.Dispatch<Action>;
}

const AddtodoList: React.FC<Props> = ({ dispatch }) => {
  const [check, setCheck] = useState({
    name: "",
    isName: true,
  });

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck({ ...check, name: e.target.value });
  };

  const handleClickAdd = () => {
    const isNameValid = check.name.trim() !== "";

    setCheck({
      ...check,
      isName: isNameValid,
    });

    if (isNameValid) {
      dispatch({
        type: "ADD",
        payload: {
          name: check.name,
        },
      });

      setCheck({
        name: "",
        isName: true,
      });
    }
  };
  return (
    <div className="addtodolist">
      <h3>Add to the todo list</h3>
      <div>
        <input
          type="text"
          value={check.name}
          className="inputadd"
          onChange={handleInputName}
        />
        <button className="btnadd" onClick={handleClickAdd}>
          ADD ITEM
        </button>
      </div>
    </div>
  );
};

export default AddtodoList;

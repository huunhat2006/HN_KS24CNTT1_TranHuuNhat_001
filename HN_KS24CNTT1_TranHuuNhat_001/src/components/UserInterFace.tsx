import React, { useReducer } from "react";
import Header from "./Header";
import TableTodoList from "./TableTodoList";
import Movedoneitem from "./Movedoneitem";
import AddtodoList from "./AddtodoList";

type UsertodoList = {
  id: number;
  name: string;
  completed: boolean;  
};

type Action =
  | { type: "ADD"; payload: Omit<UsertodoList, "id" | "completed"> }
  | { type: "UPDATE"; payload: UsertodoList }
  | { type: "DELETE"; payload: number }
  | { type: "TOGGLE"; payload: number }; 

const listReducer = (state: UsertodoList[], action: Action): UsertodoList[] => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          completed: false,
          ...action.payload,
        },
      ];
    case "UPDATE":
      return state.map((list) =>
        list.id === action.payload.id ? action.payload : list
      );
    case "DELETE":
      return state.filter((list) => list.id !== action.payload);
    case "TOGGLE":
      return state.map((list) =>
        list.id === action.payload ? { ...list, completed: !list.completed } : list
      );
    default:
      return state;
  }
};


const UserInterFace = () => {
  const [lists, dispatch] = useReducer(listReducer, []);

  return (
    <div>
      <Header></Header>
      <TableTodoList lists={lists} dispatch={dispatch}></TableTodoList>
      <Movedoneitem></Movedoneitem>
      <AddtodoList dispatch={dispatch}></AddtodoList>
    </div>
  );
};

export default UserInterFace;

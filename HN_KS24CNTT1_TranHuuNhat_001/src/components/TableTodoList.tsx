import React, { useState } from "react";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { UsertodoList, Action } from "./UserInterFace";
import EditListModal from "./EditListModal";
import "./tabletodolist.css";

interface Props {
  lists: UsertodoList[];
  dispatch: React.Dispatch<Action>;
}

const TableTodoList: React.FC<Props> = ({ lists, dispatch }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState<UsertodoList | null>(null);

  const handleEditClick = (list: UsertodoList) => {
    setSelectedList({ ...list });
    setEditModalOpen(true);
  };

  const handleEditConfirm = () => {
    if (selectedList) {
      dispatch({ type: "UPDATE", payload: selectedList });
    }
    setEditModalOpen(false);
  };

  const handleDeleteClick = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div className="tabletodolist">
      {lists.map((list) => (
        <div key={list.id} className="todolist">
          <p
            style={{ textDecoration: list.completed ? "line-through" : "none" }}
          >
            {list.name}
          </p>
          <div className="classbtn">
            <input
              type="checkbox"
              checked={list.completed}
              onChange={() => dispatch({ type: "TOGGLE", payload: list.id })}
            />
            <button className="btnfix" onClick={() => handleEditClick(list)}>
              <FormOutlined />
            </button>
            <button
              className="btndelete"
              onClick={() => handleDeleteClick(list.id)}
            >
              <DeleteOutlined />
            </button>
          </div>
        </div>
      ))}

      {selectedList && (
        <EditListModal
          open={editModalOpen}
          onCancel={() => setEditModalOpen(false)}
          onOk={handleEditConfirm}
          list={selectedList}
          setList={setSelectedList}
        />
      )}
    </div>
  );
};

export default TableTodoList;

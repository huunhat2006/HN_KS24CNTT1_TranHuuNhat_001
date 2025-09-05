import React, { useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import { FormOutlined } from '@ant-design/icons';
import { UsertodoList, Action } from './UserInterFace';
import EditListModal from './EditListModal';

import "./tabletodolist.css"

interface Props {
  lists: UsertodoList[]
  dispatch: React.Dispatch<Action>
}

const TableTodoList: React.FC<Props> = ({lists, dispatch}) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState<UsertodoList | null>(null);
  const handleEditClick = (list: UsertodoList) => {
    setSelectedList({ ...list });
    setEditModalOpen(true);
  };

  const handleEditConfirm = () => {
    if (selectedList) {
      dispatch({ type: 'UPDATE', payload: selectedList });
    }
    setEditModalOpen(false);
  };


  return (
    <div className='tabletodolist'>
      <div className='todolist'>
        <p>Code a todo list</p>
        <div className='classbtn'>
          <input type="checkbox" />
          <button className='btnfix' onClick={handleEditClick}><FormOutlined /></button>
          <button className='btndelete'><DeleteOutlined /></button>
        </div>
      </div>

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

    
  )
}

export default TableTodoList
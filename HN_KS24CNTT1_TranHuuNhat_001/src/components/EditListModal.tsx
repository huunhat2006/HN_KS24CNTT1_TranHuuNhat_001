import React from 'react';
import { Modal, Input } from 'antd';
import { UsertodoList} from "./UserInterFace"

interface Props {
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
  list: UsertodoList;
  setList: (value: UsertodoList) => void;
}

const EditMemberModal: React.FC<Props> = ({ open, onCancel, onOk, list, setList }) => {
  return (
    <Modal
      title="Sửa công việc"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText="Lưu"
      cancelText="Hủy"
    >
      <div style={{ marginBottom: 12 }}>
        <label>Tên:</label>
        <Input
          value={list.name}
          onChange={(e) => setList({ ...list, name: e.target.value })}
        />
      </div>
    </Modal>
  );
};

export default EditMemberModal;

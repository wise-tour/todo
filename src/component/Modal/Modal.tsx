import { Button, FloatButton, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import React, { useState } from "react";

export const ModalBox = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 100);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <FloatButton
        type="default"
        icon={<PlusOutlined />}
        onClick={showModal}
      ></FloatButton>
      <Modal
        title="Створити завдання"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

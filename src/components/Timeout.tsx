import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';

interface TimeoutProps {
    setTimeoutValue: React.Dispatch<React.SetStateAction<number | undefined>>;
  }

const Timeout: React.FC<TimeoutProps>= ({setTimeoutValue}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const value=Number(inputValue);
    if(value<0){
        window.alert("Give positive numbers")
    }else{
    setTimeoutValue(Number(inputValue));
    setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setInputValue(e.target.value);

  };

  return (
    <>
      <Button className='w-30 h-10 bg-red-500 flex justify-center items-center' onClick={showModal}>
        Add timer
      </Button>
      <Modal className='hover:none' title="Enter Duration" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input
          className='w-56 h-6'
          placeholder='Enter the duration'
          type='number'
          value={inputValue}
          onChange={handleInputChange}
          
        />
      </Modal>
    </>
  );
};

export default Timeout;

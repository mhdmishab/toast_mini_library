import React, { useState } from 'react';
import ToastContainer from '../components/ToastContainer'
import { useToaster } from '../app/hooks/ToasterHook';
import Timeout from '../components/Timeout';
import { Button, Input } from 'antd';

const ComponentTwo: React.FC = () => {
  const toaster = useToaster();
  const [timeout, setTimeoutValue] = useState<number | undefined>();
  const [text, setText] = useState<string | undefined>();
  const handleClick = () => {
    toaster.show(text, timeout);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div className='flex flex-col w-56'>
      <h1>Enter custom toast</h1>
      <Input
        className='w-56 h-10 m-2'
        placeholder='Enter the text'
        type='text'
        value={text}
        onChange={handleInputChange}

      />
      <Button className='w-full h-10 bg-yellow-700 m-2' onClick={handleClick} >
        show custom toast
      </Button>
      <ToastContainer />
      <Timeout setTimeoutValue={setTimeoutValue} />

    </div>
  )
}

export default ComponentTwo

import React, { useState } from 'react';
import ToastContainer from '../components/ToastContainer'
import { useToaster } from '../app/hooks/ToasterHook';
import Timeout from '../components/Timeout';
import { Button } from 'antd';




const ComponentOne:React.FC = ()=> {
  const toaster = useToaster();
  const [timeout,setTimeoutValue]=useState<number | undefined>();
  const handleClick = () => {
    toaster.show(undefined,timeout);
  };
  return (
    <div>
      <h1>Simple toast</h1>
      <Button className='w-20 h-10 bg-yellow-700 flex justify-center items-center' onClick={handleClick} >
        show toast 
      </Button>
      <ToastContainer/>
      <Timeout setTimeoutValue={setTimeoutValue}/>
    
    </div>
  )
}

export default ComponentOne

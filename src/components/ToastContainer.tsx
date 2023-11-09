import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks/StoreHook'
import Toast from './Toast'
import { ToastProps } from '../utils/types/Types';


const ToastContainer: React.FC = () => {
  const messages: ToastProps[] = useAppSelector((state) => state.toastReducer.messages);
  
  const [limitedMessages, setLimitedMessages] = useState<ToastProps[]>([]);

  useEffect(() => {
    
    if (messages && messages.length >= 0) {
      
      const lastThreeMessages: ToastProps[] = messages.slice(-3);
      setLimitedMessages(lastThreeMessages);
    }
  }, [messages]);

  return (
    <div className='fixed bottom-0 w-full flex flex-col space-y-3 items-center p-3'>
      {limitedMessages?.map((message,index) => (
        
        <Toast key={message.id} index={index} {...message} />
      ))}
   
    </div>
  );
}

export default ToastContainer;

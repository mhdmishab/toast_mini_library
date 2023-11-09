import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks/StoreHook';
import { apiCall, setCountdown } from '../redux/reducers/ToastSlice';
import Pagination from '../components/Pagination';
import { useToaster } from '../app/hooks/ToasterHook';
import ToastContainer from '../components/ToastContainer';

const ComponentThree: React.FC = () => {
  const toaster = useToaster();
  const dispatch = useAppDispatch();
  const { countries, apiLoading, apiFullfilled } = useAppSelector(state => state.toastReducer);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(Number(value));
  };

  const handleOnClick = () => {
    if (!inputValue || inputValue <= 0) {
      window.alert("Enter a positive number");
    } else {
      toaster.show();
      dispatch(setCountdown(inputValue));

      let countdown=inputValue;
      const intervalId = setInterval(() => {
        dispatch(setCountdown(countdown));
        if (countdown <= 0) {
          clearInterval(intervalId);
          dispatch(setCountdown(undefined));
          dispatch(apiCall());
        }
        countdown--;
      }, 1000);
    }
  };

  return (
    <>
      {apiLoading ? (
        <h4>Fetching data through API</h4>
      ) : apiFullfilled ? (
        <Pagination countries={countries} />
      ) : (
        <div className='flex flex-col p-2 m-2'>
          <h4>Enter Countdown Time</h4>
          <Input
            className='w-56 h-6'
            placeholder='Enter the duration'
            type='number'
            onChange={handleInputChange}
          />
          <Button className='bg-red-300 w-56 m-1' onClick={handleOnClick}>
            Set Timer
          </Button>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default ComponentThree;

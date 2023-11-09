import React from "react";
import { ToastProps } from '../utils/types/Types';
import { useAppDispatch, useAppSelector } from "../app/hooks/StoreHook";
import { removeMessage} from "../redux/reducers/ToastSlice";

const Toast: React.FC<ToastProps & { index: number }> = (props) => {
  const { countdown } = useAppSelector(state => state.toastReducer);
  const dispatch = useAppDispatch();
  const { id, content, number } = props;

  return (
    <div className="h-9 bg-slate-300 hover:text-slate-500 rounded flex items-center justify-between p-2 space-x-4 w-64">
      <div title={content}>{countdown !== undefined ? `${countdown}` : `${content}: ${number}`}</div>
      <button className="w-9 h-9 text-black hover:text-slate-500 flex items-center justify-center" onClick={() => { dispatch(removeMessage(id)) }}>
        x
      </button>
    </div>
  );
};

export default Toast;

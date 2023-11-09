import { useCallback, useMemo } from "react";
import { addMessage, removeMessage } from "../../redux/reducers/ToastSlice";
import { useAppDispatch } from "./StoreHook";

export function useToaster() {
  const dispatch = useAppDispatch()
  let currentNumber = 1;

  const generateId = useCallback(() => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
  }, []);

  const show = useCallback((content?: string, duration?: number) => {
    const id = generateId();
    const toastnumber = currentNumber++;

    dispatch(
      addMessage({
        id: id,
        content: content || "test",
        duration: duration || 7,
        number: toastnumber,

      })
    );

    let remainingDuration = duration || 7;

    const intervalId = setInterval(() => {
      remainingDuration -= 1;

      if (remainingDuration <= 0) {
        clearInterval(intervalId);
        dispatch(removeMessage(id));
      }
    }, 1000);
  }, [dispatch, generateId]);

  return useMemo(
    () => ({
      show: (content?: string, duration?: number) => show(content, duration),
    }),
    [show]
  );
}


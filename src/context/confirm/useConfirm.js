import { useContext } from 'react';
import { HIDE_CONFIRM, SHOW_CONFIRM } from '../types';
import { ConfirmContext } from './confirmContext';

let resolveCallback;

export const useConfirm = () => {
  const [confirmState, dispatch] = useContext(ConfirmContext);

  const onConfirm = () => {
    closeConfirm();
    resolveCallback(true);
  };

  const onCancel = () => {
    closeConfirm();
    resolveCallback(false);
  };

  const confirm = (text) => {
    dispatch({
      type: SHOW_CONFIRM,
      payload: {
        text,
      },
    });

    return new Promise((res, rej) => {
      resolveCallback = res;
    });
  };

  const closeConfirm = () => {
    dispatch({
      type: HIDE_CONFIRM,
    });
  };

  return { confirm, onConfirm, onCancel, confirmState };
};

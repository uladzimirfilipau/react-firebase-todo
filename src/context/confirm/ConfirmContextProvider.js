import { useReducer } from 'react';
import { initialState, confirmReducer } from './confirmReducer';
import { ConfirmContext } from './confirmContext';

export const ConfirmContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(confirmReducer, initialState);

  return <ConfirmContext.Provider value={[state, dispatch]}>{children}</ConfirmContext.Provider>;
};

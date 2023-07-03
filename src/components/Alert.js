import { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export const Alert = ({ ...rest }) => {
  const { alert, hide } = useContext(AlertContext);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      {...rest}
      nodeRef={nodeRef}
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350,
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} ref={nodeRef}>
        <strong>Alert!</strong>
        &nbsp;{alert.text}
        <button type='button' className='btn-close' aria-label='Close' onClick={hide} />
      </div>
    </CSSTransition>
  );
};

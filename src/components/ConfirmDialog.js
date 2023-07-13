import { createPortal } from 'react-dom';
import { useConfirm } from '../context/confirm/useConfirm';

export const ConfirmDialog = () => {
  const { onConfirm, onCancel, confirmState } = useConfirm();

  const portalElement = document.getElementById('portal');

  const component = confirmState.show ? (
    <div className='portal-overlay'>
      <div className='confirm-dialog'>
        <p>{confirmState?.text && confirmState.text}</p>
        <div className='confirm-dialog__footer'>
          <div className='btn' onClick={onConfirm}>
            Yes
          </div>

          <div className='btn' onClick={onCancel}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return createPortal(component, portalElement);
};

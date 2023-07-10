import { useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { AlertContext } from '../context/alert/alertContext';

export const Note = ({ note, onRemove, ...rest }) => {
  const nodeRef = useRef(null);
  const firebase = useContext(FirebaseContext);
  const alert = useContext(AlertContext);

  const removeHandler = () => {
    firebase
      .removeNote(note.id)
      .then(() => {
        alert.show('Todo was deleted!', 'success');
      })
      .catch(() => {
        alert.show('Todo not deleted.', 'alert');
      });
  };

  return (
    <CSSTransition {...rest} nodeRef={nodeRef} classNames={'note'} timeout={800}>
      <li className='list-group-item note' ref={nodeRef}>
        <div>
          <strong>{note.title}</strong>
          <span>{note.date}</span>
        </div>
        <button type='button' className='btn btn-outline-danger btn-sm' onClick={removeHandler}>
          &times;
        </button>
      </li>
    </CSSTransition>
  );
};

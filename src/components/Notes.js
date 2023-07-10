import { TransitionGroup } from 'react-transition-group';
import { Note } from './Note';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { useContext } from 'react';

export const Notes = ({ notes }) => {
  const { removeNote } = useContext(FirebaseContext);

  const listItems = notes.map((note) => <Note key={note.id} note={note} onRemove={removeNote} />);

  return (
    <TransitionGroup component='ul' className='list-group'>
      {listItems}
    </TransitionGroup>
  );
};

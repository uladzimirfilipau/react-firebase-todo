import { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show('Todo was created', 'success');
        })
        .catch(() => {
          alert.show('Todo not created', 'alert');
        });
      setValue('');
    } else {
      alert.show('Please enter todo name');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <input
          className='form-control'
          type='text'
          placeholder='Enter todo name...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

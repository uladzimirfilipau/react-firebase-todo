import { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
  const [value, setValue] = useState('');

  const alert = useContext(AlertContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      alert.show('Todo was created', 'success');
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

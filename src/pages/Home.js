import { Fragment } from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';

export const Home = () => {
  return (
    <Fragment>
      <Form />
      <hr></hr>
      <Notes notes={notes} />
    </Fragment>
  );
};

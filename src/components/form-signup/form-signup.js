import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from '../input';
import Button from '../button';
import FormError from '../form-error';

function FormSignup(props) {
  // props
  const { onSubmit, className } = props;

  // hooks
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [errorMessage, setErrorMessage] = useState();

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ variables: { email, password, name } }).catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col border border-gray-400 bg-white p-4">
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <hr className="my-4" />
        <Button label="Signup" type="submit" />
        { errorMessage && <FormError message={errorMessage} className="mt-4" />}
      </form>

      <p className="text-xs mt-2 text-center">
        Already have an account?&nbsp;
        <Link to="/login" className="text-white underline">Log in</Link>
      </p>
    </div>
  );
}

FormSignup.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.func,
};

FormSignup.defaultProps = {
  onSubmit: () => {},
  className: undefined,
};

export default FormSignup;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from '../input';
import Button from '../button';
import FormError from '../form-error';

function FormLogin(props) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  const [errorMessage, setErrorMessage] = useState(props.errorMessage);
  const onSubmit = (e) => {
    e.preventDefault();
    props
      .onSubmit({ email, password })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className={props.className}>
      <form onSubmit={onSubmit} className="flex flex-col border-2 border-gray-400 bg-white p-4 rounded">
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <hr className="my-4" />
        <Button label="Login" type="submit" />
        { errorMessage && <FormError message={errorMessage} className="mt-4" />}
      </form>

      <p className="text-xs mt-2 text-center">
        Don&apos;t have an account yet?
        <Link to="/signup" className="text-white underline">Sign up</Link>
      </p>
    </div>
  );
}

FormLogin.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

FormLogin.defaultProps = {
  email: null,
  password: null,
  errorMessage: null,
  onSubmit: () => {},
  className: null,
};

export default FormLogin;

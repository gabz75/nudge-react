import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from '../input';
import Button from '../button';
import FormError from '../form-error';

function FormLogin(props) {
  // props
  const { onSubmit, className } = props;

  // hooks
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password }).catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col border-2 border-gray-400 bg-white p-4 rounded">
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <hr className="my-4" />
        <Button label="Login" type="submit" />
        { errorMessage && <FormError message={errorMessage} className="mt-4" />}
      </form>

      <p className="text-xs mt-2 text-center">
        Don&apos;t have an account yet?&nbsp;
        <Link to="/signup" className="text-white underline">Sign up</Link>
      </p>
    </div>
  );
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

FormLogin.defaultProps = {
  onSubmit: () => {},
  className: undefined,
};

export default FormLogin;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from 'components/input';
import FormError from 'components/form-error';
import { Text } from 'components/globals';
import { Wrapper, StyledForm, StyledButton } from './style';

function FormLogin(props) {
  // props
  const { onSubmit, className, width } = props;

  // hooks
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ variables: { email, password } }).catch((error) => setErrorMessage(error.message));
  };

  return (
    <Wrapper className={className} width={width}>
      <StyledForm onSubmit={handleSubmit}>
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <StyledButton label="Login" type="submit" />
        { errorMessage && <FormError message={errorMessage} />}
      </StyledForm>

      <Text marginTop="md" marginBottom="0" textAlign="center" fontSize="sm">
        Don&apos;t have an account yet?&nbsp;
        <Link to="/signup">Sign up</Link>
      </Text>
    </Wrapper>
  );
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  width: PropTypes.arrayOf(PropTypes.number),
};

FormLogin.defaultProps = {
  onSubmit: () => {},
  className: undefined,
  width: undefined,
};

export default FormLogin;

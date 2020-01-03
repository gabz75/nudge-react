import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/input';
import { SignupPath } from 'routes';
import {
  FlexCol,
  Link,
  StyledButton,
  StyledForm,
  StyledFormError,
  StyledText,
  StyledFormSpinner,
} from './style';

function FormLogin(props) {
  // props
  const { onSubmit, width } = props;

  // hooks
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onSubmit({ variables: { email, password } })
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <FlexCol width={width}>
      <StyledForm onSubmit={handleSubmit}>
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <StyledButton label="Login" type="submit" />
        { loading && <StyledFormSpinner />}
        { errorMessage && <StyledFormError message={errorMessage} />}
      </StyledForm>

      <StyledText>
        Don&apos;t have an account yet?&nbsp;
        <Link to={SignupPath}>Sign up</Link>
      </StyledText>
    </FlexCol>
  );
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
  width: PropTypes.arrayOf(PropTypes.number),
};

FormLogin.defaultProps = {
  onSubmit: () => {},
  width: undefined,
};

export default FormLogin;

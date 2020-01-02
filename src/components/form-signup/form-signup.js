import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/input';
import { LoginPath } from 'routes';
import {
  FlexCol,
  Link,
  StyledButton,
  StyledForm,
  StyledFormError,
  StyledText,
} from './style';

function FormSignup(props) {
  // props
  const { onSubmit, width } = props;

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
    <FlexCol width={width}>
      <StyledForm onSubmit={handleSubmit}>
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <StyledButton label="Signup" type="submit" />
        { errorMessage && <StyledFormError message={errorMessage} />}
      </StyledForm>

      <StyledText>
        Don&apos;t have an account yet?&nbsp;
        <Link to={LoginPath}>Log in</Link>
      </StyledText>
    </FlexCol>
  );
}

FormSignup.propTypes = {
  onSubmit: PropTypes.func,
  width: PropTypes.arrayOf(PropTypes.number),
};

FormSignup.defaultProps = {
  onSubmit: () => {},
  width: undefined,
};

export default FormSignup;

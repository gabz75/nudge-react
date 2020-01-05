import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/input';
import Checkbox from 'components/checkbox';
import { useIsMounted } from 'hooks/use-is-mounted';
import {
  FlexCol,
  StyledButton,
  StyledForm,
  StyledFormError,
  StyledAbsoluteSpinner,
} from './style';

function FormGoal(props) {
  // props
  const {
    onSubmit,
    goal,
    width,
  } = props;

  // hooks
  const isMounted = useIsMounted();
  const [name, setName] = useState(goal.name);
  const [color, setColor] = useState(goal.color);
  const [_public, setPublic] = useState(goal.public);
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onSubmit({
      variables: {
        id: goal.id,
        name,
        color,
        public: _public,
      },
    })
      .catch((error) => setErrorMessage(error.message))
      .finally(() => isMounted.current && setLoading(false));
  };

  return (
    <FlexCol width={width}>
      <StyledForm onSubmit={handleSubmit}>
        <Input type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="text" label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
        <Checkbox label="Public" checked={goal.checked} onChange={(e) => setPublic(e.target.checked)} />
        <StyledButton label="Submit" type="submit" />
        { loading && <StyledAbsoluteSpinner />}
        { errorMessage && <StyledFormError message={errorMessage} />}
      </StyledForm>
    </FlexCol>
  );
}

FormGoal.propTypes = {
  onSubmit: PropTypes.func,
  goal: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    public: PropTypes.bool,
  }),
  width: PropTypes.arrayOf(PropTypes.number),
};

FormGoal.defaultProps = {
  onSubmit: () => {},
  goal: {},
  width: undefined,
};

export default FormGoal;

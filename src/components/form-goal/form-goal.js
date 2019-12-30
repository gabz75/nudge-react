import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import tw from 'tailwind.macro';

import Input from '../input';
import Checkbox from '../checkbox';
import Button from '../button';
import FormError from '../form-error';

function FormGoal(props) {
  // props
  const {
    className,
    onSubmit,
    goal,
  } = props;

  // hooks
  const [name, setName] = useState(goal.name);
  const [color, setColor] = useState(goal.color);
  const [_public, setPublic] = useState(goal.public);
  const [errorMessage, setErrorMessage] = useState();

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      variables: {
        id: goal.id,
        name,
        color,
        public: _public,
      },
    }).catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} css={tw`flex flex-col border border-solid border-gray-400 bg-white p-4`}>
        <Input type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="text" label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
        <Checkbox label="Public" checked={goal.public} onChange={(e) => setPublic(e.target.checked)} />
        <Button label="Submit" type="submit" css={tw`self-end`} />
        { errorMessage && <FormError message={errorMessage} css={tw`mt-4`} />}
      </form>
    </div>
  );
}

FormGoal.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  goal: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    public: PropTypes.bool,
  }),
};

FormGoal.defaultProps = {
  onSubmit: () => {},
  className: undefined,
  goal: {},
};

export default FormGoal;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../input';
import Checkbox from '../checkbox';
import Button from '../button';
import FormError from '../form-error';

function FormNudge(props) {
  // props
  const {
    className,
    onSubmit,
    nudge,
  } = props;

  // hooks
  const [name, setName] = useState(nudge.name);
  const [color, setColor] = useState(nudge.color);
  const [_public, setPublic] = useState(nudge.public);
  const [errorMessage, setErrorMessage] = useState();

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      variables: {
        id: nudge.id,
        name,
        color,
        public: _public,
      },
    }).catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col border-2 border-gray-400 bg-white p-4 rounded">
        <Input type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="text" label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
        <Checkbox label="Public" value={_public} onChange={(e) => setPublic(e.target.value)} />
        <Button label="Submit" type="submit" />
        { errorMessage && <FormError message={errorMessage} className="mt-4" />}
      </form>
    </div>
  );
}

FormNudge.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  nudge: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    public: PropTypes.bool,
  }),
};

FormNudge.defaultProps = {
  onSubmit: () => {},
  className: undefined,
  nudge: {},
};

export default FormNudge;

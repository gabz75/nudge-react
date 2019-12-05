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
    name,
    color,
    // archived,
    public: pub,
  } = props;

  // hooks
  const [_name, setName] = useState(name);
  const [_color, setColor] = useState(color);
  // const [_archived, setArchived] = useState(archived);
  const [_public, setPublic] = useState(pub);
  const [errorMessage, setErrorMessage] = useState();

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: _name,
      color: _color,
      // archived: _archived,
      public: _public,
    }).catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col border-2 border-gray-400 bg-white p-4 rounded">
        <Input type="text" label="Name" value={_name} onChange={(e) => setName(e.target.value)} />
        <Input type="text" label="Color" value={_color} onChange={(e) => setColor(e.target.value)} />
        {/*<Checkbox label="Archived" value={_archived} onChange={(e) => setArchived(e.target.value)} />*/}
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
  name: PropTypes.string,
  color: PropTypes.string,
  archived: PropTypes.bool,
  public: PropTypes.bool,
};

FormNudge.defaultProps = {
  onSubmit: () => {},
  className: undefined,
  name: undefined,
  color: undefined,
  archived: undefined,
  public: undefined,
};

export default FormNudge;

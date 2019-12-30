import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../input';
import Checkbox from '../checkbox';
import Button from '../button';
import FormError from '../form-error';
import { useNudgeApi } from '../../hooks/use-nudge-api';

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
  const [goalTypeDescription, setGoalTypeDescription] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const { getGoalTypes } = useNudgeApi();

  const {
    data,
  } = getGoalTypes({ notifyOnNetworkStatusChange: true, fetchPolicy: 'cache-and-network' });


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
      <form onSubmit={handleSubmit} className="flex flex-col border border-gray-400 bg-white p-4">
        <Input type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="text" label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
        <Checkbox label="Public" checked={_public} onChange={(e) => setPublic(e.target.checked)} />

        <h2 className="">Type of goal :</h2>
        <div className="flex justify-center py-2">
          {
            data && data.getGoalTypes.map((goalType) => (
              <Button
                key={goalType.id}
                label={goalType.friendlyName}
                className="mr-2"
                onClick={() => setGoalTypeDescription(goalType.description)}
              />
            ))
          }
        </div>
        {
          goalTypeDescription && (
            <p className="border border-yellow-1 p-2 mb-4">
              {goalTypeDescription}
            </p>
          )
        }


        <Button label="Submit" type="submit" />

        { errorMessage && <FormError message={errorMessage} className="mt-4" />}
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

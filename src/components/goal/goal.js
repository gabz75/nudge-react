import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Octicon, {
  Archive, Globe, Pencil, X,
} from '@primer/octicons-react';
import { useHistory } from 'react-router-dom';

import Button from '../button';
import { pathFor as goalUpdatePath } from '../../routes/goal/update';
import { useClassNameHelper } from '../../hooks/use-class-name-helper';

function Goal({ goal, ...props }) {
  // props
  const { onDelete, className } = props;
  const [hoverOn, setHoverOn] = useState(false);

  // hooks
  const history = useHistory();
  const ch = useClassNameHelper()
    .register('container', [
      'flex',
      'items-center',
    ]).register('color', [
      'mx-4',
      'inline-block',
      'w-4',
      'h-4',
      'border',
      'mr-2',
    ]);

  // handlers
  const handleEdit = () => history.push(goalUpdatePath(goal.id));
  const handleDelete = () => onDelete(goal);
  const handleArchive = () => {};

  return (
    <div
      className={ch.get('container', className)}
      onMouseEnter={() => setHoverOn(true)}
      onMouseLeave={() => setHoverOn(false)}
    >
      <span style={{ backgroundColor: goal.color }} className={ch.get('color')} />
      <span className="py-4 flex-grow">{goal.name}</span>
      <span className="px-4  text-gray-600">{goal.public && <Octicon icon={Globe} />}</span>
      <Moment className="px-4 lowercase text-xs text-gray-700" date={goal.createdAt} format="d MMM." />
      {
        hoverOn && (
          <div className="bg-gray-400 h-100 self-stretch flex items-center justify-center px-4">
            <Button type="button" size="sm" onClick={handleEdit} className="text-green-500">
              <Octicon icon={Pencil} />
            </Button>
            <Button type="button" onClick={handleArchive} className="mx-2 text-white">
              <Octicon icon={Archive} />
            </Button>
            <Button type="button" onClick={handleDelete} className="text-red-600">
              <Octicon icon={X} />
            </Button>
          </div>
        )
      }
    </div>
  );
}

Goal.propTypes = {
  goal: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    archived: PropTypes.bool,
    public: PropTypes.bool,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func,
  className: PropTypes.string,
};

Goal.defaultProps = {
  onDelete: () => {},
  className: undefined,
};

export default Goal;

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';

import Button from '../button';
import { pathFor as nudgeUpdatePath } from '../../routes/nudge/update';
import { useClassNameHelper } from '../../hooks/use-class-name-helper';

function Nudge({ nudge, ...otherProps }) {
  // props
  const { onDelete } = otherProps;

  // hooks
  const history = useHistory();
  const ch = useClassNameHelper()
    .register('color', [
      'inline-block',
      'w-4',
      'h-4',
      'border',
      'border-gray-500',
      'rounded-sm',
      'mr-2',
    ]);

  // handlers
  const handleEdit = () => history.push(nudgeUpdatePath(nudge.id));
  const handleDelete = () => onDelete(nudge);

  return (
    <div className="flex items-center">
      <span style={{ backgroundColor: nudge.color }} className={ch.get('color')} />
      <span className="flex-grow">{nudge.name}</span>
      <span className="px-4">{nudge.archived ? <span role="img" aria-label="checkmark">✅</span> : ''}</span>
      <span className="px-4">{nudge.public ? <span role="img" aria-label="checkmark">✅</span> : ''}</span>
      <Moment className="px-4 lowercase" date={nudge.createdAt} format="d MMM." />
      <Moment className="px-4 lowercase" date={nudge.updatedAt} format="d MMM." />
      <span className="pr-1"><Button type="button" size="sm" onClick={handleEdit} label="Edit" /></span>
      <span><Button type="button" size="sm" onClick={handleDelete} label="Delete" /></span>
    </div>
  );
}

Nudge.propTypes = {
  nudge: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    archived: PropTypes.bool,
    public: PropTypes.bool,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func,
};

Nudge.defaultProps = {
  onDelete: () => {},
};

export default Nudge;

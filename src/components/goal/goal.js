import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Octicon, {
  Archive, Globe, Pencil, X,
} from '@primer/octicons-react';
import { useHistory } from 'react-router-dom';

import DropdownKebab from 'components/dropdown-kebab';
import { ButtonLink } from 'components/button';
import { pathFor as goalUpdatePath } from 'routes/goal/update';
import {
  GoalWrapper,
  GoalColor,
  GoalCell,
  GoalCellGrow,
  GoalCellDate,
} from './style';

function Goal({ goal, ...props }) {
  // props
  const { onDelete } = props;

  // hooks
  const history = useHistory();

  // handlers
  const handleEdit = () => history.push(goalUpdatePath(goal.id));
  const handleDelete = () => onDelete(goal);
  const handleArchive = () => {};

  return (
    <GoalWrapper>
      <GoalColor style={{ backgroundColor: goal.color }} />
      <GoalCellGrow>{goal.name}</GoalCellGrow>
      <GoalCell>{goal.public && <Octicon icon={Globe} />}</GoalCell>
      <GoalCellDate><Moment date={goal.createdAt} format="d MMM." /></GoalCellDate>
      <DropdownKebab>
        <ButtonLink onClick={handleEdit}>
          Edit
          <Octicon icon={Pencil} />
        </ButtonLink>
        <ButtonLink onClick={handleArchive}>
          Archive
          <Octicon icon={Archive} />
        </ButtonLink>
        <ButtonLink onClick={handleDelete}>
          Delete
          <Octicon icon={X} />
        </ButtonLink>
      </DropdownKebab>
    </GoalWrapper>
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
};

Goal.defaultProps = {
  onDelete: () => {},
};

export default Goal;

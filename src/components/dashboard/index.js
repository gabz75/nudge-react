import React from 'react';
import PropTypes from 'prop-types';

import Goal from 'components/goal';
import DropdownKebab from 'components/dropdown-kebab';
import { Link } from 'components/globals';
import { GoalNewPath } from 'routes';
import { useNudgeApi } from 'hooks/use-nudge-api';
import { Card, Title } from './style';

function Dashboard(props) {
  // props
  const { width } = props;

  // hooks
  const { getGoals, deleteGoal } = useNudgeApi();
  const {
    loading, data, refetch, networkStatus,
  } = getGoals({ notifyOnNetworkStatusChange: true, fetchPolicy: 'cache-and-network' });

  // handlers
  const handleDelete = async (goal) => {
    await deleteGoal({ variables: { id: goal.id } });
    refetch();
  };

  if (networkStatus === 4) return 'Refetching!';
  if (loading) return 'Loading...';

  return (
    <Card width={width}>
      <Card.Header>
        <Title>Your goals</Title>
        <DropdownKebab>
          <Link to={GoalNewPath}>Add a goal</Link>
        </DropdownKebab>
      </Card.Header>
      <Card.Body>
        { data.getGoals.map((goal) => <Goal key={goal.id} goal={goal} onDelete={handleDelete} />) }
      </Card.Body>
    </Card>
  );
}

Dashboard.propTypes = {
  width: PropTypes.arrayOf(PropTypes.number),
};

Dashboard.defaultProps = {
  width: undefined,
};

export default Dashboard;

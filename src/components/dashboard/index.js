import React from 'react';

import Goal from 'components/goal';
import AbsoluteSpinner from 'components/absolute-spinner';
import DropdownKebab from 'components/dropdown-kebab';
import { GoalNewPath } from 'routes';
import { useNudgeApi } from 'hooks/use-nudge-api';
import { Card, Title } from './style';

function Dashboard() {
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

  if (loading) {
    return (
      <Card>
        <Card.Header>
          <Title>Your goals</Title>
        </Card.Header>
        <Card.Body>
          <AbsoluteSpinner />
          <Goal key="1" goal={{}} />
          <Goal key="2" goal={{}} />
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Header>
        <Title>Your goals</Title>
        <DropdownKebab>
          <DropdownKebab.Link to={GoalNewPath}>Add a goal</DropdownKebab.Link>
        </DropdownKebab>
      </Card.Header>
      <Card.Body>
        {networkStatus === 4 && <AbsoluteSpinner />}
        { data.getGoals.map((goal) => <Goal key={goal.id} goal={goal} onDelete={handleDelete} />) }
      </Card.Body>
    </Card>
  );
}

export default Dashboard;

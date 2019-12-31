import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Octicon, { KebabVertical } from '@primer/octicons-react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

import Goal from '../goal';
import Button from '../button';
import Dropdown from '../dropdown';
import { LoginPath, GoalNewPath } from '../../routes';
import { useAuth } from '../../hooks/use-auth';
import { useNudgeApi } from '../../hooks/use-nudge-api';

const Container = styled.div`
  ${tw`bg-white`};
`;
function Dashboard(props) {
  // props
  const { className } = props;

  // hooks
  const { logout } = useAuth();
  const history = useHistory();
  const { getGoals, deleteGoal } = useNudgeApi();
  const {
    loading, error, data, refetch, networkStatus,
  } = getGoals({ notifyOnNetworkStatusChange: true, fetchPolicy: 'cache-and-network' });

  // handlers
  const logoutAndRedirect = () => {
    logout();
    history.push(LoginPath);
  };
  const handleDelete = async (goal) => {
    await deleteGoal({ variables: { id: goal.id } });
    refetch();
  };

  if (networkStatus === 4) return 'Refetching!';
  if (loading) return 'Loading...';
  if (error) return <Button label="Log out" onClick={logoutAndRedirect} />;

  return (
    <Container className={className}>
      <div css={tw`bg-gray-500 px-8 py-4 flex justify-between items-center text-white`}>
        <h2 css={tw`text-xl`}>Your goals</h2>
        <Dropdown css={tw`pl-32`}>
          <Dropdown.Toggle>
            <div css={tw`w-8 h-8 flex items-center justify-center`}>
              <Octicon icon={KebabVertical} />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link to={GoalNewPath} css={tw`text-black`}>Add a goal</Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div css={tw`border border-t-0 p-4`}>
        <div css={tw`border`}>
          {
            data.getGoals.map((goal, i) => (
              <Goal css={i > 0 ? tw`border-t` : ''} key={goal.id} goal={goal} onDelete={handleDelete} />
            ))
          }
        </div>
      </div>
    </Container>
  );
}

Dashboard.propTypes = {
  className: PropTypes.string,
};

Dashboard.defaultProps = {
  className: undefined,
};

export default Dashboard;

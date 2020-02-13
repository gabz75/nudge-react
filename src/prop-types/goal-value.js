import PropTypes from 'prop-types';

import PropTypesGoal from 'prop-types/goal';

export default PropTypes.shape({
  id: PropTypes.string,
  goal: PropTypesGoal,
  value: PropTypes.shape({
    intValue: PropTypes.number,
    boolValue: PropTypes.bool,
  }),
});

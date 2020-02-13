import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string,
  score: PropTypes.number,
  doing: PropTypes.string,
  feelings: PropTypes.string,
  date: PropTypes.string,
  goalValues: PropTypes.array,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
});

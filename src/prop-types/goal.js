import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  archived: PropTypes.bool,
  public: PropTypes.bool,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
});

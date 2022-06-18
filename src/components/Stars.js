import Star from './Star';
import nextId from 'react-id-generator';
import PropTypes from 'prop-types';

function Stars(props) {
  const { count } = props;

  if (count < 1 || count > 5 || !Number.isInteger(count)) {
    return null;
  }

  const ranking = [];

  for (let i = 0; i < count; i++) {
    ranking.push(<Star key={nextId()} />);
  }

  return (
    <ul className='d-flex list-unstyled card-body-stars u-clearfix'>
      {ranking}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

Star.propTypes = {
  count: PropTypes.number,
};

export default Stars;

import PropTypes from 'prop-types';

export const Filter = ({filter,onChange}) => (
 <>
 <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
 </>   
)

    Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };


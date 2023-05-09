import PropTypes from 'prop-types';
import { Title, Input } from './Filter.styled';

export const Filter = ({filter,onChange}) => (
 <>
 <Title>Find contacts by name</Title>
 <Input
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


import PropTypes from 'prop-types';

export const ContactList = ({filteredContacts}) => {

    return (
        <>
    {filteredContacts.map(({id, name, number}) => (
          <p key={id}>{name}: {number}</p>
    ))}
    </>
)};

    
    
    ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
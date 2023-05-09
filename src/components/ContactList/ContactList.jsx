import PropTypes from 'prop-types';

export const ContactList = ({filteredContacts, handleDeleteContact}) => {

    return (
        <>
    {filteredContacts.map(({id, name, number}) => (
          <p key={id}>
          {name}: {number}
          <button type='button' onClick={()=> handleDeleteContact(id)}>
            Delete
            </button>
            </p>
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
    handleDeleteContact: PropTypes.func.isRequired,
  };
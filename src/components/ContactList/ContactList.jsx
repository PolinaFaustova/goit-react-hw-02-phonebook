import PropTypes from 'prop-types';
import { ContactItem, ContactName, ContactNumber, DeleteButton} from './ContactList.styled';

export const ContactList = ({filteredContacts, handleDeleteContact}) => {

    return (
        <>
    {filteredContacts.map(({id, name, number}) => (
          <ContactItem key={id}>
            <div>
          <ContactName>{name}:
          </ContactName> 
          <ContactNumber>{number}</ContactNumber>
          </div>
          <DeleteButton type='button' onClick={()=> handleDeleteContact(id)}>
            Delete
            </DeleteButton>
            </ContactItem>
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
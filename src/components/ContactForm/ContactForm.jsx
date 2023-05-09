import PropTypes from 'prop-types';
export const ContactForm = ({name,number,onChange,addContact}) => (
    <>
    <p>Name</p>
    <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={name}
    onChange={onChange}
    /> 
    


    <p>Number</p> 
    <input
     type="tel"
     name="number"
     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
     required
     value={number}
     onChange={onChange}
     />  
    <button type='button' onClick={addContact}>Add contact</button>

    </>
       
)

    ContactForm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    addContact: PropTypes.func.isRequired
  };
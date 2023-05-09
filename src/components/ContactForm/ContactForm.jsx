import PropTypes from 'prop-types';
import { FormContainer, Input, Button, Title } from './ContactForm.styled';


export const ContactForm = ({name,number,onChange,addContact}) => (
    <FormContainer>
    <Title>Name</Title>
    <Input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={name}
    onChange={onChange}
    /> 
    


    <Title>Number</Title> 
    <Input
     type="tel"
     name="number"
     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
     required
     value={number}
     onChange={onChange}
     />  
    <Button type='button' onClick={addContact}>Add contact</Button>

    </FormContainer>
       
)

    ContactForm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    addContact: PropTypes.func.isRequired
  };
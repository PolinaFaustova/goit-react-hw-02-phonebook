import PropTypes from 'prop-types';
import { FormContainer, Input, Button, Title } from './ContactForm.styled';
import { Component } from "react";
import { nanoid } from 'nanoid';


export class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

        handleAddContact = () => {
        const {name, number} = this.state;
        const checkContactExist = this.props.contacts.some((contact)=> contact.name === name);
        if(checkContactExist) {
          alert(`${name} is already in contacts.`);
          return;
        }
    
        const newContact = { id: nanoid(), name, number};
        this.props.onAddContact(newContact);
    this.setState({ name: "", number: "" });
      };

    render() {
        const {name, number} = this.state;  

        return (
            <FormContainer>
            <Title>Name</Title>
            <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
            /> 
            
        
        
            <Title>Number</Title> 
            <Input
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
             value={number}
             onChange={this.handleChange}
             />  
            <Button type='button' onClick={this.handleAddContact}>Add contact</Button>
        
            </FormContainer>
        )
    }
} 

    ContactForm.propTypes = {
    onChange: PropTypes.func,
    onAddContact: PropTypes.func,
    contacts: PropTypes.array.isRequired
  };

  
  
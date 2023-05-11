import { Component } from "react";
import { ContactForm } from "./ContactForm/index";
import {Filter} from './Filter/index'
import { ContactList } from "./ContactList";
import { Container, TitlePhonebook, TitelContacts} from './App.styled';

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = (newContact) => {
    const checkContactExist = this.state.contacts.some(
      (contact) => contact.name === newContact.name
    );
    if (checkContactExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  
    
  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  
  handleFilterChange = (event) => {
    this.setState({filter: event.target.value});
  }
  
  render () {

    const {contacts, name, number, filter} = this.state;
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));

    return (
      <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm name={this.state.name}
      number={this.state.number}
      onChange={this.handleChange} 
      onAddContact={this.handleAddContact}
      contacts={this.state.contacts}/>
      
      
         
        <TitelContacts>Contacts</TitelContacts>
        <Filter filter={filter}
        onChange={this.handleFilterChange}/>
        <ContactList filteredContacts={filteredContacts}
        name={name}
        number={number}
        handleDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
  
};

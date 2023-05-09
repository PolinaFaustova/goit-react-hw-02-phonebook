import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/index";
import {Filter} from './Filter/index'
import { ContactList } from "./ContactList";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleAddContact = () => {
    const {name, number} = this.state;
    const newContact = { id: nanoid(), name, number};
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: ''
    }));
  };

  handleFilterChange = (event) => {
    this.setState({filter: event.target.value});
  }
  
  render () {

    const {contacts, name, number, filter} = this.state;
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));

    return (
      <>
      <div>
      <h2>Phonebook</h2>
      <ContactForm name={name}
      number={number}
      onChange={this.handleChange}
      addContact={this.handleAddContact}/>
      
      
      
        <h2>Contacts</h2>
        <Filter filter={filter}
        onChange={this.handleFilterChange}/>
        <ContactList filteredContacts={filteredContacts}
        name={name}
        number={number}
        />
      </div>
      </>
    );
  }
  
};

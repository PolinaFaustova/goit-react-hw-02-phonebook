import { Component } from "react";
import { nanoid } from 'nanoid';

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
      <p>Name</p>
      <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={name}
      onChange={this.handleChange}
      /> 
      </div>

      <div>
      <p>Number</p> 
      <input
       type="tel"
       name="number"
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       value={number}
       onChange={this.handleChange}
       />  
      <button type='button' onClick={this.handleAddContact}>Add contact</button>
      </div>
      
      <div>
        <h2>Contacts</h2>
        <input
          type="text"
          name="filter"
          placeholder="Search contacts by name"
          value={filter}
          onChange={this.handleFilterChange}
        />
        {filteredContacts.map(({id, name, number}) => (
          <p key={id}>{name}: {number}</p>
        ))}
      </div>
      </>
    );
  }
  
};

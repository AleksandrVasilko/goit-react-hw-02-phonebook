import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactsList from './ContactsList/ContactsList'
import Filter from './Filter/Filter';
import shortid from "shortid";

class App extends Component {

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }
  
  addContact = ( name, number ) => {
    //console.log(text)
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [ ...prevState.contacts, contact]
      
    }))
    console.log(this.state)
    console.log(this.state.name)
  };

  changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    getVisibleTodos = () => {
        const { filter, contacts } = this.state;

        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleTodos();

    return (
      <div>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={ this.changeFilter}/>
        
        <ContactsList contacts={ visibleContacts }/>
      </div>
    );
  };
}

export default App;
 
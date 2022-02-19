import React, { Component } from "react";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleChangeName = event => {
        this.setState({ name: event.currentTarget.value })
    };
    
    handleChangeNumber = event => {
        this.setState({ number: event.currentTarget.value })
    };
    
    handleSubmit = event => { 
        event.preventDefault();

        console.log(this.state);

        this.props.onSubmit(this.state.name, this.state.number);
        //this.props.onSubmit();
        

        this.setState({name: ''})
        this.setState({number: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChangeName}
                />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChangeNumber}
                />
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default ContactForm;
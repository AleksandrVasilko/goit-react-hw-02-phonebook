import React from "react";

const ContactsList = ({ contacts, onDeleteContact }) => (
    <ul className="TodoList">
        {contacts.map(({ id, name, number}) =>(
            <li
                key={id}
                className='TodoList__item'>
                
                <p className="TodoList__text">{name}</p>
                <p className="TodoList__text">{number}</p>
                
                <button
                    type="button"
                    className="TodoList__button"
                    onClick={() => onDeleteContact(id)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

export default ContactsList;

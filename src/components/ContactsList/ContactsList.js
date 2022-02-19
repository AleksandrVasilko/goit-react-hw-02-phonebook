import React from "react";

const ContactsList = ({ contacts }) => (
    <ul className="TodoList">
        {contacts.map(({ id, name, number}) =>(
            <li
                key={id}
                className='TodoList__item'>
                
                <p className="TodoList__text">{name}</p>
                <p className="TodoList__text">{number}</p>
                
            </li>
        ))}
    </ul>
);

export default ContactsList;

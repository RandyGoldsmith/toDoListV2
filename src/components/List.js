import React from 'react';
import './List.css';

import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({items}) => {
    const todoList = items.map((item) => {
        return (
        <li key={item.id} className="list-bar">
            {item.title}
            <span>
                <FaEdit color="red" cursor="pointer" />
                {" "}
                <FaTrash color="blue" cursor="pointer"/>
            </span>  
        </li>
        )
    });

    return (
        <ul>
            {todoList}
        </ul>
    
    );
};

export default List;
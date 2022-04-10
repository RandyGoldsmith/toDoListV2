import React from 'react';
import './List.css';

import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({items, deleteItem, editItem}) => {
    const todoList = items.map((item) => {
        return (
        <li key={item.id} className="list-bar">
            {item.title}
            <span>
                <FaEdit color="green" cursor="pointer" onClick={() => editItem(item.id)}/>
                {" "}
                <FaTrash color="red" cursor="pointer" onClick={() => deleteItem(item.id)}/>
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
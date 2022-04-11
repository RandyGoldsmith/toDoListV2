import React, { useState, useEffect } from 'react';
import List from './components/List';
import Alert from './components/Alert';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, message: '', type: ''});
  

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      alertInfo(true, 'Enter a todo item', 'danger');
    } else if(name && isEditing) {
      setList(
        list.map((item) => {
          if(item.id === editID) {
            return {...item, title: name};
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      alertInfo(true, 'Item updated!', 'success');
    } else {
      alertInfo(true, 'Added Item!', 'success');
      setList([...list, {id: Math.random(), title: name} ]);
      setName('');
    }
  };

  const alertInfo = (show=false, message='', type='') => {
    setAlert({show, message, type });
  }

  const clearItems = () => {
    alertInfo(true, 'Items Deleted!', 'danger');
    setList([]);
  };

  const deleteItem = (id) => {
    alertInfo(true, 'Item Deleted', 'danger');
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const individualItem = list.find((item) => item.id === id); 
    setIsEditing(true);
    setEditID(id);
    setName(individualItem.title);
   
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="form-center" onSubmit={onHandleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={alertInfo} list={list}/>}
        <h3>ToDo List</h3>
          <div className="input-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="eg. Walk the dog" 
              id="inputText" 
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}  
              />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Edit' : 'Submit'}
            </button>
          </div>
          </div>                
      </form>
      <div className="todo-list">
        <List items={list} deleteItem={deleteItem} editItem={editItem}/>
        <button className="clear-btn" onClick={clearItems}>
          Clear List
        </button>
      </div>
    </section>
          
            
      
    
      
    
    
  );
}

export default App;

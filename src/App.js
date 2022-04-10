import React, { useState } from 'react';
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
      alertInfo(true, 'Enter a value', 'danger');
    } else if(name && isEditing) {
      //
    } else {
      alertInfo(true, 'Added Item!', 'success');
      setList([...list, {id: Math.random(), title: name} ]);
      setName('');
    }
  };

  const alertInfo = (show=false, message='', type='') => {
    setAlert({show, message, type });
  }

  

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
        <List items={list}/>
        <button className="clear-btn">
          Clear List
        </button>
      </div>
    </section>
          
            
      
    
      
    
    
  );
}

export default App;

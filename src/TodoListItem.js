import React, {useState} from 'react';
import './App.css'


function TodoListItem(props) {

    const {_id, name, done, toggleDone, remove, move, edit} = props;

    const [newTodo, setNewTodo] = useState(name)
    const [isEditMode, setIsEditMode] = useState(false)

    const titleStyle = done ? {textDecoration: 'line-through'} : {};

    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    };
    const saveButtonHandler = () => {
        edit(_id, newTodo)
        setIsEditMode(false)
    };


    if (isEditMode) {
        return (
            <div>
                <input onChange={inputHandler} value={newTodo}/>
                <button className="btn btn-outline-info" onClick={saveButtonHandler}>Save</button>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                        <span style={titleStyle}>
                            <input type='checkbox' className='mr-2' checked={done} onChange={() => toggleDone(_id, done)}/>
                            <span className='h5 mr-2'>{name}</span>
                            <button className="btn btn-outline-secondary ml-1 mr-1" onClick={() => remove(_id)}>X</button>
                            <button className="btn btn-outline-secondary ml-1 mr-1" onClick={() => setIsEditMode(true)}>Edit
                            </button>
                            <button className="btn btn-outline-secondary ml-1 mr-1" onClick={() => move(_id, -1)}>↑
                            </button>
                            <button className="btn btn-outline-secondary ml-1 mr-1" onClick={() => move(_id, 1)}>↓
                            </button>
                        </span>
                </div>
            </div>
        )
    }
}

export default TodoListItem;

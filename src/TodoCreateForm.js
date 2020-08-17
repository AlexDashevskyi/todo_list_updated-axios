import React, {useState} from 'react';


function TodoCreateForm(props) {
    const [inputValue, setInputValue] = useState('')
    const inputOnChange = e => {
      setInputValue(e.target.value)
    };
    const onCreate = () => {
        props.create(inputValue)
        setInputValue('')
    }
    return (
        <div>
           Input Todo Task(s)
            <input value={inputValue} onChange={inputOnChange}/>
            <button className="btn btn-outline-secondary" onClick={onCreate}>Create</button>
            <br/>
            <br/>
            Todo task(s):
        </div>
    );
}

export default TodoCreateForm;
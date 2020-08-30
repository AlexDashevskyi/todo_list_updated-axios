import React, {useEffect, useState} from 'react';
import TodoCreateForm from './TodoCreateForm';
import TodoListItem from './TodoListItem';
import './App.css';
import axios from 'axios'

function App() {


    const [list, setList] = useState([])

    const create = async (title) => {

        await axios.post('https://my-server89.herokuapp.com/todo', {name: title})
            .then(function (response) {
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        await axios.get('https://my-server89.herokuapp.com/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(response)
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };
    const toggleDone = async (todoId, done) => {
       await axios.put(`https://my-server89.herokuapp.com/todo/${todoId}`, {done:!done})
            .then(function (response) {
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        await axios.get('https://my-server89.herokuapp.com/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(response)
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };
    const remove = async (todoId) => {
        await axios.delete(`https://my-server89.herokuapp.com/todo/${todoId}`)
            .then(function (response) {
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        await axios.get('https://my-server89.herokuapp.com/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(response)
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };

    const edit = async (todoId, newTodo) => {
        await axios.patch(`https://my-server89.herokuapp.com/todo/${todoId}`, {name:newTodo})
            .then(function (response) {
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        await axios.get('https://my-server89.herokuapp.com/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(response)
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };
    const move = (todoId, direction) => {
        const firstIndex = list.findIndex(el => el._id === todoId);
        const secondIndex = firstIndex + direction;

        if (secondIndex < 0 || secondIndex > list.length - 1) {
            console.warn("CAN'T MOVE!")
        } else {
            const newList = [...list];
            [newList[firstIndex], newList[secondIndex]] = [newList[secondIndex], newList[firstIndex]]

            setList(newList)
        }
    };

    useEffect(() => {
        axios.get('https://my-server89.herokuapp.com/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(response)
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (

        <div className={'App'}>

            <TodoCreateForm create={create}/>
        <br/>
            {list.map((el, i) =>
                <TodoListItem
                    _id={el._id}
                    name={el.name}
                    done={el.done}
                    key={el._id}
                    index={i}
                    toggleDone={toggleDone}
                    remove={remove}
                    move={move}
                    edit={edit}
                />)}
        </div>
    );
}

export default App;

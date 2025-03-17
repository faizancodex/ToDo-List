import './App.css';
import { useState } from 'react';

function App() {
  let [todolist, setodolist] = useState([])
  let Savetodolist = (event) => {
    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finaldolist = [todoname, ...todolist]
      setodolist(finaldolist)
      event.target.todoname.value = ''; // Clear input field
    }
    else {
      alert("Name already exist")
    }
    event.preventDefault()
  }
  let list = todolist.map((value, index) => {
    return (
      <ListItem value={value} key={index}
        indexNumber={index} todolist={todolist} setodolist={setodolist}
      />
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>

      <form onSubmit={Savetodolist}>
        <input type="text" name="todoname" required />
        <button>+</button>
      </form>

      <div className="outerdiv">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}
export default App;
function ListItem({ value, indexNumber, todolist, setodolist }) {
  let [status, setStatus] = useState(false)
  let deleteRow = () => {
    let finallist = todolist.filter((v, i) => i !== indexNumber)
    setodolist(finallist)
  }
  let checkStatus = () => {
    setStatus(!status)
  }
  return (
    <li className={(status) ? 'checktodolist' : ''} onClick={checkStatus}> {value} <button className='cross-btn' onClick={deleteRow}>&times;</button> </li>
  )
}
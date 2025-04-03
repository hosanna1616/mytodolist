import React from 'react'
import react,{useState} from'react'
function ToDoList() {
    const [task,setTask]=useState(["eat breakfase","take shower","walking"]);
    const [newTask,setNewTask]=useState("");
    /*for the input */
    function handleInputChange(event){
        /*this one is the main part which will allow me to write text in the input field without this the input field will not accept anuything from user */
setNewTask(event.target.value);
    }
    function addTask() {
      /* if part is used there to prevent user from clicking add without writing anything */
      if(newTask.trim()!==""){
        setTask([...task, newTask]);
        setNewTask(""); // Clear input after adding
      }
      
    }

    function deleteTask(index){
      /*this part is creating new array */
const updatedTask=task.filter((Element,i)=>i!==index);
setTask(updatedTask);
    }
    function moveTaskUp(index){
if(index>0){
  const updatedTask=[...task];
  [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1],
    updatedTask[index]];
    setTask(updatedTask);
}
    }
    function moveTaskDown(index){

    }
  return (
    <div>
      <div className="todolist">
        <h1>to -do -list</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addbutton" onClick={addTask}>
          add
        </button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={(index = 0)}>
            <span className="text">{task}</span>
            <button className="deletebutton" onClick={() => deleteTask(index)}>
              delete
            </button>
            <button className="moveup" onClick={() => moveTaskUp(index)}>
              up
            </button>
            <button className="movedown" onClick={() => moveTaskDown(index)}>
              down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList

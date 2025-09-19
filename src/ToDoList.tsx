import React, {useState} from "react";

export default function ToDoList() {

    const [tasks, setTasks] = useState(["this is a sapmle task", "b", "c"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }

    function addTask() {
    }

    function deleteTask(index: number) {
    }

    function moveTaskUp(index: number) {
        
    }
    function moveTaskDown(index: number) {
        
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div className="input">
                <input type="text" placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
                <button className="add-button"
                onClick={addTask}>
                    Add
                </button>
                <ol>
                    {tasks.map((task, index) => <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() =>deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() =>moveTaskUp(index)}>Up</button>
                        <button className="move-button" onClick={() =>moveTaskDown(index)}>Down</button>
                    </li>)}
                </ol>
            </div>
        </div>
    );
}
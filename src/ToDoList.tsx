import React, {useState} from "react";

export default function ToDoList() {

    const [tasks, setTasks] = useState(["Sample Task"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask.trim()]);
            setNewTask("");
        }
    }

    function deleteTask(index: number) {
        setTasks(tasks => tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index: number) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index: number) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
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
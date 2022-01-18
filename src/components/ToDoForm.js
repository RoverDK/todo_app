import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ToDoForm() {

    const [task,setTask] = useState('')
    const [taskError, setTaskError] = useState(false)

    const dispatch = useDispatch()

    const addTask = (e) => {
        e.preventDefault()
        if(!task){
            setTaskError(true)
        }else{
            setTaskError(false)
            dispatch({type:'ADD_TODO',newItem: {id: Math.random().toString(36).substring(2,9), task: task}})
        }
        
    }

    return (
        <form className="add_todo" onSubmit={(e) => addTask(e)}>
            <TextField error={taskError} variant='filled' margin="normal" value={task} onChange={(e) => setTask(e.target.value)} label="Task" />
            <Button type="submit">Save</Button>
        </form>
    );
}

export default ToDoForm
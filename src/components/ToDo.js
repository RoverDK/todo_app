import { Box, Button, TextField, Typography } from "@material-ui/core";
import { Delete, Edit, Save, Close } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ToDo({todo}) {

    const [edit, setEdit] = useState(false) // Для отобраджение Либо таска, либо поля для ввода
    const [editText, setEditText] = useState('')
    const [taskError, setTaskError] = useState(false)

    const dispatch = useDispatch()
    
    const saveEdit = () => {
        if(!editText){
            setTaskError(true)
        }else{
            setTaskError(false)
            setEdit(false)
            dispatch({type: 'EDIT_TODO', id: todo.id, payload: editText})
        } 
    }

    const deleteTodo = () => {
        dispatch({type: 'DELETE_TODO', id: todo.id})
    }

    return (
      <div style={{display: 'flex', justifyContent:'space-between', marginTop: '10px', alignItems:'center', minHeight: '70px' , border: '1px solid black', borderRadius: '10px', padding: '10px' }}>
            {!edit &&
                <Typography style={{fontSize: '2rem', wordWrap: 'break-word', maxWidth: '80%'}}>{todo.task}</Typography>
            }
            {edit &&
                <Box alignItems='center'>
                    <Button onClick={() => saveEdit()}><Save fontSize='large'/></Button>
                    <TextField error={taskError} variant='filled' onChange={(e) => setEditText(e.target.value)} label={todo.task.length >= 18 ? todo.task.substring(0,18) + '...' : todo.task}></TextField>
                </Box>
            }
            <Box>
                <Button onClick={() => setEdit(!edit)}>
                    {edit &&
                        <Close fontSize='large'/>
                    }
                    {!edit &&
                        <Edit fontSize='large'/>
                    }
                </Button>
                <Button onClick={() => deleteTodo()}><Delete fontSize='large'/></Button>
            </Box>
      </div>
    );
}

export default ToDo
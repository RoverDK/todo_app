import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

function App() {

  const todos = useSelector(state => state.todos)
  console.log(todos)

  return (
    <div className='parent'>
      <h1>Task List</h1>
      <ToDoForm />
      {todos.map((todo)=>{
        return (
          <ToDo
          key={todo.id}
          todo={todo}/>
        )
      })}
    </div>
  );
}

export default App;

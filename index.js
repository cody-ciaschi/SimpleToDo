function App(){
  
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }

  return(
    <>
      <h1>To Do list</h1>
      <div className="todo-list">
        {todos.map((todo, i) => <Todo todo={todo} key={i} index={i} remove={removeTodo}/>)}
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

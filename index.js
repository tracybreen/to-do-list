function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'get some sleep',
      isCompleted: false,
    },
    {
      text: 'find a lot of money on the ground',
      isCompleted: false,
    },
    {
      text: 'call out of work',
      isCompleted: false,
    },
    {
      text: 'build something super impressive',
      isCompleted: false,
    },
    {
      text: 'marinate self in outpouring of praise',
      isCompleted: false,
    },
    {
      text: 'wash up and get a job that pays a buttload of money',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <>
      <div className='app'>
        <div className='todo-list'>
          {todos.map((todo, i) => (
            <Todo index={i} key={i} todo={todo} remove={removeTodo} />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

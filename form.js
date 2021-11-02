function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //stops from reloading the page by default
    if (!value) return;
    addTodo(value);

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        placeholder='Add ToDo ...'
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

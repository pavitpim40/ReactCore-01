function TodoItem({ todo }) {
    return (
        <li className='todo__item'>
            <span>{todo}</span>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    );
}

function App() {
    const todos = [
        { id: 1, task: 'HW' },
        { id: 2, task: 'Hangout' },
        { id: 3, task: 'Sleep' },
    ];
    return (
        <div className='container'>
            {/* AddTodo Comp.*/}
            <div className='todo__add'>
                <input type='text' />
                <button>Add</button>
            </div>

            {/* TodoList = List of TodoItem */}
            <div className='todo__container'>
                <ul className='todo__lists'>
                    {todos.map((obj) => (
                        <TodoItem todo={obj.task} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);

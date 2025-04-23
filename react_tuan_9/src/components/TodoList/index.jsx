import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, complete } from "../../reducer/todoList";
function TodoList() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector(state => {
    return state.todoList;
  });


  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-md w-full max-w-md p-6 md:p-8 rounded-3xl shadow-xl space-y-6 transition-all">
        <h1 className="text-3xl font-bold text-gray-800 text-center">To-do List</h1>

        {/* Input giả lập */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Thêm công việc..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md transition-all"
            onClick={() => { dispatch(add({ id: Date.now(), text: text, completed: false })); setText("") }}
          >
            Thêm
          </button>
        </div>

        {/* Danh sách công việc tĩnh */}
        <ul className="space-y-3">
          {
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className={`flex items-center gap-2 ${todo.completed ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                >
                  <input
                    type="checkbox" className='w-[20px] h-[20px]' defaultChecked={todo.completed ? true : false}
                    onChange={() => {
                      dispatch(complete(todo.id))
                    }}
                  />
                  <span className="text-lg">{todo.text}</span>
                </div>
                <button className="text-red-500 hover:text-red-600"
                  onClick={() => {
                    dispatch(remove(todo.id));
                  }}
                >
                  🗑️
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}


export default TodoList;
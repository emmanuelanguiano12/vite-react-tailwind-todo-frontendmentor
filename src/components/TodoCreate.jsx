import { useState } from "react";

const TodoCreate = ({createTodo}) => { 

const [title, setTitle] = useState('')

const handleSubmitAddTodo = (e)  => {
  e.preventDefault();
  if(!title.trim()){
    return setTitle("");
  }
  createTodo(title);
  setTitle("");
}

    return(
        <form onSubmit={handleSubmitAddTodo} className="flex gap-4 items-center rounded-md overflow-hidden bg-white py-4 px-4 dark:bg-gray-800">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input value={title} onChange={e => setTitle(e.target.value)} className="w-full outline-none text-gray-400 dark:bg-gray-800" type="text" placeholder="Create a new todo" />
        </form>
    )
 }

 export default TodoCreate;
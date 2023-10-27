import CrossIcon from "./icons/IconCross"
import IconCheck from "./icons/IconCheck";

//recibe el props de todo
const TodoItem = ({todo, removeTodo, updateTodo}) => { 
  const {id, title, completed} = todo
    return(
        <article className="flex gap-4 border-b border-b-gray-400 py-4 dark:bg-gray-800">
            <button className={`h-5 w-5 flex-none rounded-full border-2 ${completed ? 
              "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "inline-block" }`}
              onClick={() => updateTodo(id)}
              >
                
              { completed && <IconCheck/>}
            </button>
            <p className={` grow text-gray-600 dark:text-gray-400 ${completed && "line-through"}`}>{title}</p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
              <CrossIcon />
            </button>
          </article>
    )
 }

 export default TodoItem;
import TodoItem from "./TodoItem";

//recibe el props de todos para desmenuzarlo con el map()
const TodoList = ({todos, removeTodo, updateTodo}) => { 
    return(
        <div className="mt-8 rounded-t-md bg-white [&>article]:px-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
        ))}
        
        </div>
    )
 }

 export default TodoList;
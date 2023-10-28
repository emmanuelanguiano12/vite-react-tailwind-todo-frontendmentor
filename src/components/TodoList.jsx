import { Droppable, Draggable } from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";

//recibe el props de todos para desmenuzarlo con el map()
const TodoList = ({todos, removeTodo, updateTodo}) => { 
    return(
      <Droppable droppableId="todos">
        {
          (droppableProvided) => (
            <div ref={droppableProvided.innerRef} 
            {...droppableProvided.droppableProps}
            className="mt-8 rounded-t-md bg-white [&>article]:px-4">
            {todos.map((todo, index) => (
              <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                {
                  (draggableProvided) => (
                    <TodoItem 
                      todo={todo}
                      removeTodo={removeTodo} 
                      updateTodo={updateTodo} 
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      {...draggableProvided.draggableProps}
                    />
                  )
                }
              </Draggable>
            ))}
            {droppableProvided.placeholder}
            </div>
          )
        }          
      </Droppable>
    )
 }

 export default TodoList;
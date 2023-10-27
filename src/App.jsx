import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to the gym",
    completed: false
  },
  {
    id: 2,
    title: "Complete course of JavaScript",
    completed: true
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false
  },
  {
    id: 4,
    title: "Complete Todo App on Frontend Mentors",
    completed: false
  },
  {
    id: 5,
    title: "Go to school",
    completed: true
  }
];

const App = () =>{

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    }

    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id) => { 
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () =>{
    setTodos(todos.filter((todo) => !todo.completed))
  };

  const [filter, setFilter] = useState("all")

  const changueFilter = (filter) => setFilter(filter)

  const filterTodos = () => {
    switch (filter){
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo)=>!todo.completed);
      case 'completed':
        return todos.filter((todo)=>todo.completed);
      default:
        return todos;
    }
  }

  return (
    <div className="bg-gray-300 min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      
      <Header />

      <main className="container mt-8 mx-auto px-4">

        <TodoCreate createTodo={createTodo}/> 

        <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>

        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>

        <TodoFilter changueFilter={changueFilter} filter={filter}/>

      </main>

      <footer className="text-center mt-8 dark:text-gray-400">
        Drag and drop
      </footer>
    </div>
  )
};
export default App;
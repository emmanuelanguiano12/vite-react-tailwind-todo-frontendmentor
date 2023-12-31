const TodoFilter = ({changueFilter, filter}) => { 
    return(
      <section className="container mx-auto mt-8">
        <div className="rounded flex justify-center p-4 gap-4 bg-white dark:bg-gray-800">
          <button className={`${filter === 'all' ? 'text-blue-600 hover:text-gray-400' : 'text-gray-400 hover:text-blue-600'}`} onClick={() => changueFilter("all")}>All</button>
          <button className={`${filter === 'active' ? 'text-blue-600 hover:text-gray-400' : 'text-gray-400 hover:text-blue-600'}`} onClick={() => changueFilter("active")}>Active</button>
          <button className={`${filter === 'completed' ? 'text-blue-600 hover:text-gray-400' : 'text-gray-400 hover:text-blue-600'}`} onClick={() => changueFilter("completed")}>Completed</button>
        </div>       
      </section>
    )
 }

 export default TodoFilter;
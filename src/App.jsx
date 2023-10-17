import CrossIcon from "./components/icons/Crossicon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () =>{
  return (
    <div className="bg-gray-300 min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold tracking-[0.3em] uppercase text-white ">Todo</h1>
          <button>
            <MoonIcon className="fill-red-500"/>
          </button>
        </div>
        <form className="mt-8 flex gap-4 items-center rounded-md overflow-hidden bg-white py-4 px-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input className="w-full outline-none text-gray-400" type="text" placeholder="Create a new todo" />
        </form>
      </header>

      <main className="container mt-8 mx-auto px-4">
        <div className="rounded-md bg-white [&>article]:px-4">
          <article className="flex gap-4 border-b border-b-gray-400 py-4">
            <button className="inline-block h-5 w-5 float-none rounded-full border-2"></button>
            <p className="text-gray-600 grow">Complete online JS curse</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 py-4">
            <button className="inline-block h-5 w-5 float-none rounded-full border-2"></button>
            <p className="text-gray-600 grow">Complete online JS curse</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 py-4">
            <button className="inline-block h-5 w-5 float-none rounded-full border-2"></button>
            <p className="text-gray-600 grow">Complete online JS curse</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="rounded flex justify-center p-4 gap-4 bg-white">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>       
      </section>

      <p className="text-center mt-8">Drag and drop</p>
    </div>
  )
};
export default App;
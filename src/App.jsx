import CrossIcon from "./components/icons/CrossIcons";
import MoonIcon from "./components/icons/MoonIcon";
function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen bg-gray-300">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-red-800" />
          </button>
        </div>
        <form className="bg-white flex gap-4 items-center rounded-md overflow-hidden py-4 px-4 mt-8">
          <span className="rounded-full inline-block h-5 w-5 border-2"></span>
          <input
            type="text"
            placeholder="Create a new todo"
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md ">
          <article className="flex gap-4 py-4 px-4 flex-none border-b-gray-400 border-b">
            <button className="rounded-full inline-block h-5 w-5 border-2"></button>
            <p className="text-gray-600 grow flex-none">
              Complete online javascript course
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 py-4 px-4 flex-none border-b-gray-400 border-b">
            <button className="rounded-full inline-block h-5 w-5 border-2"></button>
            <p className="text-gray-600 grow flex-none">
              Complete online javascript course
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 py-4 px-4 flex-none border-b-gray-400 border-b">
            <button className="rounded-full inline-block h-5 w-5 border-2"></button>
            <p className="text-gray-600 grow flex-none">
              Complete online javascript course
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between ">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-500">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="text-center mt-8">Drag and Drop</p>
    </div>
  );
}

export default App;

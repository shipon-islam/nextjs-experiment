import TodoDelete from "@/components/DeleteTodo";
import prisma from "@/prisma/db";
import { todoAction } from "../action";

export default async function Todos() {
  const todos = await prisma.todos.findMany();
  return (
    <>
      <form
        action={todoAction}
        className="max-w-sm mx-auto border-2 p-8 mt-8 rounded-md"
      >
        <div className="mb-5">
          <label
            htmlFor="todo"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Create your todo-
          </label>
          <input
            type="text"
            name="todo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Write a todo..✍️"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-auto block"
        >
          add
        </button>
      </form>
      <ul className="w-[24rem] mx-auto">
        {todos.reverse().map((todo: any) => (
          <li
            className=" px-4 py-2 border my-2 capitalize odd:bg-red-200 even:bg-blue-200 rounded-md flex justify-between"
            key={todo.id}
          >
            <span>{todo.name}</span>
            <TodoDelete id={todo.id} />
          </li>
        ))}
      </ul>
    </>
  );
}
